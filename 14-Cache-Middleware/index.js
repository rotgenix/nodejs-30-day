const express = require('express');
const app = express();

const cache = require('./cacheMiddleware.js');

app.get('/', cache("10"), (req, res) => {
    res.send(`Response from Non-Cache Memory`);
});

app.listen(5000, () => {
    console.log("Server is Ready");
});