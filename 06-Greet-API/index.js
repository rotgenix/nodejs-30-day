const express = require('express');
const app = express();


function greetHandler(req, res) {
    const { name } = req.query;
    if (name) {
        res.send(`Hello, ${name}`)
    } else {
        res.send(`Hello, Guest`)
    }
}

app.get('/greet', greetHandler);

app.listen(5000, () => {
    console.log(`Server is runnint on Port:5000`)
})