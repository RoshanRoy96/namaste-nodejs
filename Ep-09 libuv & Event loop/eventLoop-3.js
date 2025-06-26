const fs = require("fs");

fs.readFile("./file.txt", "utf-8", () => {
  setTimeout(() => {
    console.log("second timer");
  }, 0);

  process.nextTick(() => {
    console.log("second nextTick");
  });

  setImmediate(() => {
    console.log("second setImmediate");
  });

  console.log("File Reading CB");
});

setTimeout(() => {
  console.log("Timer expired");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

process.nextTick(() => {
  console.log("nextTick");
});

Promise.resolve("Promise").then(console.log);

console.log("Last line of the file");

/*
OUTPUT
* Last line of the file
* nextTick
* Promise
* Timer expired
* setImmediate
* File Reading CB
* second nextTick
* second setImmediate
* second timer
*/

