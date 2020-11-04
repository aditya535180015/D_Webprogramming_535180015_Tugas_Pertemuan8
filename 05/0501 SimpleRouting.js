const routeResponseMap = {
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us</h1>",
    "/about": "<h1>More about Us</h1>",
    "/hello": "<h1>Hello world this is page</h1>",
    "/error": "<h1>Sorry the page you are looking for is not here</h1>"
};

const port= 3000,
    http = require("https"),
    httpStatus = require("http-status-codes"),
    app = http.createServer((req, res)=>{
        res.writeHead(200,{
            "Content-Type": "text/html"
        });
        if (routeResponseMap[req.url]){
            res.end(routeResponseMap[req.url]);
        }else{
            res.end("<h1>Hello World</h1>");
        }
    });
    
    app.listen(port)
console.log(`The server has started and is listening to port number: ${port}`);