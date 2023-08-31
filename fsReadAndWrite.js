var fs = require("fs");

fs.readFile("new.txt", function (err, buf) {
    if (err) {
        console.log("Error  in reading the file", err);
    }
    else {
        console.log(buf);
    }
});

var data = "Hello World";

fs.writeFile("new.txt", data, (err) => {
    if (err) {
        console.log("Error in writing file", err)
    }
    else {
        console.log("Sucessfully written in file");
    }
})