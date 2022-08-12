# Rédaction d'exclusions (Skidfuscator >= 2.0.0)

Comprendre les exclusions peut être difficile au début, mais croyez-moi, c'est assez facile une fois que vous avez compris le principe. D'abord et avant tout, il est
important de comprendre les bases de regular expression (Regex).

## Notions de base de Regex

- Voici une chaîne de base qui correspond à tout :
``java
(.* ?)
```

Voici donc ce qui se passerait
``java
abozeofez // Match !
zeigzoegze // Match !
```

***

- Pour faire correspondre n'importe quelle chaîne de caractères contenant "roar", vous devez avoir
```java
rugissement
```

Donc, ce qui suit se produirait :
```java
roar // Match !
asdafroar // Match !
grrr // Pas de match !
```

***

Pour faire correspondre n'importe quelle chaîne de caractères commençant par "uwu", il faudrait.. :
``java
^uwu
```

Ainsi, on obtiendrait ce qui suit :
``java
kitty-uwu // Correspondance !
uwu-kitty // Pas de correspondance !
```

***

Si vous souhaitez en savoir plus sur Regex, cliquez ici : [Tutoriel Regex](https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285)

## Rédaction des exclusions

Maintenant, vous voudrez créer un fichier d'exclusion, et ici vous pourrez vous amuser. Skidfuscator lit les inclusions et les exclusions de la même manière : s'il correspond à un motif regex, __**il ne sera pas lu ou obfusqué**__. 

### Exclusions
La rédaction d'une exclusion est relativement simple. En utilisant le format Regex comme indiqué ci-dessous, vous êtes en mesure de faire exclure n'importe quel type de classe. N'oubliez pas d'échapper à tout "/" par un "\" pour éviter que Regex ne se suicide et que vous perdiez des heures à chercher ce qui ne va pas.

```java
// Cela correspondra à toute méthode portant le nom "main".
method{main} 
// Cela correspond à toutes les classes qui commencent par "com.apache". 
// (tout nom de classe remplace le "." par "/")
classe{^com\/apache} 
```

### Inclusions
Contrairement aux exclusions, vous pouvez vouloir **seulement inclure un ensemble particulier de classes ou un package** dans votre jar obfusqué. Ne vous inquiétez pas, c'est possible, même si c'est un peu plus compliqué.

```java
// Ceci correspondra à toutes les classes du package "com.example".
class{^( ?!(com\/exemple)).*$} 

// Ceci correspondra à toutes les classes du package "com.example" et // toutes les classes du package "com.example". 
// toutes les classes du paquetage "com.eclipse". 
// Vous pouvez ajouter autant de paquets que vous le souhaitez avec l'argument "|".
class{^( ?!(com\/exemple)|(com\/eclipse)).*$} 
```

## Débug des exclusions

Je recommande fortement l'utilisation d'un debugger pour regex, tel que [Regex101](https://regex101.com/), pour pouvoir déterminer ce qui match et ce qui ne match pas. 

Tous les noms de classe, par défaut, suivent le format "package1/package2/class1". Bien que vous puissiez voir dans la JVM que le format est différent, dans le cas de Skidfuscator, le format ci-dessus a été décidé comme étant le plus reflétant de la hiérarchie des fichiers Jar/Zip.