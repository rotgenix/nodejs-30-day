const fs = require('fs');

function writeFile(filepath, content) {
    fs.writeFile(filepath, content, (err) => {
        if (err) {
            console.log("Error", err);
        }
        else {
            console.log("Data written to file");
        }

    });
}

writeFile('./files/test.txt', "This is file Content.")

