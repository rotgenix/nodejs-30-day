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

app.get('/', (req, res) => {
    res.send("hi")
})
app.post('/signup', async (req, res) => {
    try {
        const { username, email } = req.body;
        const user = await User.create({ username, email });
        console.log(user);
        return res.json({
            success: true,
            message: "User created"
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