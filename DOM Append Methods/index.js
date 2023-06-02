"use strict";

// createElement, createTextNode, createComment --- they only create
let newElement = document.createElement("p");
let newTextNode = document.createTextNode(
  "This is a text, created using the 'createTextNode' method in JavaScript and appended to this div using the 'appendChild()' method! Isn't this cool?"
);

let newTextNode2 = document.createTextNode(
  "This is another text to show you that 'createTextNode' adds the text at the end whenever appended to an element"
);
//console.log(newTextNode);

// DOM APPEND METHODS
// appendChild and insertbefore --- they only append
// appendChild

const firstdiv = newElement.appendChild(newTextNode);

document.getElementById("test").appendChild(firstdiv);

const seconddiv = newElement.appendChild(newTextNode2);

document.getElementById("test2").appendChild(seconddiv);

// appending a comment

let newComment = document.createComment("This is just a comment!");

document.getElementById("test").appendChild(newComment);

document.getElementById("test2").appendChild(newComment);

// insertBefore

let newElement1 = document.createElement("h2");

let textNode = document.createTextNode(
  "This is a text for testing 'insertbefore!'"
);
newElement1.appendChild(textNode);

let target = document.getElementById("test");
target.insertBefore(newElement1, target.childNodes[0]);
