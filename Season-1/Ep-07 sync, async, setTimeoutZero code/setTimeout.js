console.log("Hello World");

var a = 1078698;
var b = 20986;

setTimeout(() => {
  console.log("Calls ASAP");
}, 0);

setTimeout(() => {
  console.log("Calls after 3 seconds");
}, 3000);

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);
console.log(c);
