"use strict";
// PageX and PageY
document.addEventListener("mousemove", function (e) {
  console.clear();
  var x = e.pageX;
  var y = e.pageY;

  let x2 = e.clientX;
  let y2 = e.clientY;
  console.log("PageX : " + x);

  console.log("PageY : " + y);

  console.log("ClientX : " + x2);

  console.log("ClientY : " + y2);
});
