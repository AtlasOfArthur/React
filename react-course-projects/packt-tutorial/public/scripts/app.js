"use strict";

console.log("App.js toimii");

// JSX - JavaScript XML
var template = React.createElement(
  "p",
  null,
  "This is JSX from app.js!"
);
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
