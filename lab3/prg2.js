import http from 'http';
const server = http.createServer((req, res) => {
    console.log("Server hit by client");
    res.write("<h1>hello Client</h1>");
    //  res.write("<h2>hello Client</h2>");
    res.end();
});
server.listen(4444, () => console.log("Server is Running..."));