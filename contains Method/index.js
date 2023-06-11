"use strict";

let parentElement = document.getElementById("test");

let target = document.getElementById("abc");

let find = parentElement.contains(target);
console.log(find); // returns false as there is no element with the id = "abc"

let target2 = document.getElementById("abc1");

let find2 = parentElement.contains(target2);
console.log(find2); // returns true as there is a P element with the id = "abc1"
