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
/* 
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
} */

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
/* 
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

function sum(a, b) {
  console.log(a + b);
}

sum(10, 20);

function greetings(fname1, lname1) {
  console.log(`Hello ${fname1} ${lname1}`);
}

greetings(`Rabail`, `Zaheer`);

// ADDING DEFAULT VALUES

function hello1(fname = "Sadaruddin", lname = "Charan") {
  console.log(`Hello ${fname} ${lname}`);
}

hello1(); // if someone doesn't write the needed argumnents then the default values will be printed

// FUNCTIONS WITH RETURN VALUES

function fullName(fname2 = "Jawad", lname2 = "Charan") {
  let a = fname2 + " " + lname2;
  return a;
}

let fn = fullName("Rabail", "Zaheer");
console.log(fn);

// SECOND EXAMPLE
function addmarks(math, eng, sc) {
  var s = math + eng + sc;

  return s;
}

function percentage(tt) {
  var per = (tt / 100) * 100;
  console.log(per);
}
var total = addmarks(80, 80, 80);

percentage(total);

// GLOBAL AND LOCAL VARIABLES

// Variables outside the function is a global variable and inside the function is the local variable

let myName = "Rabail";

function hellow() {
  console.log(myName);
}

hello();
console.log(myName); */

// EVENTS

/* Mouse Events

Click - onclick,
Double Click - ondblclick,
Right Click - oncontextmenu,
Mouse hover - onmouseenter,
Mouse Out - onmouseout,
Mouse Down - onmousedown,
Mouse Up - onmouseup */

/* Keyboard Events

Key Press - onkeypress, - this event only works in forms and on body tags
Key Up - onkeyup */

/* Window Events

Load - onload,
Unload - onunload,
Resize - onresize,
Scroll - onscroll */
/* 
function welcome() {
  document.write(`Welcome to my site!`);
}

// WHILE LOOP

let wl = 1;
while (wl <= 10) {
  console.log(wl + ") Rabail Zaheer </br>");
  wl = wl + 1;
}

// DO WHILE LOOP

let dw = 1;

do {
  console.log(dw + ") Sadaruddin Charan </br>");
  dw++;
} while (dw <= 10);

// FOR LOOP

for (let a = 1; a <= 10; a++) {
  console.log(a + ") Yahoo Baba Youtube Channel has amazing tutorials! </br>");
}
 */
// BREAK AND CONTINUE STATEMENT
/* 
// WITHOUT ANY BREAK OR CONTINUE STATEMENT
for (let a = 1; a <= 10; a++) {
  if (a == 3) {
    document.write("Hey : " + a + "</br>");
  }
  document.write("Number :" + a + "</br>");
}

// WITH CONTINUE STATEMENT
for (let a = 1; a <= 10; a++) {
  if (a == 3) {
    document.write("Hey : " + a + "</br>");
    continue;
  }
  document.write("Number :" + a + "</br>");
}

// WITH BREAK STATEMENT

for (let a = 1; a <= 10; a++) {
  if (a == 3) {
    document.write("Hey : " + a + "</br>");
    break;
  }
  document.write("Number :" + a + "</br>");
} */
/* 
// EVEN AND ODD NUMBER USING LOOPS

for (let a = 1; a < 10; a++) {
  if (a % 2 == 0) {
    document.write(a + "</br>");
  }
}

for (let a = 1; a < 10; a++) {
  if (a % 2 !== 0) {
    document.write(a + "</br>");
  }
}

// NESTED LOOPS - PRINTING NUMBERS FROM 1 - 100 IN TABULAR FORM

for (let a = 1; a <= 100; a = a + 10) {
  for (let b = a; b < a + 10; b++) {
    document.write(b + "  ");
  }
  document.write("</br>");
}

// NESTED LOOPS - PRINTING A PATTERN

for (let i = 1; i <= 5; i++) {
  for (let j = 1; (j = i); j++) {
    document.write(b);
  }
  document.write("</br>");
}

// NESTED LOOPS - PRINTING A DIFFERENT PATTERN
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(a);
  }

  document.write("</br>");
}

// NESTED LOOPS - PRINTING ANOTHER PATTERN

for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    document.write(a);
  }

  document.write("</br>");
}

// NESTED LOOPS - PRINTING ANOTHER PATTERN

for (let i = 5; i >= 1; i--) {
  for (let j = i; j >= i; j++) {
    document.write(b);
  }

  document.write("</br>");
} */

