/**
 * here is how to create the server in a simple steps
 * we needed to use the http module and from it we used
 * the create server method that needs a function with req and res 
 * finally we needed to listen to a port that is why we used the listen 
 */
const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000);