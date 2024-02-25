const mongoose = require('mongoose');
const express = require('express');
const User = require('./UserSchema.js');
const app = express();
app.use(express.json());

const connectDB = () => {
    mongoose.connect("mongodb://localhost:27017/test")
        .then((e) => {
            console.log("DB Connected");
        })
        .catch((e) => {
            console.log("Db error");
        });
}
connectDB();

app.post('/adduser', async (req, res) => {
    try {
        const { email } = req.body;
        const newUser = new User({ email });
        await newUser.save();

        return res.json({
            success: true,
            message: "User added successfully",
            newUser
        })
    } catch (error) {
        return res.json({
            success: false,
            message: "Internal server error"
        })
    }

})

app.listen(5000, () => {
    console.log("Server is Running on PORT:5000")
});