// ARRAYS

/* let ary = [10, 20, 30, 40];

document.write(ary[2] + "</br>");

for (let a = 0; a <= 3; a++) {
  document.write(ary[a] + "</br>");
}
 */
// Constructor Method to Declare an Array

// when we don't know how many value and what values we are gonna assign we can use the constructor method and put a number which suggests the length of the array
/* 
let ar = new Array(4);

ar[0] = 10;
ar[1] = 20;
ar[2] = "Harry";
ar[3] = true;

document.write(ar);

// or we can directly add the values in this arry

let arry = new Array(12, "blue", 15, "green");

document.write(arry); */

// LOOPING VALUES IN AN ARRAY
/* 
let array1 = new Array(3);

for (let g = 0; g < 3; g++) {
  array1[g] = prompt("Enter the value: ");
}

document.write("<ul>");
for (let a = 0; a < 3; a++) {
  document.write("<li>" + array1[a] + "</li>");
}
document.write("</ul>"); */

// MULTIDIMENSIONAL ARRAY

document.write("</br>");

document.write("</br>");

document.write("</br>");
let multiarr = [
  ["Harry", 18, "Male", "Potions"],
  ["Hermoine", 18, "Female", "History of magic"],
  ["Ron", 18, "Male", "Flying Lessons"],
  ["Tom", 25, "Male", "Defence Against The Dark Arts"],
];

document.write("<table border = '1px' cellspacing = '0' ");
for (let hp = 0; hp < 4; hp++) {
  document.write("<tr>");
  for (let hp1 = 0; hp1 < 4; hp1++) {
    document.write("<td>" + multiarr[hp][hp1] + "</td>");
  }
  document.write("</tr>");
}
document.write("</table>");

// MANIPULATING / CHANGING THE ELEMENTS OF AN ARRAY

let narr = ["Harry", 18, "Male", "BCA"];
document.write(narr + "</br>");
narr[0] = "Sunny";
document.write(narr + "</br>");

// DELETING THE VALUES
// the delete method deletes the value but the index is there
delete a[1];
document.write(a + "</br>"); // value is deleted but the space for the value is there

document.write(a[1] + "</br>"); // when we print that space it says that it is undefined

// ARRAY METHODS

/* sort()
reverse()
pop()
push()
shift()
unshift()
concat()
join()
slice()
splice()
isArray()
indexOf()
lastIndexOf()
entries()
every()
filter()
find()
findIndex()
includes()
some()
forEach()
toString()
valueOf()
fill() */

// UNDERSTANDING SORT() AND REVERSE()

document.write("</br>");

let sortingArray = ["Rabail", "Komal", "Nabeel", "Adeel"];
document.write(sortingArray + "</br>");

document.write("</br>");

sortingArray.sort();
document.write(sortingArray + "</br>");

document.write("</br>");

sortingArray.reverse();
document.write(sortingArray + "</br>");

// UNDERSTANDING PUSH() AND POP()

document.write("</br>");
document.write("</br>");

let poppingArray = ["Rabail", , "Komal", "Nabeel", "Sharjeel"];

document.write(poppingArray + "</br>");

poppingArray.pop();

document.write(poppingArray + "</br>");

document.write("</br>");

poppingArray.push("Adeel");

document.write(poppingArray + "</br>");

// UNDERSTANDING SHIFT() AND UNSHIFT()

document.write("</br>");

document.write("</br>");

let shiftUnshift = ["Poppy", "Rose", "Lilac", "Bloom"];

document.write(shiftUnshift + "</br>");

shiftUnshift.shift();

document.write(shiftUnshift + "</br>");

document.write("</br>");

shiftUnshift.unshift("Stella");

document.write(shiftUnshift + "</br>");

document.write("</br>");

document.write("</br>");

// UNDERSTANDING CONCAT() AND JOIN()

let positiveemotions = ["happiness", "Contentment", "love"];

for (let a = 0; a < positiveemotions.length; a++) {
  document.write(" " + positiveemotions[a] + " ");
}

document.write("</br>");

let allemotions = positiveemotions.concat(
  "Anger",
  "Sadness",
  "anxiety",
  "despair"
);
for (let a = 0; a < allemotions.length; a++) {
  document.write(" " + allemotions[a] + " ");
}

