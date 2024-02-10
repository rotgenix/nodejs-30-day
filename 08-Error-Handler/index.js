const express = require('express');
const app = express();

function positiveIntegerHandler(req, res, next) {
    try {
        const number = parseInt(req.query.number);
        if (number < 0) {
            throw new Error()
        }
        next();
    } catch (error) {
        return res.status(400).json("Number is Negative");
    }

}
app.get('/positive', positiveIntegerHandler, (req, res) => {
    res.json({
        success: true,
        message: "Number is Positive",
    })
})

app.listen(5000, () => {
    console.log("Server is running");
})
