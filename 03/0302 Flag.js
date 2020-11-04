var fs = require("fs");

//Async - Open File
console.log("Going to open file!");
fs.open('input.txt', 'r+', function(error, fd){
    if(err){
        return console.error(err);
    }
    console.log("File opened successfully!");
});