document.write("</br>");

document.write("</br>");

document.write("</br>");

// JOIN MAKES SEPRATE VALUES INTO A SINGLE STRING

let joiningEmotions = allemotions.join("/");
for (let a = 0; a < joiningEmotions.length; a++) {
  document.write(" " + joiningEmotions[a] + " ");
}

document.write("</br>");

document.write("</br>");
document.write("</br>");

// UNDERSTANDING SLICE AND SPLICE
let understandSlice = ["Rabail", "Zaheer", "Kalhoro"];

let understandSlice1 = understandSlice.slice(0);
document.write(understandSlice1 + "</br> </br>");

document.write("</br>");
document.write("</br>");

let understandSplice = ["Rabail", "Sharjeel", "Komal", "Adeel", "Nabeel"];
document.write(understandSplice);

document.write("</br>");
document.write("</br>");

understandSplice.splice(2, 0, "Arsal", "Ursula");
document.write(understandSplice);

document.write("</br>");
document.write("</br>");

document.write("</br>");
document.write("</br>");

// UNDERSTANDING IS ARRAY METHOD

var arr1 = ["Rabail", "Zaheer", "Kalhoro"];

document.write(arr1 + "</br> </br>");

// var isarr = Array.isArray(arr1);

if (Array.isArray(arr1)) {
  document.write("This is an Array");
} else {
  document.write("This is not an Array");
}

document.write("</br>");
document.write("</br>");

// UNDERSTANDING INDEXOF AND LASTINDEXOF METHODS

let indexArry = ["Rabail", "Adeel", "Nabeel", "Komal", "Rabail"];

document.write(indexArry + "</br> </br>");

var checkindex = indexArry.indexOf("Rabail", 2);

document.write(checkindex + "</br> </br>");

document.write("</br>");
document.write("</br>");

var checkindex = indexArry.indexOf("Arsal");

document.write(checkindex + "</br> </br>");

document.write("</br>");
document.write("</br>");

// LASTINDEXOF FUNCTION

var checklastindex = indexArry.lastIndexOf("Rabail");

document.write(checklastindex + "</br> </br>");

document.write("</br>");
document.write("</br>");

// UNDERSTANDING ARRAY INCLUDES METHOD
// Includes method is case sensitive and matched the exact value

let newaryy = ["Chrome", "Edge", "Safari"];

document.write(newaryy + "</br> </br>");

let newaryy1 = newaryy.includes("Opera");

document.write(newaryy1 + "</br> </br>"); // returns false as there is no Opera in the array

let newaryy2 = newaryy.includes("Safari");
document.write(newaryy2 + "</br> </br>"); // returns true

let newaryy3 = newaryy.includes("safari");
document.write(newaryy3 + "</br> </br>"); // returns false as the "S" that we are trying to match is the small character

// UNDERSTANDING SOME() AND EVERY()

// some() - can return true even if a single value is true or match the test function
let ages = [10, 18, 2, 15];

document.write(ages + "</br> </br>");

var agescheck = ages.some(checkAdult);
document.write(agescheck + "</br> </br>");

function checkAdult(age) {
  return age >= 18;
}

// every() - would return true only if all the values are true or match the test function

let everyages = [10, 18, 2, 15];

document.write(everyages + "</br> </br>");

var agescheck1 = everyages.every(checkAdult1);
document.write(agescheck1 + "</br> </br>");

function checkAdult1(age) {
  return age >= 18;
}

// UNDERSTANDING FIND() AND FINDINDEX METHODS
// It finds the first value to be check and returns the value it doesnot check even if there are more values
// FindIndex works the same but it just returns the index instead of the value.

let agee = [10, 20, 30, 50];
document.write(agee + "</br> </br>");

let findage = agee.find(ageadult);

document.write(findage + "</br> </br>"); // returns 20 only not other adult age values

function ageadult(age) {
  return age >= 18;
}

let findage1 = agee.findIndex(ageadult);
document.write(findage1 + "</br> </br>"); // returns 1

// UNDERSTANDING FILTER() - It returns a new array according to the condition

let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

document.write(months + "</br> </br>");

let findsecondhalf = months.filter(secondhalfOfyear);

document.write(findsecondhalf + "</br> </br>");

