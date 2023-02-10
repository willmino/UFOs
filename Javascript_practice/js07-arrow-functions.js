// Javascript Arrow Functions!

let myFunction = (a, b) => a * b;

//Call the arrow function defined in the line above.

myFunction(3,5)

//Before arrow:
hello = function() {
    return "Hello World!";
  }

//Refactored with Arrow Function

hello = () => {
    console.log ("Hello World!");
}

hello

//Using the above line of code, now when you use the variable hello, it will cause the console to log 'Hello World!' to it.


//forEach function
var names = ["Chris", "Steve", "Adam", "porky"]

names.forEach(name => console.log(name));

hello = (val) => "Hello " + val;

hello('Cheese')

//Will print 'Hello Cheese'

hello = val => "Hello " + val;

//Above, hello(val) will also print "Hello val". but val needs to be replaced with a "string"



