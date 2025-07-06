require("./xyz");
// const { x, calculateSum } = require("./calculate/sum");
// const { calculateMultiplication } = require("./calculate/multiply");
const { x, calculateSum, calculateMultiplication } = require("./calculate/index");
const data = require("./data.json");

// using ES module

// import "./xyz.js";
// import{ x, calculateSum } from "./sum.js"

console.log("Hello World");

calculateSum(20, 80);

console.log(x);

calculateMultiplication(5, 4);

console.log(data);