function secondhalfOfyear(month) {
  return month >= 6;
}

// UNDERSTANDING STRING() VALUEOF() AND FILL() METHODS

//tostring() method converts the existing array into a string and returns the result and then no Array methods would be applied on that string as it is converted to a string now

let someNames = ["Sanjay", "Aman", "Rehman", "Neha"];

document.write(someNames);

document.write("</br>");
document.write("</br>");

someNames.toString();
document.write(someNames);

document.write("</br>");
document.write("</br>");

// VALUE OF IS SIMPLE - YOU CAN USE OR CAN NOT USE IT - IT IS SAME AS DISPLAYING THE VALUE OF AN ARRAY THROUGH DOCUMENT.WRITE

document.write(someNames.valueOf());

// The fill methos is simple it will fill the whole array with the static value provided in the fill function
someNames.fill("Blue");

document.write("</br>");
document.write("</br>");

// UNDERSTANDING FOR EACH METHOD

let somevalues = ["blue", "lilac", "green", "gold", "black", "white"];

somevalues.forEach(function (value, index) {
  document.write(index + " : " + value + "</br>");
}); // this is one way of making using this method

document.write("</br>");
document.write("</br>");

// this is the also a way of using this method - similar to what we have done before in our previous methods

somevalues.forEach(loop);

function loop(value, index) {
  document.write(index + " : " + value + "</br>");
}

document.write("</br>");
document.write("</br>");

// OBJECTS

let firstObj = {
  firstName: "Rabail",
  lastName: "Zaheer",
  age: 23,
  email: "hello@123.com",

  favMovies: ["HarryPotter", "BeautyAndTheBeast", "SnowWhite"],
  living: {
    city: "Hyderabad",
    country: "Pakistan",
  },
  salary: function () {
    return 75000;
  },
  fullname: function () {
    return this.firstName + " " + this.lastName;
  },
};

document.write("</br>");
document.write("</br>");

document.write(firstObj.firstName);

console.log(firstObj);
document.write("</br>");
document.write("</br>");

document.write(firstObj.favMovies[0]); // displaying the value of an array inside the object

document.write("</br>");
document.write("</br>");

document.write(firstObj.salary()); // printing a function (method) inside of an object

document.write("</br>");
document.write("</br>");

document.write(firstObj.fullname()); // printing a method which uses the property names of that object and uses the "this" keyword

document.write("</br>");
document.write("</br>");

document.write(firstObj.living.city); // printing the object property inside an object

document.write("</br>");
document.write("</br>");

// SECOND METHOD OF CREATING AN OBJECT

let secondObject = new Object();

console.log(secondObject);

secondObject.firstName = "Rabail";
secondObject.lastName = "Zaheer";
secondObject.age = 23;

console.log(secondObject);

document.write(secondObject.age); //
document.write(secondObject["age"]); // this is the beacket method of displaying a property of an object
document.write("</br>");
document.write("</br>");

console.log(secondObject);

// ARRAY OF OBJECT

let student = [
  { name: "Rabail", age: 15 },
  { name: "Adeel", age: 10 },
  { name: "Nabeel", age: 8 },
];

console.log(student);
document.write("</br>");
document.write("</br>");

for (a = 0; a < student.length; a++) {
  document.write(`${student[a].name + " " + student[a].age}</br>`);
}
document.write("</br>");
document.write("</br>");

// CONST VARIABLES WITH ARRAY AND OBJECTS

const newarray = [10, 20, 30];

// newarray = [20, 40, 80]; - this will generate an error as const variable do not let you reassign the array, however you can manipulate the values of the array by changing the values at particular indexes- such as:

console.log(newarray);

newarray[1] = 40; // this will change the value at 1 index to 40
newarray[2] = 35; // this will change the value at the 2 indext to 35

console.log(newarray);

const newobj = {
  name: "Rabail_Zaheer",
  age: 23,
};

console.log(newobj);

/* 
newobj = {
  name: "Nabeel Zaheer",
  age: 19,
}; */

// this will generate an error as const variable do not let you reassign the array, however you can manipulate the values of the object by changing the values at particular property names and their key value pairs - such as:

newobj.name = "Rabail Zaheer Kalhoro";

console.log(newobj);

// FOR IN LOOP - this loop has been specifically made for the printing of the object

