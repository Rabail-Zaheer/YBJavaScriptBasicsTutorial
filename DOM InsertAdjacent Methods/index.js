"use strict";
// DOM CREATE METHODS
// createElement, createTextNode, createComment --- they only create

let newElement = document.createElement("h2");
let newtext = document.createTextNode("A simple text node");

// DOM APPEND METHODS
// appendChild and insertbefore --- they only append
// appendChild

newElement.appendChild(newtext);
// DOM INSERTADJACENT METHODS
// insertAdjacentElement, insertAdjacentHTML, insertAdjacentText --- they create and append at the same time

// insertAdjacent Positions
/* 
beforebegin
afterbegin
beforeend
afterend
*/

// AdjacentElement

let target = document.getElementById("test");

// target.insertAdjacentElement("beforebegin", newElement);

//target.insertAdjacentElement("afterbegin", newElement);

//AdjacentHTML

let mynewElement = "<h2> This is a simple Heading<h2>";

target.insertAdjacentHTML("afterbegin", mynewElement);

// AdjacentText

let mynewText = "This is a new text";

target.insertAdjacentText("beforeend", mynewText);
