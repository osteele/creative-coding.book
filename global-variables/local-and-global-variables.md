# Local and Global Variables

Here’s a short program that prints "Hello class" to the JavaScript console.

```text
function setup() {
    let person = "class";
    console.log("Hello", person);
}
```

Here's a modification, that moves the greeting code \(line 3, above\) into a separate function. \(This is similar to what we did for `corners`, on Tuesday.\)

```text
function setup() {
    let person = "class";
    greet();
}

function greet() {
    console.log("Hello", person);
}
```

This doesn't work!

![](../.gitbook/assets/image%20%2814%29.png)

 The `setup` function _defines_ a variable named `person`. The `greet` function _uses_ a variable named `person`. But it’s not defined!

Remember when I explained that defining a variable is like adding a word to a dictionary? Each function has its own dictionary. The `setup` function adds the word “person” to the dictionary for setup. The `greet` function has a _different_ dictionary, that doesn't define this word \(variable\).

We can fix this by moving the definition of `person` outside of any function.

```text
let person = "class";

function setup() {
    greet();
}

function greeti() {
    console.log("Hello", person);
}
```

When `person` is defined inside a function, it’s a _local variable_, that can only be used in that function. When `person` is defined outside of any function, it’s a _global variable_, and all the code in the sketch has access to it.

In this latest sketch, `person` is both _defined_ \(`let person`\) and _initialized_ \(`person = "class"`\) in one statement, on line 1. The definition tells JavaScript “this is a variable, that has a value”. The initialization tells JavaScript “this is what the value _is”_.

We can also split the definition and the initialization into two lines:

```text
let person;
person = "class";

function setup() {
    greeting();
}

function greet() {
    console.log("Hello", greetee);
}
```

This is useful in order to initialize the variable's value in one function, and use it in another.

```text
let person;

function setup() {
    person = "class";
    greet();
}

function greet() {
    console.log("Hello", greetee);
}
```

You will see this pattern, of defining a global variable outside of any function and then initializing it in `setup`, all the time.

In this particular case, we could also pass the value of the `person` variable from `setup` to `greet`, as an argument. This is what we did with the `corners` function on Tuesday. Using that technique here would look like this:

```text
function setup() {
    let person = "class";
    greet(person);
}

function greet(person) {
    console.log("Hello", greetee);
}
```

Passing a value as an argument works here because `setup` calls `greet`. It wouldn't work if we wanted to get information from `setup` to `draw`, because `setup` doesn't call `draw` \(p5.js calls them both\). In this case, the global variable approach is necessary.

```text
let person;

function setup() {
    person = "class";
    greet(person);
}

function draw() {
    console.log("Hello", greetee);
}
```



