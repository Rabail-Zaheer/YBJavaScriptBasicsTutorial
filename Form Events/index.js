"use strict";

/* JAVASCRIPT FORM EVENTS

keydown
keypress
keyup
focus()
blur()
input
change
select
submit
invalid*/

/* focus() */

function focusfunction(element) {
  element.style.background = "orchid";
}

/* blur() */

function blurfunction(element) {
  element.style.background = "";
}

/* input() */

function inputFunction(element) {
  let x = element.value;
  document.getElementById("test").innerHTML = x;
}

/* change() */

function changeFunction(element) {
  let x = element.value;
  document.getElementById("test").innerHTML = x;
}

/* select() */

function selectFunction() {
  console.log("You selected a text");
}

/* submit() */

function submitFunction() {
  let x = document.getElementById("fname").value;
  alert(`Hello ${x}, you have submitted the form!`);
}

/* invalid() */
