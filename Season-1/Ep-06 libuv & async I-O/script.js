// JavaScript is a synchronous single threaded language. ie, JS can execute only one command at a time in a specific order.

// NodeJS can perform async tasks with the help of libuv.

// libuv is a library which is written in C language.

// libuv connects V8 engine with operating system.

// Whenever there is an async task, JS engine will overload that task to libuv. libuv interacts with OS and return response from OS and then pass it to JS engine.

// Inshort JS just do synchronous things. All the asynchronous tasks are done by libuv.

// Asynchronous I/O is also called Non Blocking I/O....because async tasks are not blocking our main thread. 