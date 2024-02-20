const mongoose = require('mongoose');
const express = require('express');
const app = express();

const connectDB = () => {
    mongoose.connect("mongodb://localhost:27017/test")
        .then((e) => {
            console.log("DB Connected");
            console.log(e.connection.host)
        })
        .catch((e) => {
            console.log("Db error");
        });
}
connectDB();

app.listen(5000, () => {
    console.log("Server is Ready")
});