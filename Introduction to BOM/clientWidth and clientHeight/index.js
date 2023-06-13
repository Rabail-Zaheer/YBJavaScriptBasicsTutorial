"use strict";
// clientwidth and client height return the width and height of inner area, so padding does affect the size and also the scrollbar but margins and borders do not affect the width and height

let target = document.querySelector("#box");

let width = target.clientWidth;

let height = target.clientHeight;

console.log("clientWidth : " + width);
console.log("clientHeight : " + height);
