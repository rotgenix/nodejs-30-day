const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();

const rateLimitMiddleware = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 2,
    legacyHeaders: false,
})

app.get('/', rateLimitMiddleware, (req, res) => {
    res.send("You have not Exceeded the Rate Limit");
});

app.listen(5000, () => {
    console.log("Server is runnong on PORT:5000");
})