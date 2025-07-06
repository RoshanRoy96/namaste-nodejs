// We have a module and that module contains some code and a require method(eg:- require("./path")), the name of that module is for example "xyz.js".

// In "app.js",  we write this require("./xyz.js").

// Whenever we write this require method, NodeJS will create a function....the name of that function is IIFE(Immediately Invoked function expression) and takes code from "xyz.js" and wraps it inside this function. The code runs inside this function. Along with that it passes a parameter module which is from module.exports and require which is from 'require' method in 'xyz.js' to IIFE.

// Now this will pass to V8 JS engine and executes code.

(function() {
    // code inside xyz.js
}) (); // this is how we write IIFE.

// require("./path") => behind the scenes
// 1) Resolving the module
// 2) Loading the module
// 3) Wrapping inside IIFE
// 4) Code Evaluation
// 5) Caching


console.log(__filename); // prints file name.

console.log(__dirname); // prints directory name