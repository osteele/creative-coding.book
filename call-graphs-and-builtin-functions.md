# Call graphs and built-in functions

Remember the function “corners” that we wrote on Tuesday?

{% code title="sketch.js" %}
```javascript
function setup() {
    createCanvas(windowWidth, windowHeight);
    fill("black");
    corners(10, 10);
}

function corners(x, y) {
    rect(x, y, 20, 20);
    rect(x, y + 100, 20, 20);
    rect(x + 100, y, 20, 20);
    rect(x + 100, y + 100, 20, 20);
}
```
{% endcode %}

This is a function that we _defined_ , and that we also _use_.

We defined it by using the `function` keyword: `function corners(x, y)`, on line 7.

We use by _calling_ or _invoking_ it: `corners(0, 0)`, on line 4.

In fact, Tuesday's sketch defines _two_ functions, `setup` \(defined on lines 1–5\) and `corners`  \(lines 7–12\).

The body of the `setup` function contains a call to `corners`. \(More briefly: “`setup` calls, or uses, `corners`.”\)

We can describe this relationship, between `setup` and `corners`, by using a _**call graph**_.

![](.gitbook/assets/image%20%2811%29.png)

A call graph shows which functions call which other functions. It’s a way of visualizing a program, just like, outside of coding, an _outline_ or a _table of contents_ is a way of visualizing the structure of a book.

Our code also calls some functions that we _didn’t_ define in `sketch.js`. The `setup` function calls `createCanvas` and `fill`. The `corners` function calls `rect`.

![](.gitbook/assets/image%20%284%29.png)

These are functions that p5.js defines. We can use the call graph to show which functions are defined in the code that we wrote, and which ones are defined in another body of code, such as p5.js.

![](.gitbook/assets/image%20%287%29.png)

The JavaScript language itself also defines functions. For example, in the activity today we’ll mention the _cosine_ function, `Math.cos`. If our program used `Math.cos`, its call graph would look like this.

![](.gitbook/assets/image%20%282%29.png)

