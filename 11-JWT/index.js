const express = require('express');
const JWT = require('jsonwebtoken');
const { authenticationMiddleware, generateToken } = require('./Middlewares/authenticationMiddleware.js');
const app = express();

app.use(express.json());

app.post('/register', (req, res) => {
    const { email } = req.body;
    const token = generateToken(email);
    res.send(token);
});

app.post('/login', authenticationMiddleware, (req, res) => {
    res.status(200).json("User Logged In Successfully");
});

app.listen(5000, () => {
    console.log("Server is runnong on PORT:5000");
})