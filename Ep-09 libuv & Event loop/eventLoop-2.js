const fs = require("fs");

const a = 100;

Promise.resolve("Promise").then(console.log);

process.nextTick(() => {
    console.log("process.nextTick");
})

fs.readFile("./file.txt", "utf-8", () => {
  console.log("File Reading CB");
});

setTimeout(() => {
  console.log("Timer expired");
});

setImmediate(() => {
  console.log("set immediate");
});

function printA() {
  console.log("a = ", a);
}

printA();

console.log("Last line of the file");

/*
 * a = 100
 * Last line of the file
 * process.nextTick
 * Promise
 * Timer expired
 * set immediate
 * File Reading CB
 */
