//For loops is at the very bottom.

// You need to add a semicolon to the end of every statement you are making in javascript.

// Statements are commonly the declaration of variables.

//You can declare variables with let, var, and const.  let is the most temporary, non global.

// let is specifically used in specific code blocks. It can be reassigned to other code blocks.
// let will not let you re-declare a variable

// YOU cant RE-DECLARE let declared variables
//let me = ‘foo’;
//let me = ‘bar’; // SyntaxError: Identifier ‘me’ has already been declared
// let is good for declaring variables in code blocks.

// var will let you re-declare a variable RE-DECLARE!!
//var me = ‘foo’;
//var me = ‘bar’; // No problem, me is replaced.

//Example below: its best to declare an operational sum or outcome variable by using let. Because, the value can change

//const price1 = 5;
//const price2 = 6;
//let total = price1 + price2;

// const is a global declaration statement. it will work inside and outside of code blocks.



// Multiple statements on one line are allowed when they are separated by semicolons.

// Declaring a function in javascript:

function myFunction(){
    document.getElementById("demoId").innerHTML = "Hello Dolly";
}

// String concatenation in js : "John" + " " + "Doe"


Multi- line comment format in JS


//JS treats the $ like a letter, so variable names can start with $

// Const and Arrays
// If you define an array using const, you can still change the elements in an array
// If you define an integer variable using const, you cannot change the integer value of the variable
// You cant reassign const with an array though

//You can change the properties of objects if they are declared with const
// Const can be something in a code block const x = 2
// Const can also be something else outside of the code block; function {} const x = 5 is ok

// var declared variables are "hoisted" to the top of the code, so you can set a variable equal to something before declaring it.

// carName = "Volvo"
// var carName;

// You cant hoist with let or const declared variables though.

//JS typeof funciton
// retuns the data type of a variable

//instanceof
// returns true is an object is an instance of an object type

//exponents can be x**2  or  Math.pow(x,2)

//When mathematical operators have the same predence (like division and multiplication)
// The order of operations carries out from the left of the equation to the right of the equation.

// For Loops

// Javascript For Loop!

//general formula

for (expression 1; expression 2; expression 3){
    //code block is executed
}

//Real example:

for (let i = 0; i < 5; i++) {
    text += "The number is" + i + "<br>";
}

//This example works as below in HTML code

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript For Loop</h2>

<p id="demo"></p>

<script>
let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>

// In the HTML example above, we first set text equal to an empty string.
// Next, the for loop is declared and we set text += to "The number is" + i + "<br>";
// Finally, all within the script element, the javacript getElementById function is executed, finds the correct tag with id,
// and uses the innerHTML function to add the five different lines of text created by the for loop

//Another way to use the for loop is to log the text to the console

for (let i = 0; i < 5; i++) {
    let soMany = i
    console.log('Hello ' + soMany);
  }

  // This will print 0, 1, 2, 3, 4 to the console

  for (let i = 0; i < 5; i++) {
    console.log(`Hello ${i}`);
  }

  // The above example will print Hello 0, Hello 1, Hello 2, Hello 3, Hello 4, Hello 5


// REMEMBER: you need to use backticks to print f-strings in javascript!

const names = 'cheese'

  console.log(`Hello ${names}!`)

// Another good example below: it will print each letter in cars.

for (let i = 0; i < 'cars'.length; i++) {
    console.log('cars'[i]);
  }

//Example below: how to print names of an array

var names = ["Chris", "Steve", "Adam", "porky"]

  for (let i = 0; i < names.length; i++) {
    console.log(names[i])
  }

//OR use the forEach function
// The for each function below is great because it turns this for loop into one line of code.

names.forEach(name => console.log(name));


//Arrow Functions

