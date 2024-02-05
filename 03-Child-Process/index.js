const { exec } = require('child_process');

const executeCommand = (command) => {
    exec(command, (error, stdout, stderror) => {
        if (error) {
            console.log("Error: ", error);
        }
        if (stderror) {
            console.log("Std Error", stderror);
        }
        console.log("Std Output", stdout);
    })
}

executeCommand('echo "Hello, NodeJS"');