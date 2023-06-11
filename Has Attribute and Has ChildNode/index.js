"use strict";

// hasAttribute method
let target = document.getElementById("test");

let find = target.hasAttribute("class");
console.log(find); // returns false

let target2 = document.getElementById("test");

let find2 = target2.hasAttribute("id");
console.log(find2); // returns true

// hasChildNodes method

let target3 = document.getElementById("test");

let findnode = target3.hasChildNodes();

console.log(findnode);
