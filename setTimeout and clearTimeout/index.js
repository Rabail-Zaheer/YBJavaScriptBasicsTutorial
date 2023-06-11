"use strict";

let id = setTimeout(Anim, 5000);

function Anim() {
  let target = document.getElementById("test");

  target.style.width = "1000px";
  //console.log("This function is running now!");
}

// OR

/* let newfunc = setTimeout(function () {
  let target = document.getElementById("test");

  target.style.width = "1000px";
  //console.log("This function is running now!");
}, 5000);
 */
function stopanimation() {
  clearTimeout(id);
}
