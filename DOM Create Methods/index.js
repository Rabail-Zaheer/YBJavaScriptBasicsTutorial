"use strict";

/* DOM CREATE METHODS
CreateElements
CreateTextNode
CreateComment
*/
// createElement
let newElement = document.createElement("p");

console.log(newElement);

console.log(document.createElement("ul"));

// createTextNode

let newText = document.createTextNode("Hey, This is a textnode");

console.log(newText);

console.log(document.createTextNode("JavaScript is a great langugae!"));

// createComment

let newComment = document.createComment("This is a comment");

console.log(newComment);

console.log(document.createComment("This is another comment!"));
