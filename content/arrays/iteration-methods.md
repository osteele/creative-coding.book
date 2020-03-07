---
x: Iteration Methods
---

Iteration methods are one of two ways to do something to each of the elements of an array. The other, that we'll cover later, is using a `for` loop.

Given an Array, here are some ways you can use it.

## Do Something to Each Item in the Array

In the code below, the `greet` function is used to define *what* to do. `cats.forEach`, where the value of `cats` is an Array, means do a thing to each of the items in the array.

```js
let cats = ['Mark', 'Patches', 'Alvin'];

function greet(name) {
    console.log("Hello, " + name);
}

cats.forEach(greet);
```

The version that uses iteration method, `cats.forEach(greet)`, has the same effect as the following *explicit* code, that contains a line of code for each item of the Array:

```js
greet(cats[0]);
greet(cats[1]);
greet(cats[2]);
```

The iteraton method has several advantages over the explicit version:

* If `cats` had hundreds or thousands of items, it wouldn't be practical to write out the `greet(cats[_])` lines (with each `_` replaced by a different number) for each one. This could happen if the value of `cats` is computed, or is read from a file or other external data source.
* The code for the explicit version needs to be updated whenever the length of the array changes. It's not possible to make it work when the length of the array isn't known at the time that the code is written.
* The explicit version is prone to typos. It would be easy to write `greet(cats[0])` twice in a row instead of updating the second line to `greet(cats[1])`.

The disadvantage of the iteration method is that it is more _abstract_ (and can be more difficult to understand).

Try the code out [here](http://www.pythontutor.com/javascript.html#code=let%20cats%20%3D%20%5B'Mark',%20'Patches',%20'Alvin'%5D%3B%0A%0Afunction%20greet%28name%29%20%7B%0A%20%20%20%20console.log%28%22Hello,%20%22%20%2B%20name%29%3B%0A%7D%0A%0Acats.forEach%28greet%29%3B%0A&curInstr=8&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D). As you step through the code, note how each time the `greet` function is entered, there is a new frame, in which the `name` parameter has a different value.

## Transform an Array

\[Under construction\]
