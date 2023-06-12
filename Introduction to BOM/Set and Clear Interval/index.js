"use strict";
var a = 0;

let myanim = setInterval(Anim, 50);

function Anim() {
  a = a + 10;

  if (a == 1270) {
    clearInterval(myanim);
  } else {
    let target = document.getElementById("test");

    target.style.width = a + "px";
  }
}

let myanim1 = setInterval(Anim2, 1000);

function Anim2() {
  a = a + 10;

  if (a == 300) {
    clearInterval(myanim1);
  } else {
    let target = document.getElementById("test1");
    target.style.marginLeft = a + "px";
  }
}