let myobj = {
  fname: "Rabail",
  lname: "Zaheer",
  age: "23",
  email: "hello@yahoo.com",
  favColor: "blue",
  favCartoon: "babylooneytunes",
};

document.write("</br>");
document.write("</br>");
for (var key in myobj) {
  document.write(myobj[key] + "</br>"); // without property/key names

  document.write(key + " : " + myobj[key] + "</br>"); // with property/key names
}

document.write("</br>");
document.write("</br>");

// JAVASCRIPT MAP METHOD

let myarry = [11, 4, 9, 16];
document.write(myarry); // before manipulation

document.write("</br>");
document.write("</br>");

var mynewarry = myarry.map(test);

document.write(mynewarry); // after manipulation / calculation
function test(x) {
  return x * 10;
}

document.write("</br>");
document.write("</br>");

// USING  MAP METHODS ON THE ARRAY OF OBJECTS

var myaryobj = [
  { fname: "Rabail", lname: "Zaheer" },
  { fname: "Zaheer", lname: "Ahmed" },
  { fname: "Nargis", lname: "Zaheer" },
];

let myaryobjmap = myaryobj.map(test2);

document.write(myaryobjmap);

function test2(x) {
  return x.fname + " " + x.lname + "</br>";
}

document.write("</br>");
document.write("</br>");

// JAVASCRIPT STRING METHODS

let str = "JavaScript is an amazing Langugage!";

var str2 = str.length;

document.write(str2); // displays the characters of the string

document.write("</br>");
document.write("</br>");

// toUpperCase() and toLowerCase()

var upper = str.toUpperCase();
var lower = str.toLowerCase();

document.write(upper + "</br>" + lower);

document.write("</br>");
document.write("</br>");

// includes()

var incl = str.includes("amazing"); // returns true
var incl2 = str.includes("AMAZING"); // returns false

document.write(incl + " " + incl2);
// the includes() function is case sensitive

document.write("</br>");
document.write("</br>");

// startesWith() and endsWith() - both case sensitive

let startfind = str.startsWith("JavaScript"); // returns true.

let startfind1 = str.startsWith("javascript"); // returns false

document.write(startfind + "</br>" + startfind1);

document.write("</br>");
document.write("</br>");

let endfind = str.endsWith("Langugage!"); // returns true.

let endfind1 = str.endsWith("langugage"); // returns false

let endfind2 = str.endsWith("age!"); // also returns true here as it find "age" in the last and this same goes for the startsWith() function

document.write(endfind + "</br>" + endfind1 + "</br>" + endfind2);

document.write("</br>");
document.write("</br>");

// UNDERSTANDING THE SEARCH() FUNCTION

let searchfunc = str.search("is");

document.write(searchfunc);

document.write("</br>");
document.write("</br>");

// UNDERSTANDING THE MATCH() FUNCTION

let matchfunc = "JavaScript is a GREAT is Language";

let undersmatch = matchfunc.match(/is/g);

document.write(undersmatch);
document.write("</br>");
document.write("</br>");

let undersmatch1 = matchfunc.match(/is a/g);

document.write(undersmatch1);
document.write("</br>");
document.write("</br>");

// UNDERSTANDING INDEXOF() AND LASTINDEXOF() FUNCTION

var indexoffunction = matchfunc.indexOf("is");

document.write(indexoffunction);
document.write("</br>");
document.write("</br>");

var lastindexoffunction = matchfunc.lastIndexOf("is");
document.write(lastindexoffunction);

document.write("</br>");
document.write("</br>");

// UNDERSTANDING REPLACE() FUNCTION
document.write(matchfunc);

document.write("</br>");
document.write("</br>");

var replfunc = matchfunc.replace("JavaScript", "PHP");

document.write(replfunc);

document.write("</br>");
document.write("</br>");

let newstr = "      JavaScript      ";

//alert(newstr);

let newstr1 = newstr.trim();
// alert(newstr1);

// UNDERSTANDING CHARAT() METHOD

let mystr = "Hello, I am good. What about you?";

var charstr = mystr.charAt(8);

document.write(charstr);

document.write("</br>");
document.write("</br>");

let ascode = mystr.charCodeAt(1);

document.write(ascode);

document.write("</br>");
document.write("</br>");

let ascharcode = mystr.fromCharCode(65);
document.write(ascharcode);

document.write("</br>");
document.write("</br>");
