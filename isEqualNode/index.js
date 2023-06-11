"use strict";

/* There is a criteria for using the isEqualNode() method:
- they should be of same Node Type such as if one is an <li> element that the other should also be an <li> element.

- they should be of same nodeName

- they should also have same nodeValue with the same textNode to become true otherwise it will be false.

- same childNodes

- same attributes

- same attribute values

*/

let target1 = document.getElementById("list-1").firstElementChild;

let target2 = document.getElementById("list-2").firstElementChild;

let target3 = document.getElementById("list-2").children[1];

let equal = target1.isEqualNode(target2);

console.log(equal); // returns false

let equal2 = target1.isEqualNode(target3);
console.log(equal2); // returns true
