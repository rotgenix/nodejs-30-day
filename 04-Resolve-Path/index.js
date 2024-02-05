const path = require('path');

const resolvePath = (relativePath) => {
    const absolutePath = path.resolve(__dirname, relativePath);
    console.log("Absolute Path: ", absolutePath);
}

resolvePath('./index.html');
