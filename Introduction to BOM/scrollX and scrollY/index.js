"use strict";

// THE PageYOffset is deprecated
/* 
window.addEventListener("scroll", function () {
    console.clear();
  console.log("PageYoffset : " + this.window.pageYOffset);
  console.log("PageXoffset : " + this.window.pageXOffset);
}); */

window.addEventListener("scroll", function () {
  console.clear();
  console.log("Scroll Y : " + this.window.scrollY);
  console.log("Scroll X : " + this.window.scrollX);
});
