Remember that, in a p5.js sketch, `setup` is called once, and `draw` is called repeatedly.

Let's test this. We will _instrument_ a sketch by adding `console.log` statements to its `setup` and `draw` functions. This allows us to use the JavaScript console, to see how when these functons are called. (Specifically, when the `console.log` lines are executed.)

{% code title="sketch.js" %}
```java
function setup() {
    console.log('setup');
}

function draw() {
    console.log('draw', frameCount);
}
```
{% endcode %}

![](../assets/images/image-4.png)

Note that this code uses (but does not define) a variable named `frameCount`. p5.js defines this variable. It has the value 1 the first time that `draw` is called, 2 the second time, and so on.

`frameCount` is useful in animation, in order to write code that behaves differently each time it's called. Here, we're using `frameCount` for a different purpose: to make sure that line six prints a different message to the console each time `draw`.

If we left `frameCount` out of the call to `console.log`, so that it printed the same message each time, the JavaScript console would look like this:

```javascript
function draw() {
    console.log('draw');
}
```

![](..//assets/images/image-5.png)

At the time I took the screenshot, `console.log('draw')` had been called 354 times. Instead of printing the `draw` on 354 consecutive lines, the JavaScript console just prints it one, with an annotation next to it to show how many times the same message has been printed.

This is a display shortcut that's built into the JavaScript console, when the same line of code calls `console.log` with the same arguments. It's often helpful (it can keep messges from scrolling off the top of the console), but if your program prints the same message several times, you might miss it and think a function that's called again and again is only being called once.
