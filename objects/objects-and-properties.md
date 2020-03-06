# Objects and Properties

You might have noticed that even with an ordered list of values (strings, numbers, etc…) and some methods and properties to add, change and delete them, we haven’t yet *programmed* something truly useful, especially something that might help us later when we are doing our side project.

Let’s take the example of wanting to have a list of posts from a user of a fictional social media application. What might that look like if we simply used an Array?

```js
let posts = [
    'March 8',
    'Today I went to the store, bought these fresh mangos!',
    5,
    'March 7',
    'Today I went to school and played the trumpet!',
    1,
    'March 6',
    'Today I took a long long nap, it was nice',
    4]
```

Can you see a problem with this? No, it’s not the mixed-and-matched value types. This is perfectly fine in a JavaScript Array (although it's not always a good practice).

* It’s impossible for us to know what each of those values corresponds to. You can guess that the first value in the array posts[0] is equal to the date, the second is the post content, and the third is?? Likes? Dislikes?

* Iterating through this would be a bad dream, but adding or removing individual values would be a nightmare (you’d shift the entire array)

For situations like this, we have *Objects*. An Object is an arbitrary collections of properties.

Objects in JavaScript are a lot like objects in real life. In JavaScript, an object is a variable that has properties and values. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, *etc.* The same way, JavaScript objects can have properties, which define their characteristics.

{% hint style="info" %}
Objects are at the very heart of JavaScript.
{% endhint %}

## Creating an Object

One way to create an object is by using braces `{}` as an expression.

```js
let observation = {
  gender: 'Male',
  paymentType: 'Cash',
  drinks: ['Americano', 'Frap', 'Iced Coffee']
};
console.log(observation.gender); // Male
console.log(observation.drinks); // [Americano, Frap, IcedCoffee]
// here we change the value of the gender property
observation.gender = 'Female';
console.log(observation.gender); // Female
```

In the example above, we have a variable named `observation`, whose value is an object with the following properties:

* `gender`: a String
* `paymentType`: a String
* `drinks`: an Array of String values

You’ll also notice one other thing in our `console.log()` function. We’re using **dot notation** in order to get the value for the property in the object.

Object properties are basically the same as ordinary JavaScript variables, except that they are attached to objects. You access the properties of an object with a simple dot notation:

```js
objectName.propertyName
```

## Object Challenges

Below are a few challenges to get you familiar with how to work with objects.

### Create an Object

Set the variable named `aClass` to an object that represents a college class. This object should store information such as the title, course number, and meeting location.

{% embed src="https://repl.it/@osteele/4-Empty-REPL" %}

[Solution](https://medium.com/applab-fall-2019/lab-5-e20f90547e37)

**Solution notes:**

* In JavaScript, `class` is a *reserved word* (like `let`, `var`, `const`, `function`, and some other words such as `if` and `while` that haven’t covered). This means that you can’t use it as a variable or property name. It would be like naming a person “And” or “Of”, or naming a band [“The The”](https://en.wikipedia.org/wiki/The_The). So we’ve used the name `aClass` instead—except that instead of just being confusing, JavaScript simply won’t accept it. (Try it!)

* Note the use of camelCase for `courseNumber` and `meetingLocation`. JavaScript doesn’t require this, but it’s good practice.

* The property names `title`, `courseNumber` *etc.* are arbitrary. For example, `number` would be a reasonable alternative name for the `courseNumber` property. `location`, `room`, and `roomNumber` are reasonable alternatives to `meetingLocation`. Users of the application don’t see these names, but as a code designer, they are your opportunity to make the construction of the application more maintainable by your future self or teammates.

* In the example solution, each `property: value` line ends with a `,`. The comma after the final line is optional. It makes the code look less like English and other natural languages (where a comma *separates* list items), but it makes it easier to add, remove, and rearrange properties in the object definition. For example, moving the `meetingLocation` line above the `courseNumber` line, or adding a new property after `meetingLocation`, doesn’t require adding or removing any commas from existing lines.

* In the example solution, the value of `meetingLocation` is a JavaScript String. Could it be a JavaScript Number? What are the trade-offs?

### Getting an Object Property

Given a variable named `ccLab`, whose value is an object with a “location” property, write code that uses `console.log` to print Creative Coding Lab meets in room 825” to the console.

{% embed src="https://medium.com/applab-fall-2019/lab-5-e20f90547e37" %}

[Solution](https://medium.com/applab-fall-2019/lab-5-e20f90547e37)

**Solution notes:**

* This solution uses `location` instead of `meetingLocation` as the name. Again, the design of the object property names is somewhat arbitrary: what matters is that the code that defines the name agrees with the code that uses it. The `console.log` lines in this solution could not be mixed and matched with the ccLab definition from the previous solution.

* If ccLab.title had been Creative Coding Lab”, the code could have been `console.log(ccLab.title, "meets in room", ccLab.location)`.
****
### Setting an Object Property

`business` is a variable whose value represents a business location. Add code to the following code fragment that sets the business “likes” count to 10. (Do this by writing new code. Don’t simply edit the existing code to change the value that is used in business’s initial value.)

{% embed src="https://medium.com/applab-fall-2019/lab-5-e20f90547e37" %}

[Solution](https://medium.com/applab-fall-2019/lab-5-e20f90547e37)

### Incrementing an Object Property

Similar to the previous challenge, but this time write code that increments the business likes count. For example, if the business is initialized with a likes count of 0, after running the code the likes count should be 1. If it is initialized to a likes count of 10, after the running the code the likes count should be 11.

{% embed src="https://medium.com/applab-fall-2019/lab-5-e20f90547e37" %}

[Solution](https://medium.com/applab-fall-2019/lab-5-e20f90547e37)
