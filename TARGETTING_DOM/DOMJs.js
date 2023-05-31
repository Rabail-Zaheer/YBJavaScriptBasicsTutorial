"use strict";

let element;

// // the all is deprecated - but it shows the complete document
console.log(document.all);
// if you want to target some specific elements then you can use square brackets for that such as:
//console.log(document.all[4])

// // shows the head of the html page
console.log(document.head);

// // shows the title of the HTML page
console.log(document.title);

// // shows the body of the html
console.log(document.body);

// // shows all the anchor tags inside the html
console.log(document.links);
// if you want to target some specific links then you can use square brackets for that such as:
// console.log(document.links[3])

console.log(document.images);
// // shows all the images in the document

console.log(document.forms);
// // shows all the forms in the document

console.log(document.doctype);
// // shows the doctype of the HTML document

console.log(document.URL);
// // returns the url of the web page

console.log(document.domain); // it is deprecated
// // returns the domain of the web site

console.log(document.baseURI);
// // returns node's node document's document base

console.log(document.getElementById("header"));

console.log(document.getElementById("footer"));

console.log(document.getElementsByClassName("list"));

console.log(document.getElementsByClassName("list")[1]);

console.log(document.getElementsByTagName("ul"));

console.log(document.getElementsByTagName("ul")[2]);

// DOM GET AND SET METHODS

/* So, what can we GET with DOM?

We can get three things:

HTML
Text
and Attributes

*/

/* DOM GET METHODS */

/* innerText
innerHTML
getAttribute
getAttributeNode
Attributes
 */

console.log(document.getElementById("header").innerText);
console.log(document.getElementById("content").innerText);
// it brings or returns the text inside the tags of the HTML but it doesn't return the HTML TAGS

console.log(document.getElementById("header").innerHTML);
console.log(document.getElementById("content").innerHTML);
// it brings or returns the HTML and the text inside that

// getAttribute method
console.log(document.getElementById("header").getAttribute("class"));

console.log(document.getElementById("header").getAttribute("id"));

console.log(document.getElementById("header").getAttribute("style"));

// returns the value of the attributes targetted

// getAttributeNode method

console.log(document.getElementById("header").getAttributeNode("class"));

console.log(document.getElementById("header").getAttributeNode("id"));

console.log(document.getElementById("header").getAttributeNode("style"));

// returns the complete attribute with its respective values

// we can also use another value method with getAttributeNode method to only return the value, such as:

console.log(document.getElementById("header").getAttributeNode("class").value);

console.log(document.getElementById("header").getAttributeNode("id").value);

console.log(document.getElementById("header").getAttributeNode("style").value);

//However it is recommended to use getAttribute only if you want to access the values of an attribute only

// attrubute DOM Get Methods:

console.log(document.getElementById("header").attributes);
// the attributes method returns an object all the attributes of the targetted elements

// to get the value of a particular attribute the object of attributes we use this method to do that.
console.log(document.getElementById("header").attributes[2].value);

// to get the name of a particular attribute the object of attributes we use this method to do that.
console.log(document.getElementById("header").attributes[2].name);

// DOM SET METHODS

/* 
innerText
innerHTML
setAttribute
Attribute
removeAttribute */
