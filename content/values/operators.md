Operators can be used to create new values from existing values. For example, 5 and 10 JavaScript values (of type Number). The + operator combines two numbers into another number: 5 + 10 is also a JavaScript value (and is equal to 15).
JavaScript has the following arithmetic operators:
Addition ( + )
Subtraction ( — )
Multiplication ( * )
Division ( / )
Operators follow the same rules you learned in math:
Operations inside parentheses happen first. 2 * (1 + 2) is equivalent to 2 * 3, or 6.
* and / are applied before + and — . For example, 2 + 3 * 4 acts as though it were written 2 + (3 * 4), and is therefore equivalent to 2 + 12, or 14.
After that, operators are applied left-to-right. 5 — 3 — 1 acts as though it were written (5 — 3) — 1, and is equivalent to2 — 1 which is equivalent to 1.
For example, this expression uses several operators to convert the Fahrenheit number 80 to Celsius: (80 — 32) * 5 / 9. The parentheses insure that 32 is subtracted from 80 before the resulting number is then multiplied by 5, and then that is divided by 9.
Try it out! The object below is actually an interactive “Read-Eval-Print Loop”, or REPL—you can enter JavaScript into it, and run it. Ignore for now the top pane (“Not sure what to do? […]”), and click in the bottom pane (“node v10.16.0”, and the yellow “:·” prompt). Enter the text (80 — 32) * 5 / 9, and press the Enter key. You have just used a JavaScript as a calculator to convert 80° F into Celsius.
