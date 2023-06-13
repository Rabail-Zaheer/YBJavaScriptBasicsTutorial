"use strict";
const target = document.querySelector("#box");

target.addEventListener("scroll", () => {
  console.clear();
  console.log("scrollTop : " + target.scrollTop);
  console.log("scrollLeft : " + target.scrollLeft);

  console.log("scrollWidth : " + target.scrollWidth);

  console.log("scrollHeight : " + target.scrollHeight);
});
