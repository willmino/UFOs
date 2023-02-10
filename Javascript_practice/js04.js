// In HTML, the JS code is inserted between <script></script> tags

// Like so:


// Remember, innerHTML() is a function that can replace the existing contents of an element

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript in Body</h2>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Cheese";
</script>

</body>
</html> 

//In the above example, the function nested in the script tags will find the tag that has the id "demo". This turns out to be the <p /> tag

// Visualizing the DevTools HTML code will reveal that running this code will insert HTML text into the previously empty p tag.

// To link a javascript code .js file to the HTML code, you use the script tag
// <script src="index.js" type="text/javascript"></script>

//Above, you will see that the index.js file is the vale of the src attribute.

//Scripts can also be placed in external files, see the example above

//The js file will then have this function in it. It will look in the HTML code that referenes it and it will do the same thing
// That it does as when it is directly referenced in the HTML code.

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }

// You can also use document.write(5 + 6)

//Neveruse document.write after an HTML document is loaded.
//THIS WILL CAUSE THE existing HTML to be deleted.

// You can use an alert box/ message box to display data.
// Below, the run HTML code wont display ON the HMTL page, but the browser's message box will display the calculation (11).

<script>
window.alert(5 + 6);
</script>

// You can also simply skip the window object in the code and it will still show the same thing.
// This is because the window object is the global scope object.

//<script>
//alert(5 + 6);
//</script>

//console.log(5 + 6) will print the calculation to the log or the command line

