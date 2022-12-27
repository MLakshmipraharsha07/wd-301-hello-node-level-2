const fs = require("fs");
const http = require("http");

fs.writeFile(
    "sample.txt",
    "Hello World. Welcome to Node.JS File system module.",
    (err) => {
        if (err) throw err;
        console.log("File created!");
    }
);

fs.readFile("sample.txt", (err,data) => {
    if (err) throw err;
    console.log(data.toString());
});

fs.appendFile("sample.txt", "This is my updated content", (err) => {
    if (err) throw err;
    console.log("File Updated!");
});

fs.rename("sample.txt", "test.txt", (err) => {
    if (err) throw err;
    console.log("File name Updated!");
});

fs.unlink("test.txt", (err) => {
    if (err) throw err;
    console.log("File test.txt deleted successfully!");
});

const server = http.createServer((req,res) => {
    fs.readFile("example.txt", (err,data) => {
        res.end(data);
    })
});
server.listen(3000);