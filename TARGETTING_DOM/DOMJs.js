"use strict";

let element;

// // the all is deprecated - but it shows the complete document
console.log(document.all);
// if you want to target some specific elements then you can use square brackets for that such as:
//console.log(document.all[4])

// // shows the head of the html page
console.log(document.head);

// // shows the title of the HTML page
console.log(document.title);

// // shows the body of the html
console.log(document.body);

// // shows all the anchor tags inside the html
console.log(document.links);
// if you want to target some specific links then you can use square brackets for that such as:
// console.log(document.links[3])

console.log(document.images);
// // shows all the images in the document

console.log(document.forms);
// // shows all the forms in the document

console.log(document.doctype);
// // shows the doctype of the HTML document

console.log(document.URL);
// // returns the url of the web page

console.log(document.domain); // it is deprecated
// // returns the domain of the web site

console.log(document.baseURI);
// // returns node's node document's document base

console.log(document.getElementById("header"));

console.log(document.getElementById("footer"));

console.log(document.getElementsByClassName("list"));

console.log(document.getElementsByClassName("list")[1]);

console.log(document.getElementsByTagName("ul"));

console.log(document.getElementsByTagName("ul")[2]);

// DOM GET AND SET METHODS

/* So, what can we GET with DOM?

We can get three things:

HTML
Text
and Attributes

*/

/* DOM GET METHODS */

/* innerText
innerHTML
getAttribute
getAttributeNode
Attributes
 */

console.log(document.getElementById("header").innerText);
console.log(document.getElementById("content").innerText);
// it brings or returns the text inside the tags of the HTML but it doesn't return the HTML TAGS

console.log(document.getElementById("header").innerHTML);
console.log(document.getElementById("content").innerHTML);
// it brings or returns the HTML and the text inside that

// getAttribute method
console.log(document.getElementById("header").getAttribute("class"));

console.log(document.getElementById("header").getAttribute("id"));

console.log(document.getElementById("header").getAttribute("style"));

// returns the value of the attributes targetted

// getAttributeNode method

console.log(document.getElementById("header").getAttributeNode("class"));

console.log(document.getElementById("header").getAttributeNode("id"));

console.log(document.getElementById("header").getAttributeNode("style"));

// returns the complete attribute with its respective values

// we can also use another value method with getAttributeNode method to only return the value, such as:

console.log(document.getElementById("header").getAttributeNode("class").value);

console.log(document.getElementById("header").getAttributeNode("id").value);

console.log(document.getElementById("header").getAttributeNode("style").value);

//However it is recommended to use getAttribute only if you want to access the values of an attribute only

// attrubute DOM Get Methods:

console.log(document.getElementById("header").attributes);
// the attributes method returns an object all the attributes of the targetted elements

// to get the value of a particular attribute the object of attributes we use this method to do that.
console.log(document.getElementById("header").attributes[2].value);

// to get the name of a particular attribute the object of attributes we use this method to do that.
console.log(document.getElementById("header").attributes[2].name);

// DOM SET METHODS

/* 
innerText
innerHTML
setAttribute
Attribute
removeAttribute */

//console.log((document.getElementById("header").innerText = "Wow!"));

//console.log(document.getElementById("header").innerHTML = "Rabail Zaheer Kalhoro");

document.getElementById("header").setAttribute("class", "xyz");
document
  .getElementById("header")
  .setAttribute("style", "border: 3px dashed purple");

// changing class using only attributes method

document.getElementById("header").attributes[1].value = "efg";

// remove attribute

document.getElementById("header").removeAttribute("style");

document.getElementById("header").removeAttribute("class");

// DOM querySelector() and querySelectorall()

//document.querySelector("#header").innerHTML = "<h1>WELCOME</h1>";

console.log(document.querySelector(".list")); // will return the first class with the respective name found.

console.log(document.querySelectorAll(".list")); // will return all the classes with the selected name.

console.log(document.querySelectorAll(".list")[1]); // will return the .list class found at the 1 index

console.log(document.querySelectorAll(".list")[1].innerHTML); // will return the innerHTML of the .list class found at the 1 index

console.log(document.querySelectorAll(".list")[1].innerText); // will return the innerText of the .list class found at the 1 index

console.log(document.querySelectorAll("ul")[1]);

console.log(document.querySelectorAll("ul")[2].innerHTML);

