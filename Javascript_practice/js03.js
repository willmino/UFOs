// Javascript can also change the HTML style (CSS).

// using this code
document.getElementById("demo").style.fontSize = "35px";

//set the onClick attribute of a <button /> equal to the function above, nested with quotations to change the font size!

//2nd Example

// JS cam also hide elements by using this line of code in the <button />, set the onclick attribute equal to the below code

document.getElementById('demo').style.display='none'
//
// This will cause the code to disappear.


// both examples discussed can act upon the same HTML code
<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can hide HTML elements.</p>

<button type="button" onclick="document.getElementById('demo').style.display='none'">Click Me!</button>

</body>
</html> 

//3rd Example:

//JS can also show hidden elements. For example, the <p /> tag has style ="display:none" attribute.
// If the code is changed to style="display:block" then the hidden tag text will finally be displayed.


//<p id="demo" style="display:none">Hello JavaScript!</p>

// <button type="button" onclick="document.getElementById('demo').style.display='block'">Click Me!

// When you use DevTools to inspect the image, you will see that the code will change in real time!