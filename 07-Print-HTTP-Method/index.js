const express = require('express');

const app = express();

const requestLoggerMiddleware = (req, res, next) => {
    const date = new Date();
    console.log(`${date.toLocaleTimeString()} - ${req.method} request Recieved`);
    next();
}

app.get('/get', requestLoggerMiddleware, (req, res) => {
    res.send("GET Method");
});

app.post('/post', requestLoggerMiddleware, (req, res) => {
    res.send("POST Method");
});

app.listen(5000, () => {
    console.log("Server ir Running on Port:5000");
})
