Here's the index where I'll be detailing every transformer one by one. This should help you grasp a bit what's happening behind the scenes and how such transformations are effective against reverse engineering.

We'll be going over the following index:
- String Encryption
- Number Obfuscation


## Number Obfuscation

Lets assume the following scenario:$x$ is the number we wish to encrypt$n$ is the "seed" of the block

According to simple xor mechanics:
$x\oplus n\oplus n=x$