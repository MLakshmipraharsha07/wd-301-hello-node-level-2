const fs = require("fs");
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
