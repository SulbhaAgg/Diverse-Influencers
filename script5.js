// JavaScript demonstration
//JavaScript does not allow hyphens in names

/*The getElementById() is a DOM method used to return the element that has the ID attribute with the specified value. 
This is one of the most common methods in the HTML DOM and is used almost every time we want to manipulate an element on our document.*/
var square = document.getElementById("square"),
    clickMe = document.getElementById('clickMe'); //Keeping it unobstrusive
function doDemo () {

/*
The setTimeout() function accepts two arguments. The first argument is a function and the second argument is time in milliseconds. 
(optional) third argument, you can specify an arbitrary number of arguments to the JavaScript setTimeout() method, which are all passed through to the provided timeout callback function. */
  var button = this;
  square.style.backgroundColor = "#fa4";
  button.setAttribute("disabled", "true");
  setTimeout(clearDemo, 2000, button);
}

function clearDemo (button) {
  var square = document.getElementById("square");
  square.style.backgroundColor = "transparent";
  button.removeAttribute("disabled");
}

clickMe.onclick = doDemo; //Onclick call. Pass no arguments.​​​​​