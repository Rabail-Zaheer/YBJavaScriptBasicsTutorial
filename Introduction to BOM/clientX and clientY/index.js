"use strict";

document.addEventListener("mousemove", function (e) {
  let x = e.clientX;

  let y = e.clientY;
  console.clear();
  console.log("clientX : " + x);

  console.log("clientY : " + y);
});

let target = document.querySelector("#box");
target.addEventListener("click", function (e) {
  let x = e.x;

  let y = e.y;
  console.clear();
  console.log("clientX : " + x);

  console.log("clientY : " + y);
});
