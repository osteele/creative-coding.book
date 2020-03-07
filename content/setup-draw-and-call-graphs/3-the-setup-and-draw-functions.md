Here’s the call graph for our program, again. Recall that it defines two functions, `setup` and `corners`.

![](..//assets/images/image-5.png)

The `setup` function calls `corners`. Who calls `setup`? Why does any of the code in `sketch.js` ever get a chance to run?

p5.js calls `setup`. "setup" is a special name. When you open a page that uses p5.js, p5.js looks to see whether the sketch defines a function named "setup". If it does, p5.js calls this function when the browser page is loaded.

The call graph, including p5.js, looks like this:

![](..//assets/images//image-6.png)

If we draw everything, really, your sketch lives inside of a p5.js “sandwhich”:

![](..//assets/images/image-7.png)

Another function name that is special to p5.js is “draw”. P5.js calls `setup` once, when the web page loads. Then it calls `draw` .

![](..//assets/images/image-8.png)

In fact, p5.js calls `draw` over and over again, as long as the web page is open. (Or, depending on your browser, as long as the page is visible.)

The (static) call graph, above, shows which functions call which other functions. A _dynamic call graph_ which shows how many _times_ each function calls each other function.

![](..//assets/images/image-9.png)

We can also show this with a [_flow chart_](https://en.wikipedia.org/wiki/Flowchart). A flow chart is yet another kind of diagram, that describes the sequence of processes. Flow charts can be used to describe workflows, industrial processes, or business processes. Sometime in the 1940's, [the third-smartest mathematician to ever live](https://en.wikipedia.org/wiki/John_von_Neumann) used flow charts to plan computer programs before they were written.

![](..//assets/images/image-10.png)