console.log(document.querySelectorAll("#header h1")[0]);

console.log(document.querySelectorAll("#header h1")[1]);

console.log(document.querySelectorAll("#header h1")[2]);

console.log(document.querySelectorAll("#header h1")[0].innerHTML);

console.log(document.querySelectorAll("#header h1")[1].innerHTML);

console.log(document.querySelectorAll("#header h1")[2].innerHTML);

console.log(document.querySelectorAll("#header h1")[0].innerText);

console.log(document.querySelectorAll("#header h1")[1].innerText);

console.log(document.querySelectorAll("#header h1")[2].innerText);

// DOM CSS STYLING METHODS

/* Style
className
classList */

// using style
//console.log(document.querySelector("#header").style.border);

// console.log((document.querySelector("#header").style.color = "tan"));

// console.log(
//   (document.querySelector("#header").style.backgroundColor = "white")
// );

// using className

// document.querySelector("#header").className = "color border";

// console.log((document.querySelector("#header").classList = "color border"));

// document.querySelector("#header").classList.add("newclass", "secondnewclass");

console.log(document.querySelector("#header").classList);

//console.log(document.querySelector("#header").classList.remove("border"));

console.log(document.querySelector("#header").classList);

// JAVASCRIPT - addEventListener method

// ASSIGN EVENTS USING THE HTML DOM
// document.getElementById(Id).onclick = functionName;

// document.getElementById("header").onclick = abc;

// function abc() {
//   document.getElementById("header").style.background = "green";
//   document.getElementById("header").style.color = "white";
// }

// DOM EVENT LISTERNER METHOD
//document.getElementById(ID).addEventListerner("click", funtionName);
//OR
//document.getElementById(ID).addEventListener("click", function(){ statement });s

document.getElementById("menu").addEventListener("mouseenter", changecolor);

document.getElementById("menu").addEventListener("click", function () {
  document.getElementById("menu").style.border = "5px solid blue";
});

function changecolor() {
  document.getElementById("menu").style.background = "cornflowerblue";
}

document.getElementById("sidebar").addEventListener("dblclick", function () {
  document.getElementById("sidebar").style.background = "palegreen";
});

document.getElementById("content").addEventListener("contextmenu", rightclick);

function rightclick() {
  document.getElementById("content").style.background = "mediumpurple";
}

document.getElementById("sidebarlist").addEventListener("mousedown", downmouse);

function downmouse() {
  document.getElementById("sidebarlist").style.background = "mediumslateblue";
}

document.getElementById("content").addEventListener("mouseup", upmouse);

function upmouse() {
  document.getElementById("contentpara").style.color = "black";
}

document.getElementById("menu").addEventListener("mouseenter", changecolor);

document.getElementById("menu").addEventListener("click", function () {
  document.getElementById("menu").style.border = "5px solid blue";
});

// USING THIS KEYWORD

/* document.getElementById("header").addEventListener("mouseenter", function () {
  this.style.border = "10px solid white";
});
 */

//USECAPTURE

// addEventListener(event, function, useCapture)

// the use capture returns two values only, true and false

// removeEventListener() method

document.getElementById("header").addEventListener("mouseleave", abc);

function abc() {
  document.getElementById("header").style.background = "green";
  document.getElementById("header").style.color = "white";
}

document.addEventListener("click", removingevent);

function removingevent() {
  document.getElementById("header").removeEventListener("mouseleave", abc);
}

// CLASS LIST METHODS/Class

/* add, remove, contains(class), toggle(class), item(index) */

// add and remove

document.getElementById("header").addEventListener("contextmenu", newclass12);

function newclass12() {
  document.getElementById("header").classList.add("color");
}

// remove

document.getElementById("menu").addEventListener("contextmenu", removingaclass);

function removingaclass() {
  document.getElementById("menu").classList.remove("blue");
}

// toggle

document.getElementById("footer").addEventListener("click", toggleclass);

function toggleclass() {
  document.getElementById("footer").classList.toggle("newfooterclass");
  console.log(document.getElementById("footer").classList);
}

// item and contains

document.getElementById("sidebar").addEventListener("click", indexfunc);

function indexfunc() {
  console.log(document.getElementById("sidebar").classList.item(1));
  console.log(
    document.getElementById("sidebar").classList.contains("newclass1")
  );
  console.log(
    document.getElementById("sidebar").classList.contains("newclass2")
  );
}
