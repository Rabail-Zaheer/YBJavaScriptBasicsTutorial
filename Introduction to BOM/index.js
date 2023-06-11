"use strict";

/* BROWSER OBJECT MODEL (INTRODUCTION)

WHAT CAN WE DO WITH THE METHODS OF BOM?

- Get width and height of browser window
- Open and close browser window
- Move and Resize Browser Window
Scroll to Browser window
Get URL, Hostname, Protocol of Browser Window
- Get History of Browser Window 
*/

/* Getting height and width of browser window

        METHODS
 - innerHeight
 - innerWidth
 - outerHeight
 - outerWidth
 
        //NONE OF THESE WIDTH METHODS WOULD COUNT THE WIDTH OF THE SCROLLBAR
*/

function resizefunction() {
  console.clear();
  let iheight = window.innerHeight;
  console.log(`This is the inner height ${iheight}`);

  let oheight = window.outerHeight;
  console.log(`This is the outer height ${oheight}`);

  let iwidth = window.innerWidth;
  console.log(`This is the inner height ${iwidth}`);

  let oWidth = window.outerWidth;
  console.log(`This is the outer height ${oWidth}`);
}

/* WINDOW OPEN AND CLOSE METHODS

window.open(URL, name, specs)

URL = the link to the page
name = firstwindow or _blank, _parent, _self and _top
specs = width, height, left and top
*/

let myWindow;
function openWindow() {
  myWindow = window.open(
    "",
    "",
    "width=50px, height=50px; left=100px, top=100px"
  );
  myWindow.document.write(
    "<p> hey there, this is the window that you opened by clicking the button above, do you like this feature in JavaScript? Don't you think these BOM manipulation methods are amazing? I think so these are amazing!!!!! </p>"
  );
}

function closeWindow() {
  myWindow.close();
}

/*MOVETO() METHODS - works from absolute position*/
function moveWindow() {
  myWindow.moveTo(500, 500);
  myWindow.focus();
}

/* MOVEBY() METHODS - works from relative position */

/* resizeby() and resizeTo() Methods.*/
