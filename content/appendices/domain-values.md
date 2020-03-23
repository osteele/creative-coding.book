JavaScript has primitive values: Number, String, Boolean.

These values are used to represent something about the real world. For example, a Number can be used to represent a count of something (how many times has the user clicked a button, how many cats should be drawn on the screen), or a dimension (how many feet or meters long is a table that is being drawn, how many pixels should it occupy on the screen). A string can be used to represent the label of a graph ("x", "meters"), a name ("Spot", "Rover"), or a CSS or RGB color ("red", "rgb(255, 0, 0)", "#ff0000").

These worlds outside of JavaScript, that has physical objects with natural-language names and dimensions, and causes things to happen on a screen that people are looking at, are *domains*.

It can be useful to remember that a value lives in two different places. To the JavaScript interpreter (the prgram that runs your program), it is just a JavaScript value. In your design, it is a domain value. So "Rover" and "red", are both strings, so far as JavaScript is concerned. But in your program design, the former might be a name or a value, and "red" might be a CSS color name. Just is it is important to JavaScript that 10 and "10" are different types, it is important in your program to distinguish between values that are used to represent different domain values, even if they have the same JavaScript type.
