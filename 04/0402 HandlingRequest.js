const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-code"),
    app = http.createServer();

app.on("request", (req,res)=>{
    res.writeHead(httpStatus.OK,{
        "Content-Type": "text/html"
    });
    let responseMessage = "<h1>This will shown on screen</h1>";
    res.end(responseMessage);
});

app.listen(port);
console.log(`The server has started and is listening to port number: ${port}`);