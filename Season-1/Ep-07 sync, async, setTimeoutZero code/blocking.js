const crypto = require("crypto");

console.log("Hello World");

var a = 1078698;
var b = 20986;

//Synchronous function:- blocks the main thread....never use this....don't use functions with 'sync' word
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("First key is generated")

// Async function
crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("Second key is generated");
});

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);
console.log(c);