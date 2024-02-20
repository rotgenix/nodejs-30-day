const express = require('express');
const app = express();

const loggingMiddleware = (req, res, next) => {
    console.log(new Date());
    console.log(req.method);
    console.log(req.originalUrl);
    console.log(req.headers);
    console.log(req.body);
    next();
}

app.get('/', loggingMiddleware, (req, res) => {
    res.send("Done");
});

app.listen(5000, () => {
    console.log("Server is runnong on PORT:5000");
});