# Writing Exclusions (Skidfuscator >= 2.0.0)

Understanding exclusions might be tricky at first, but trust me, it is quite easy once you get the hang of it. First and foremost, it's
important to understand basic regex. 

## Basics of Regex (Regular expressions)

- Here's a basic string to match everything:
```sh
(.*?)
```

So the following would happen:
```
abozeofez // Matches!
zeigzoegze // Matches!
```

***

- To match any string which contains "roar", you'd have
```sh
roar
````

So the following would happen:
```
roar // Matches!
asdafroar // Matches!
grrr // No match!
```

***

To match any string which begins _with_ "uwu", you'd have:
```
^uwu
```

So the following would happen:
```
kitty-uwu // Matches!
uwu-kitty // No match!
```

***

If you'd like to read more about Regex, find out here: [Regex tutorial](https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285)

## Writing exclusions

Now, you'll want to create an exclusion file, and here you'll be able to mess around:
```java
method{main} // This will match any method with the name "main"
class{^com\/apache} // This will match any method which starts with "com.apache" (any class name replaces the "." with "/"
```

For example, if you want to only obfuscate the content of the com.example package you can use this:
```JAVA
class{^(?!(com\/example)).*$}
```
