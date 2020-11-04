const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-code"),
    app = http.createServer();

const getJSONString = obj =>{
    return JSON.stringify(obj, null, 2);
};

app.on("request",(req,res)=>{

    var body = [];

    req.on("end", () =>{
        body = Buffer.contact(body).toString();
        console.log(`Request Body Content: ${body}`);
    });
    console.log(`Method: ${getJSONString(req.method)}`);
    console.log(`URL: ${getJSONString(req.url)}`);
    console.log(`Headers: ${getJSONString(req.headers)}`);
    res.writeHead(httpStatus.OK,{
        "Content-Type": "text/html"
    });

    let responseMessage = "<h1>This will show on the screen</h1>";
    res.end(responseMessage);
});

app.listen(port);