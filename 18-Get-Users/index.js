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

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        return res.json({
            success: true,
            message: "All users Data",
            users
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