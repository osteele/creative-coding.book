Some errors (*syntax errors*), such as a missing or extra parenthesis, cause the code not even to load. The browser can tell that something is wrong as soon as it loads the page. The web page will do nothing, and you’ll see an error message in the JavaScript Console.

Some errors (*runtime errors* or *exceptions*), such as an undefined variable name or trying to use a number as though it were a function, are detected by JavaScript running in the browser. These also produce an error message in the JavaScript console. Your program may run for a while, until the browser executes the line that triggers the error, and then it will stop. The browser can tell that something is wrong when it runs a line of your code.

Some errors (*semantic errors*, or *logic errors*), such as adding 1 to a number when you meant to subtract one, the browser can’t detect as errors at all. They show up as the program running, but behaving differently from how you intended.

*Syntax errors* are the easiest to debug, since they show up soon and with a clear diagnostic message. Semantic errors are the most difficult. If this were a second-semester software engineering course, we might spend some time talking about how to construct programs so that *semantic errors* show up as *runtime errors* instead.
