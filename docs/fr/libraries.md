# Dépendences

Nous les détestons tous, mais pour ne pas corompre votre application Java, nous devons les utiliser. Cela permet de simplifier vos
configurations et ainsi de suite. Avec un peu de chance, dans le (future) plugin maven, elles seront gérées automatiquement. Cependant, c'est juste 
une autre chose sur notre liste de choses à faire pour le moment.

Pour ajouter des dépendances, c'est assez simple :
1. Créer un dossier appelé "libs".
2. Faites glisser toutes vos dépendances dans ce dossier
3. Ajoutez "-li=\<path to folder\>" à votre ligne de commande pour skidfuscator.

Exemple :
```console
java -jar obfuscator-1.0.0-SNAPSHOT.jar -li=libs -ex exception.txt FluffyClicker.jar
```
![Image of example](https://i.imgur.com/AYxEoYp.png)