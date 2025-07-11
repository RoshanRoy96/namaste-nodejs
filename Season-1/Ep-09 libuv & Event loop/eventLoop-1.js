const fs = require("fs");

const a = 100;

setImmediate(() => {
  console.log("set immediate");
});

fs.readFile("./file.txt", "utf-8", () => {
  console.log("File Reading CB");
});

setTimeout(() => {
  console.log("Timer expired");
}, 0);

function printA() {
  console.log("a=", a);
}

printA();

console.log("Last line of file");

/*
OUTPUT
* a= 100
* Last line of file
* Timer expired
* set immediate
* File Reading CB
*/ 
