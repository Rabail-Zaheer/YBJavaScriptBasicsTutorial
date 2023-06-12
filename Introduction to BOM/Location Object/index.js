"use strict";

/* 
LOCATION OBJECT PROPERTIES

hash
host
hostname
href
origin
pathname
port
protocol
search
 */

document.write(location.href);

// setting the properties
function newFuction() {
  location.href = "https://www.google.com";
}

/* LOCATION OBJECT METHODS

Assign()
Reload()
Replace()

*/

// reload method

function newFunc() {
  location.reload();
}

// assign method

function assignfunc() {
  location.assign("https://www.google.com");
}

// replace method

function replacefunc() {
  location.replace("https://www.google.com");
}
