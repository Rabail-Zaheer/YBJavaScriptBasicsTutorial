"use strict";

// parentElement and parentNode

// parentElement - if there is no parent it will return null
console.log(document.body.parentElement);

console.log(
  (document.getElementById("outer").parentElement.style.background = "blue")
);

console.log(document.getElementById("inner").parentElement);

console.log(
  (document.getElementById("child-C").parentElement.style.border =
    "10px solid red")
);

console.log(document.getElementById("btn").parentElement);
console.log(document.getElementById("main").parentElement);

//parentNode - if there is no parent it still returns something

console.log(document.getElementById("main").parentNode);

console.log(document.getElementById("btn").parentNode);

//children and childNodes

//children - it returns HTML tags

console.log(document.getElementById("outer").children);
console.log(document.getElementById("inner").children);
console.log(document.getElementById("inner").children[1]);

let element = (document.getElementById("inner").children[1].style.background =
  "cornflowerblue");
console.log(element);

console.log(document.getElementById("inner").children[0].innerHTML);

//childNode - along with tags it also returns all the text nodes
// so what are text nodes? these are simple values that have used, such as spaces, comments and return(enter) from the keyboard

console.log(document.getElementById("outer").childNodes);
console.log(document.getElementById("inner").childNodes);
console.log(document.getElementById("inner").childNodes[1]);

console.log(document.getElementById("inner").childNodes[0].innerHTML);

// firstchild , firstElementChild - lastchild, lastElementChild

//firstElementChild

console.log(document.getElementById("inner").firstElementChild);

console.log(document.getElementById("inner").firstElementChild.innerHTML);

console.log(
  (document.getElementById("inner").firstElementChild.style.background =
    "green")
);

// lastChildElement
console.log(document.getElementById("inner").lastElementChild);

console.log(document.getElementById("inner").lastElementChild.innerHTML);

console.log(
  (document.getElementById("inner").lastElementChild.style.background =
    "yellow")
);

console.log(document.getElementById("child-C").firstChild.innerHTML);

console.log(document.getElementById("child-C").lastChild.innerHTML);

//nextElementSibling, nextSibling - previousElementSibling, previousSibling

// previousElementSibling
console.log(document.getElementById("child-C").previousElementSibling);

console.log(document.getElementById("first-child").previousElementSibling); // returns null as there is no previous sibling as this is the first child

console.log(
  document.getElementById("child-C").previousElementSibling.innerHTML
);

console.log(
  (document.getElementById("child-C").previousElementSibling.style.background =
    "pink")
);

// previousSibling
console.log(document.getElementById("child-C").previousSibling);

//nextElementSibling
console.log(document.getElementById("child-C").nextElementSibling);

console.log(document.getElementById("child-C").nextElementSibling.innerHTML);

console.log(document.getElementById("last-child").nextElementSibling); // returns null as there is no next sibling element

console.log(
  (document.getElementById("child-C").nextElementSibling.style.background =
    "plum")
);
// nextSibling
console.log(document.getElementById("child-C").nextSibling);
