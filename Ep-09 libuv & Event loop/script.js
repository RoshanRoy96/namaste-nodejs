// JS is a synchronous single threaded language. JS can execute only one command at a time in a specific order.
// JS engine will overloads async tasks to libuv and libuv performs that task.

// How libuv performs asynchronous tasks?
// libuv has three major components.
// 1) Event loop
// 2) Callback queue
// 3) Threadpool

// Suppose we have an API call and JS engine overloads that async tasks to libuv. JS engine is busy with executing code line by line. By that time data is returned back from API call. libuv will hold the callback function of this API call in callback queue until the call stack of JS engine becomes empty.

// Event loop will continously checks the callback queue and call stack. Once the callstack is empty, event loop will take the callback function of this API call from call back queue and put it in the callo stack. Thus executes code. After the callback function is executed, it gets popped out of the call stack.

const https = require("https");
const fs = require("fs");

var a = 1078968;
var b = 28546;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Data fetched from API");
});

setTimeout(() => {
  console.log("Timer");
}, 5000);

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File Data", data);
});

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);
console.log(c);

// Conside the above code. Here we have async tasks like API call, setTimeout function and readFile function. Suppose all of this tasks completes at the same time and the callback function associated with each is waiting inside the callback queue. Which of this callback function executes first... To which one event loop will give priority?

// Event loop has some phases. It has an inner phase and an outer phase.
// The inner phase consists of:- process.nextTick() and promise callbacks.
// The outer phase consists of:- timer, poll, check, close.

// process.nextTick():- is a function which is similar to setTimeout and setInterval functions. It is used to handle some operations.

// First event loop goes to the inner cycle and checks process.nextTick(). If there is any callback function inside process.nextTick() event loop will give first priority to that.

// Then event loop goes to the promise callbacks. If there is any callback functions inside that, event loop will give second priority to that.

// Then event loop will go to the first phase. ie, timer phase. In this phase callback function inside setTimeout and setInterval will be executed. Suppose the timer expires and the callback function associated with setTimeout function or setInterval function is waiting inside the callback queue, event loop will give the next priority to that.

// Event loop again goes into the inner phase. Checks process.nextTick(). If there is something it executes that. Then check promise callbacks. If there is something it executes that.

// Now event loop will go to the poll phase. Here callback function associated with I/O callback will execute. ie, callback functions asociated with API calls and readFile will be executed here.

// Again event loop goes to the inner phase. Checks process.nextTick(). If there is something event loop executes that. Then goes to promise callbacks. If there is something event loop executes that.

// Now event loop goes to the third phase. ie, check phase. Here callback functions associated with setImmediate will be executed. setImmediate is similar to setTimeout and setInterval.

// Again event loop goes to the inner phase, checks process.nextTick(). If there is some thing it executes that. Then checks promise callbacks. If there is some thing it executes that.

// Now event loop goes to the forth phase. ie, close phase. In this phase all the closing operations happens. Suppose we opened a socket and now we want to close that...it happens in this phase. In this phase mainly cleanup kind of things happen.

// Again event loop goes to the inner phase and this cycle repeats again and again.

// Note:- Each phase has it's own seperate callback queue. ie, process.nextTick() has seperate callback queue, promise callbacks has it's own seperate callback queue, timer has it's own seperate callback queue and the callbacks of the corresponding functions will wait their own callback queue.

// #) Async tasks order

process.nextTick(cb);
promise.resolve(cb);
setTimeout(cb, 0);
setImmediate(cb, 0);
fs.readFile("./file.txt", cb);
https.get("URL", cb);

// Note:- generally it takes some time to read file. So it executes last.


