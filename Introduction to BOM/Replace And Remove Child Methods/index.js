"use strict";

// replacechild() method
let newElement = document.createElement("li");
let newText = document.createTextNode("wow! new text");

newElement.appendChild(newText);

let target = document.getElementById("list");

let oldElement = target.children[0];

//console.log(oldElement);

target.replaceChild(newElement, oldElement);

//console.log(oldElement);

// removechild() method

let newtarget = document.getElementById("list");

let elementremove = newtarget.children[1];

target.removeChild(elementremove);
