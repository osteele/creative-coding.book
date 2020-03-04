# Variables

A variable is the name of a _container_ that _stores_ \(or “points to”\) a _value_.

Variables are the rice and soy sauce of your programs, they give you the ability to grab hold of the bits in your computer and assign names to them.

The _concept_ of variables is the most important thing you can possibly learn at this point in the class. In JavaScript, variables are used to point to values — bits of 1s and 0s somewhere on your disk that make up your program. You can create variables to point not just to the simple values \(numbers and strings\) that we used above, but to point to entire functions and objects \(which we’ll learn about later\).

You create variables in JavaScript using the `let`, `const`, or `var` keywords. In general, we’ll avoid using the `var` keyword to create a variable as it’s an old web style that is being phased out.

In general, you use the `const` word when you’re sure the value of the variable won’t change. However, a _mutable_ variable \(a variable that can point to different values at different times\) is often needed, particularly as a counter when we need to loop through something.

`let` is a signal that the value of the variable may be reassigned.

## How to create a variable in JavaScript

To create a variable, use the word `let` or `const` followed by the name of your variable, followed by an `=` sign and the variable’s value:

```javascript
let degrees = 80;
```

## Create a variable that holds a number:

To create a number variable, simply use the keyword `let` or `const`,, give it a name and a numeric value. For example:

```javascript
const pi = 3.14159;
```

The above creates a variable named `pi` and sets its value equal to 3.14159.

The other way to create a variable is to use the word `let`. Remember our old friend:

```javascript
let degrees = 80;
```

Here we create a variable called `degrees` and set its value to 80. We use `let` here because we’ll probably want to change the value of temp at some point \(maybe our program is reading data from a temperature sensor\).

Remember the expression that converts the number 80 from Fahrenheit from to Celsius degrees?

```javascript
(80 - 32) * 5 / 9
```

After the `let degrees = 80;` statement is executed, the following two expressions have the same value.

```javascript
(80 - 32) * 5 / 9
(degrees - 32) * 5 / 9
```

`degrees` \(for now\) is just a wordier way of saying `80`.

Try this out in the REPL. Enter `let degrees = 80;`, and then enter `(degrees — 32) * 5 / 9`.

Since we used `let` to declare the variable \(and not `const`\), we can change its value. In the REPL, enter `degrees = 50`, and then enter `(degrees — 32) * 5 / 9` a second time. What is printed in the REPL?

Let’s create a variable to hold the result of this calculation:

```javascript
// To convert Fahrenheit to Celsius: subtract 32, then multiply by 5, then divide by 9
let degrees = 80;
let celsius = (degrees - 32) * 5 / 9;
```

The `let degrees = 80;` line creates a variable named `degrees` and stores the number 80. The `let celsius = …` line creates a variable named `celsius`; performs a sequence of operations — multiplies the value of the `degrees` variable by 9, then multiplies that value by 5, and finally divides _that_ value by 9 — and stores the final computed value in the _celsius_ variable.

Try it out! The following REPL comes pre-loaded with the definition of `degrees` and `celsius`.

1. Click the green triangle at the top, to run the code in the top pane.
2. Click on the lower pane. Enter `degrees` \(+Enter\) and `celsius` \(+Enter\) to

   see the values of those variables.

3. Try changing the code, and running it again \(the green triangle at the top\).
4. Can you add a `let fahrenheit =`, that uses the value of `celsius` to

   calculate degrees in Fahrenheit?

{% embed url="https://repl.it/@osteele/4-FahrenheitToCelsius" %}

## Camel Case

Camel Case \(or “camelCase”\) is a way of capitalizing all the words except the first one. e.g. iPhone, or eBay. Almost everyone recommends your JavaScript variable names with more than one word are formatted using camel case!

```javascript
const feetPerMile = 5280;
let feetWalkedToday = 3890;
let degreesFahrenheight = 80;
```

## String Values

A String is a sequence of letters, digits, and special characters such as spaces, tabs, and line breaks \(new lines or carriage returns\). Creating a string variable is exactly the same as a number, except you need to enclose your value in double quotes `"`, single quotes `'` or backticks \`\`\`.

```javascript
let thingsILove = "I love dumplings";
let thingsILove = 'I love dumplings';
let thingsILove = `I love dumplings`;
```

All of the above are OK in JavaScript, and they all mean the same thing.

The `+` operator also works on strings. These next two lines have the same effect.

```javascript
let hello = "Hello Applab";
let hello = "Hello " + "Applab";
```

Note: The _string_ "12" is different from the _number_ 12. The _string_ is a sequence of characters: the character "1" followed by the character "2". The _number_ is an integer that is slightly greater than 10. 12 + 3 is equivalent to 15; "12" + "3" is equivalent to "1212".
