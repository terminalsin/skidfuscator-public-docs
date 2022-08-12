# Transformations 

Voici la page où je vais détailler chaque transformation un par un. Cela devrait vous aider à comprendre un peu ce qui se passe dans les coulisses et comment de telles transformations sont efficaces contre le reverse engineering.

Nous allons passer en revue les méthodes suivant :
- Number Obfuscation 
- String Obfuscation

## Number Obfuscation

Supposons le scénario suivant : 
- $x$ est le nombre que nous souhaitons crypter. 
- $n$ est la "seed" du bloc
- $d$ est le nombre crypté

Selon la mécanique simple du XOR :
$x\oplus n\oplus n=x$

Donc, par définition, si $n$ est notre seed, au moment de l'exécution, nous devons calculer $d$ de telle sorte que $d = x\oplus n$. Ensuite, nous devons modifier l'instruction bytecode telle que :

```java
int valeur = x ;
```

devient
```java
int value = d ^ n ;
```

Où $d$ est la valeur calculée à l'avance sous la forme d'une constante et $n$ le prédicat opaque. Par exemple :
```java
int valeur = 5 ;
```
devient
```java
int predicat = 0x100 ;
int valeur = 105 ^ predicat ;
```

## String Encryption

Le cryptage des Strings (chaînes de caractères) repose sur trois conditions de base avant de pouvoir être traité :
1. La constante string doit être disponible dans la pool de constantes.
2. La constante string doit être formatée sous UTF-8
3. Le string ne doit pas être vide

Avec cette constante, nous sommes en mesure d'injecter un système de cryptage symétrique à l'intérieur du code pour pouvoir masquer le String des décompilateurs/désassembleurs typiques.

### Algorithme Xor

Pour l'instant, nous utilisons un simple algorithme xor qui est assez résistant pour calculer notre string cryptée. Alors que cet algorithme est mathématiquement de la plus mauvaise qualité, et pourrait être craqué très probablement en temps polynomial si ce n'est en temps linéaire, notre objectif ici est de proposer une mise en œuvre facile et preuve de concept de la façon dont un prédicat opaque peut durcir le cryptage des strings. Dans les futures versions de Skidfuscator, nous utiliserons un moteur polymorphe pour le cryptage.

L'algorithme fonctionne actuellement de la manière suivante :

Soit $f_y(x)=x\oplus y\oplus n$ représentant la méthode de cryptage et de décryptage d'un caractère dans un string pour un $n$ et un $m_{max}$ donnés de 255

$y=i\mod m$

où $i$ représente l'indice du caractère dans le string, $m$ représente la taille du tableau d'entiers aléatoires avec des "clés" aléatoires, $n$ représente le prédicat opaque entier, $x$ le caractère à l'indice $i$ du string. 

Par définition :
$$
\begin{align}
f_y(f_y(x))&=x\oplus y\oplus n\oplus y\oplus n\\
&=x\oplus y\oplus y\oplus n\oplus n\\
f_y(f_y(x))&=x
\end{align}
$$

Nous obtenons ainsi un algorithme de cryptage/décryptage utilisable qui est renforcé par un prédicat opaque et une suite de clés entières stockées localement. L'implémentation peut être vue [ici](https://github.com/terminalsin/skidfuscator-java-obfuscator/blob/master/dev.skidfuscator.obfuscator/obfuscator/src/main/java/dev/skidfuscator/obfuscator/transform/impl/string/BasicEncryptionGenerator.java)
