# Functions

In mathematics, a _function_ can be defined as a process that associates an input \(or argument\) to an output \(or result\). Forget this for now! For our purposes functions are defining _new vocabulary_ that we can use in our web apps. Functions in practice are really just used to organize chunks of code that can be reused repeatedly.

A function in JavaScript generally has a _name_, a _parameter list_ that is enclosed in parentheses `( )`, and a _code block_ that is enclosed in brackets `{ }`.

## Declaring a function in Javascript

A function is created with an expression that starts with the keyword `function`. Functions generally have a _name_, and they always have a list of _parameters_ and a _body_, which contains the statements that are to be executed when the function is called. The body of a function that is created with the `function` keyword must always be wrapped in curly braces `{}`, even when it consists of only a single statement.

Then we use the word `return` followed by an expression to denote what the function should return to us when we call it. The `return` is not a required part of a function, but it’s useful when you want to use a value that the code in the function body calculates.

These are all valid functions:

```javascript
function celsiusToFahrenheit(celsius) {
  return (celsius + 32) * 9 / 5;
}
function celsiusToFahrenheit(blablablabla) {
  return (blablablabla + 32) * 9 / 5;
}
function alwaysBlue() {
  return 'blue';
}
```

Here’s how these functions could be used:

```javascript
let celsius = celsiusToFahrenheit(80);
let color = alwaysBlue();
```

The following are _not_ valid functions. The browser will refuse to load a JavaScript file that contains them. See if you can identify what is wrong with them. \(It isn’t the fact that their names being with `invalid`. The computer doesn’t generally care what your functions are named.\)

```javascript
function invalidCelsiusToFahrenheit {
  return (celsius + 32) * 9 / 5;
}
function invalidCelsiusToFahrenheit celsius {
  return (celsius + 32) * 9 / 5;
}
function invalidCelsiusToFahrenheit{celsius} {
  return (celsius + 32) * 9 / 5;
}
function invalidCelsiusToFahrenheit{celsius} (
  return (celsius + 32) * 9 / 5;
)
function invalidCelsiusToFahrenheit(celsius)
  return (celsius + 32) * 9 / 5;
invalidCelsiusToFahrenheit = (celsius) {
  return (celsius + 32) * 9 / 5;
}
```

## Summary

* Functions are written to perform a task.
* Functions take data, perform a set of tasks on the data, and then return the

  result.

* We can define parameters to be used when calling the function.
* When calling a function, we can pass in _arguments_. If the function

  definition has parameters, they will used as variables inside the function

  body, and their values will be the values of those arguments.

* We can use return to return the result value of the function.

## Further Resources

We have only just touched on functions. You’ll be creating and using many of them throughout the course. Here are a few resources for you to dive deeper:

* A fantastic \[primer on

  functions\]\([https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)\)

  by the Mozilla Developers Network

* \[Arrow

  functions\]\([https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/)\)

  and why people love them. \(This site has annoying popups. I recommend a popup

  blocker like uBlock Origin.\)

