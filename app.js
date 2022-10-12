/**
 * here is how to create the server in a simple steps
 * we needed to use the http module and from it we used
 * the create server method that needs a function with req and res 
 * finally we needed to listen to a port that is why we used the listen 
 */
const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req);
    /**
     * process exit is a sign to the listener to stop listing to requests
     * because you are telling the server i don't need the event loop any more
     * yes btw the event loop is kind of multi threading somehow to keep always the server
     * in a steady state to listen to new request and by using the process.exit() to tells i am not
     * interested any more !
     */
    // process.exit();

    /**
     * here are some interesting methods can be called from the req and these are info from the req
     * these info are quite importent to know it for the future.
     */
    console.log(req.url, req.method, req.headers);
});

server.listen(3000);