const fs = require('fs');

function readFileContent(filepath) {
    fs.readFile(filepath, 'utf-8', (err, result) => {
        if (err) {
            console.log(`Error while Reading File ${err}`);
        }
        else {
            console.log("File Content");
            console.log(result);
            console.log("Hello, NodeJS");
        }
    })
}

readFileContent('./files/test.txt')

