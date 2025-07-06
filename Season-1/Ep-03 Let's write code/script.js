var name = "Namaste NodeJS";
console.log(name);

// Window is a global object which is given to us by browser.
// In browser 'this' refers to window object.

// console.log(window); returns error....it works only on browser.

console.log(this);  // returns empty object....because 'this' is equivalent to window only on browser.

// In NodeJS the global object is 'global'.

console.log(global);

// In NodeJS 'globalThis' is equivalent to 'global'.

console.log(globalThis);

// In short:- 1) In browser, 'global' is equivalent to 'window'.
//            2) In NodeJS 'globalThis' is equivalent to 'global'.