//Lesson #1 Most Essential basic of javascript

// Javascript uses objects and functions at its core.
// Objects are referenced first, and functions are for the most part chained to the objects, in its most essential form

//For example: as simple print function is

console.log("Hello, World!")

// Notice that console is the object and log is the function. .log is chained to the object console. We pass "Hello, World!" through
// the function to log the string to the console.

// Lesson 2: https://www.w3schools.com/js/js_intro.asp
// This is a little more complex of an example

// One of many HTML methods is getElementById()

//Also in this first example we will use innerHTML function

// This example finds an HTML element (it fill find a tag that has an id="demo") and changes the element content

document.getElementById("demo").innerHTML = "Hello JavaScript";

//In the example on the website, we are clicking a button. The button tag has the type attribute = "button" (type = "button")
// and it has the onclick attribute ' document.getElementById("demo").innerHTML = "Hello Javascript!" '></button>

//Here is the HTML code below for the example

//On the HTML page, when we click the button that has the id we just explained, the getElementById function, chained to the document object,
// will grab the element <p /> tag that has the id = "demo". And it will use the innerHTML function to change the text from 
//"Javascript can change HTML content" to "Hello JavaScript!"
//
// This is because of the function in the onClick attribute in the button HTML element below.
//<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

//Note that this example perfectly works, you dont even need to manually connect to the d3 library to listen to the click.

<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

</body>
</html>
