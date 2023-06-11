"use strict";

// cloneNode() Method
let target = document.getElementById("list1").children[0];

let copyElement = target.cloneNode(true);

console.log(copyElement);

document.getElementById("list2").appendChild(copyElement);
