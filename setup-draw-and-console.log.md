# setup, draw, and console.log

Remember that, in a p5.js sketch, setup is called once, and draw is called repeatedly.

Here’s one way to see to see this. We will _instrument_ a sketch by adding `console.log` statements to its `setup` and `draw` functions, so that we can use the JavaScript console to see how when they're called.

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

![](.gitbook/assets/image%20%281%29.png)

Note that this code uses \(but does not define\) a variable named `frameCount`. p5.js defines this variable. It has the value 1 the first time that `draw` is called, 2 the second time, and so on.

`frameCount` is useful in animation. Here, we're using it to make sure that line six prints a different message to the console, each time that it is called.

If the `draw` function looked like this, instead:

```javascript
function draw() {
    console.log('draw');
}
```

Then the JavaScript console would look like this:

![](.gitbook/assets/image%20%286%29.png)

The  code is called more than once. 



 then the JavaScript console in Chrome only prints the message once. It puts a number next to it that describes how many times the same message has been printed. If your program prints the same message several times, you might miss it and think the computer is only running your console.log line once.

