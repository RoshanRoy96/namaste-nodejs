// Creating a server

const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    res.end("There is no secret data");
  }
  res.end("Hello World!");
});

server.listen(3001);

/*
THINGS I LEARN IN THIS TUTORIAL
* Hardware
* Software
* Protocols: TCP/IP, HTTP, FTP, SMTP
* What is a protocol?
* What happens behind the scenes when a user makes a request? => (hints:- dns, socket connection, small packets)
* How data is send back to client from server?
* PORT
* Socket vs Websocket
* Creating server in NodeJS.
*/
