const fs = require("fs");
const https = require("https");

process.nextTick(() => {
  console.log("process.nextTick");

  setTimeout(() => {
    console.log("setTimeout inside process.nextTick");
  }, 0);

  setImmediate(() => {
    console.log("setImmediate inside process.nextTick");
  });

  Promise.resolve("second promise").then(console.log);
});

Promise.resolve("Promise").then(console.log);

https.get("https://dummyjson.com/products/1", () => {
  console.log("Data fetched");
});

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

console.log("Last line of the file");

/*
OUTPUT
* Last line of the file
* process.nextTick
* Promise
* second promise
* Timer expired
* setTimeout inside process.nextTick
* setImmediate
* setImmediate inside process.nextTick
* File Reading CB
* second nextTick
* second setImmediate
* second timer
* Data fetched
*/

/*
NOTE:-
Here in this code we can see that inside process.nextTick() there is a setTimeout function, setImmediate function, and a promise callback. JS engine will handover all this async tasks to lib.uv and lib.uv will execute that task and holds the callbacks function associated with each task in the callback queue. ie, the callback function of setTimeout will be in the setTimeout function's callback queue, the callback function of setImmediate will be in the setImmediate function's callback queue and callback function of promise will be in the promise callback queue. So it executes together....ie, JS engine will go on to the next phase once this callback queue is empty corresponding to each async tasks.
*/