// Javascript If statements! (conditional statements)

// general formula

if (condition) {
    //block of code to be executed
}

if (hour < 18){
    greeting = "Good day";
}

// The result of the below example will be that the variable greeting will equal "Good Day"
// The HTML code for the text for the <p /> tag will be changed from "Good Evening!" to "Good day!"

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript if</h2>

<p>Display "Good day!" if the hour is less than 18:00:</p>

<p id="demo">Good Evening!</p>

<script>
if (new Date().getHours() < 18) {
  document.getElementById("demo").innerHTML = "Good day!";
}
</script>

</body>
</html>

// if else general formula below

if (hour < 18) {
    greeting = "Good Day";
} else{
    greeting = "Good evening";
}

// HTML code example of an if else statement

//In the below example, the javascript will chain the getElementById() function to the document object. The passed string "demo" will
//cause javascript to look for the <p /> tag because it has id="demo". The function will use innerHTML chained to it to change the text
//of the p tag from "Good Evening!" to "Good Day!". This is all done because of the coditional statement. The conditional satisfied
//is the hour < 18, so it carries out the if part.


<!DOCTYPE html>
<html>
<body>

<h2>JavaScript if .. else</h2>

<p>A time-based greeting:</p>

<p id="demo"></p>

<script>
const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

document.getElementById("demo").innerHTML = greeting;
</script>

</body>
</html>

// If else if else statement.

// The general formula is below.

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

//Practical example below:

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// HTML code example of if else if else statement

// Javascript will check for the actual time of day using the new Date().getHours(); function. If the actual time of day
// if 10:05, thenthe else if statement will be satisfied.

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript if .. else</h2>

<p>A time-based greeting:</p>

<p id="demo"></p>

<script>
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("demo").innerHTML = greeting;
</script>

</body>
</html>





