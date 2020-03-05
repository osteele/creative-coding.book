# Arrays

JavaScript arrays are used to store multiple values in a single variable. An array can hold many values under a single variable name, and you can access the values by referring to an index number \(0,1,2,3..etc…\). Arrays are extremely useful, and you’ll be working with them all the time. Some important properti∑es of arrays:

* They store the order that items are added to them
* They can store a huge amount to items
* They can also store nested properties
* They can be very efficient, especially when paired with methods that operate on them.
* Array indexes start at zero.
* Arrays are always enclosed by two square brackets: `[]`

## Creating an Array

Creating an array is easy. Here’s an array of cat names. Run it and see what happens!

[https://repl.it/@ChristianGrewel/Lab-5-1](https://repl.it/@ChristianGrewel/Lab-5-1)

## Array Syntax

To declare an array in JavaScript, use the following syntax:

```javascript
let arrayName = [] //declares an empty array named arrayName
const arrayName = [] //declares an empty array named arrayName as a constant
```

Of course declaring an empty array isn't normally the end in and of itself. Instead, you'll want to sometimes declare an array with things like numbers inside of it, or, when we learn about objects, you can even include an array of those. In the "cat" example, we created an array of strings. But it could have been an array of numbers too:

{% embed url="https://repl.it/@ChristianGrewel/5-2" caption="" %}

Run this.

What is this `[1]` thing and why is it 88 instead of 8?!

This is because arrays always start with zero. Try editing the code above so that the `console.log()` function prints "8" instead.

## Adding values to an array

To add values to the array we can supply initial elements in the brackets. In this example, we’re adding three strings

```javascript
let cats = ['Mark', 'Patches', 'Alvin'];
```

Array elements are numbered, starting with zero. We can get an element by its number in square brackets:

```javascript
let cats = ['Mark', 'Patches', 'Alvin'];
console.log(cats[0]); // Mark
console.log(cats[1]); // Patches
console.log(cats[2]); // Alvin
```

You can replace an element by setting it equal to something else. You can also add a new item to the array:

```javascript
// replaces Patches with Peaches
cats[2] = 'Peaches'  // adds a new cat
cats[3] = 'Marmalade'
```

## Array Properties

Arrays also have their own properties and functions you can call to get information back. Some important and useful ones:

```javascript
array.length
array.push()
array.pop()
array.shift()
array.unshift()
array.toString()
```

A full list is [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

[This article](https://alligator.io/js/push-pop-shift-unshift-array-methods/) describes the differences between `push`, `pop`, `shift`, and `unshift`.

## Array Challenges

Below are a few challenges for you including a more advanced one that combines functions and arrays together.

## Create an array

{% embed url="https://repl.it/@ChristianGrewel/5-challenge-1" caption="" %}

Click [here](https://repl.it/@ChristianGrewel/5-challenge-1-solution) for a solution.

## Retrieve a value from an array

{% embed url="https://repl.it/@ChristianGrewel/5-challenge-2" caption="" %}

Click [here](https://repl.it/@ChristianGrewel/5-challenges-3-solution) for a solution.

## Add a new value to an array

{% embed url="https://repl.it/@ChristianGrewel/5-challenges-3" caption="" %}

Click [here](https://repl.it/@ChristianGrewel/5-challenge-2-solution) for a solution.

## Array Summary

Below are some important things to remember about arrays.

* Arrays represent lists. They are a way to store values in JavaScript.
* Arrays are created with brackets `[]`.
* Each value in an array is in a numbered position, its _index_.
* The _first_ item in an array has index _0_.
* Array values are separated by a _commas_.
* You can access a single value in an array using its numbered position, with syntax like: `myArray[0]`.
* Arrays have a `length` property, which allows you to see how many items are in an array.
* Arrays have their own methods. For example, if the value of `items` is an

  array, `items.push()` and `items.pop()` _modify_ this array by adding and

  removing items from it.

* Arrays have many other methods that perform different functions, such as

  `.slice()` and `.shift()`. You can read the documentation for any array method

  and property on the \[Mozilla Developer

  Network\]\([https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)\)

  website.

