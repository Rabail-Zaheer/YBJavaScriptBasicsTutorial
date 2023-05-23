document.write("Hello World");

var r = "Rabail Zaheer";

var x = "fun";
x = "wow";

x = 95;

/*   document.write("Hey!"); */
document.write(r); // variable from the script.js file
document.write(x);

// HOW DO WE ASSIGN VARIABLES AND WHAT ARE THE DIFFERENT DATATYPES

//STRING

var x = "Yahoo Baba";
document.write("<br>");
document.write(typeof x);

//Number

let a = 25;
document.write("<br>");
document.write(typeof a);

// Boolean

let b = true;
let c = false;
document.write("<br>");
document.write(typeof b);
document.write("<br>");
document.write(typeof c);

// Undefined

let e;

document.write("<br>");
document.write(typeof e);

// Null

let f = null;

document.write("<br>");
document.write(typeof f);

//Array

let g = ["HTML" + "css" + "JavaScript"];
document.write("<br>");
document.write(typeof g);

//Object

let h = {
  name: "Rabail Zaheer",
  Country: "Pakistan",
};
document.write("<br>");
document.write(typeof h);

//ARITHEMATIC OPERATORS

//Additon

var num1 = 2;
var num2 = 3;

var num3 = num1 + num2;
console.log(num3);

//Subtraction

var num4 = 2;
var num5 = 3;

var num6 = num4 - num5;
console.log(num6);

//Multiplication

var num7 = 2;
var num8 = 3;

var num9 = num7 * num8;
console.log(num9);

// Division

var num10 = 10;
var num11 = 5;

var num12 = num10 / num11;
console.log(num12);

// Modulus

var num13 = 10;
var num14 = 5;

var num15 = num13 % num14;
console.log(num15);

// Exponent

var num16 = 2;
var num17 = 3;

var num18 = num16 ** num17;
console.log(num18);

// Increment

var num19 = 2;
var num20 = 3;

console.log(num19);
console.log(num20);

console.log(num19 + num20);

num19++;
num20++;
console.log(num19);
console.log(num20);

// Decrement

console.log("Below is how decrement works");

var num21 = 2;
var num22 = 3;

console.log(num21);
console.log(num22);

num21--;
num22--;
console.log(num21);
console.log(num22);

// ASSIGNMENT OPERATORS

console.log("Assignment Ooperators");

let a1 = 10;
let a2 = 3;

/* console.log((a1 = a1 + a2)); */ // Same as below
console.log((a1 += a2));

let a3 = 10;
let a4 = 3;

/* console.log((a3 = a3 - a4)); */ // Same as below
console.log((a3 -= a4));

// CONSOLE COMMANDS

console.log("Hello World");

// using console to print the values of an array

const arr = [1, 2, 3, 4, 5];

console.log(arr);
console.table(arr);

// Using console to print an error

console.error("This line has a syntax error");

// Printing a warning in a console
// and using the console.time command to print how much time has take to run that command

console.time();
console.warn("This is a warning!");
console.warn("This is a warning!");
console.warn("This is a warning!");
console.warn("This is a warning!");
console.warn("This is a warning!");
console.timeEnd();

// Clearing the command

// //console.clear();
// document.getElementById("main").innerHTML;

// COMPARISION OPERATORS

let ab = 100;
let ac = 20;

console.log(ab == ac); // will be false

let n = 10;
let n1 = 10;

console.log(n === n1); // will be true
console.log(n == n1); // will also be true

let n3 = 10;
let n4 = "10";

console.log(n3 == n4); // will be true
console.log(n3 === n4); // will be false

// IF STATEMENT

if (ab > ac) {
  document.write("A is greater than B");
}

if (n3 === n4) {
  document.write("Data type is same");
}

// LOGICAL OPERATORS

let age = 20;

// Logical And Operator

if (age >= 18 && age <= 21) {
  console.log("Yes you are eligible");
}

// Logical OR Operator

if (age >= 18 || age <= 21) {
  console.log("Yes you are eligible");
}

// Logical NOT Operator

if (!age <= 12) {
  console.log("You are not eligible");
}

// IF ELSE STATEMENT

let i = 15;

if (x > 30) {
  console.log("X is greater than 30");
} else {
  console.log("X is smaller than 30");
}

let firstName = "Rabail Zaheer";
let gender = "Female";

if (gender == "Female") {
  console.log("Hello Miss " + firstName);
} else {
  console.log(`Hello Mr. ${firstName}`);
}

// IF ELSE IF STATEMENT
/* 
let per = 55;

if (per >= 80 && per <= 100) {
  console.log("You are in merit");
} else if (per >= 60 && per < 80) {
  console.log("You are in first division");
} else if (per >= 45 && per < 60) {
  console.log("You are in second division");
} else if (per >= 33 && per < 45) {
  console.log("You are in third division");
} else if (per < 33) {
  console.log("You Failed");
} else {
  console.log("Enter a valid percentage");
} */

// CONDITIONAL TERNARY OPERATOR

let number1 = 100;
let number2;

number1 == 100 ? (number2 = "True") : (number2 = "False");
console.log(number2);

number2 = number1 == 100 ? "True" : "False";
console.log(number2);

number2 = `The value is ${number1 == 100}` ? "True" : "False";

console.log(number2);

// SWITCH STATEMENT IN JAVASCRIPT

let day = 0;

switch (day) {
  case 0:
    console.log("Monday");
    break;

  case 1:
    console.log("Tuesday");
    break;

  case 2:
    console.log("Wednesday");
    break;

  case 3:
    console.log("Thursday");
    break;

  case 4:
    console.log("Friday");
    break;

  case 5:
    console.log("Saturday");
    break;

  case 6:
    console.log("Sunday");
    break;

  default:
    console.log("Enter a valid day!");
}

// Having multiple conditions in a single case

switch (day) {
  case 0:
  case 1:
  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Thursday");
    break;

  case 4:
    console.log("Friday");
    break;

  case 5:
    console.log("Saturday");
    break;

  case 6:
    console.log("Sunday");
    break;

  default:
    console.log("Enter a valid day!");
}

// USING CONDITIONS

switch (true) {
  case age >= 15 && age <= 20:
    console.log("You are Eligible");
    break;

  case age >= 21 && age <= 30:
    console.log("You are not Eligible");
    break;
  default:
    console.log("Enter a Valid Age");
}

// USING AN ALERT BOX
/* let v = 10;

let w = 20;
if (v > w) {
  alert("V is greater");
} else {
  alert("W is greater");
}
 */

// CONFIRM BOX
/* 
var box = confirm("Do you like our website?");

alert(box);
if (box) {
  alert("Thanks!");
} else {
  alert("Sorry!");
} */

// PROMPT BOX
/* 
var prombox = prompt("what is your name?");

alert(`You are ${prombox}`); */

/* let per = prompt("Enter your percentage:");

if (per >= 80 && per <= 100) {
  console.log("You are in merit");
} else if (per >= 60 && per < 80) {
  console.log("You are in first division");
} else if (per >= 45 && per < 60) {
  console.log("You are in second division");
} else if (per >= 33 && per < 45) {
  console.log("You are in third division");
} else if (per <br 33) {
  console.log("You Failed");
} else {
  console.log("Enter a valid percentage");
} */

// FUNCTIONS

function hello() {
  document.write("Hello Everyone!");
}

hello();
document.write("</br>");
hello();
document.write("</br>");
hello();
document.write("</br>");
hello();

// FUNCTIONS WITH PARAMETERS
