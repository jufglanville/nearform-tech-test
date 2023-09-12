# NearForm Tech Test

Live coding tech test for NearForm.

## Instructions

### Language Game
[Pig Latin (Wikipedia)](https://en.wikipedia.org/wiki/Pig_Latin) is a language game played by children that alters words by rearranging them into a coded language.

### The rules of the game are as follows:
#### Rule 1
For words that begin with a **consonant**, move all letters before the **first vowel (a, e, i, o, u)**  to the end and append **“ay”** as the suffix. 

Examples:
- `"pig" = "igpay"`
- `"latin" = "atinlay"`
- `"smile" = "ilesmay"`
- `"floor"= "oorflay"`
- `"string" = "ingstray"`


#### Rule 2
For words that begin with a **vowel**, leave the **vowel** in place and append **“yay”** as the suffix. 

Examples:
- `"egg" = "eggyay"`
- `"explain" = "explainyay"`
- `"I"= "Iyay"`


### Coding Exercise


1. Create a function that accepts the following sentences and returns the corresponding encoded message:

```
- Input: pleased to meet you

- Output: easedplay otay eetmay ouyay
```

```
- Input: how much does it cost

- Output: owhay uchmay oesday ityay ostcay
```

```
- Input: i would rather be at the beach

- Output: iyay ouldway atherray ebay atyay ethay eachbay
```

```
- Input: a tree whose elements have at most two children is called a binary tree

- Output: ayay eetray osewhay elementsyay avehay atyay ostmay otway ildrenchay isyay alledcay ayay inarybay eetray
```

2. Update the function to match the letter casing of the original sentence with the encoded sentence. For example, if the word **“Pig”** is passed, then **“Igpay”** should be returned. If the word **“LATIN”** is passed then **“ATINLAY”** should be returned.

```
- Input: Pleased to meet you

- Output: Easedplay otay eetmay ouyay
```
  
```
- Input: Do you speak Pig Latin

- Output: Oday ouyay eakspay Igpay Atinlay
```

```
- Input: Time flies when you are having fun

- Output: Imetay iesflay enwhay ouyay areyay avinghay unfay
```

```
- Input: A tree whose elements have at most two children is called a BINARY TREE

- Output: Ayay eetray osewhay elementsyay avehay atyay ostmay otway ildrenchay isyay alledcay ayay INARYBAY EETRAY
```


