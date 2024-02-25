const mongoose = require('mongoose');
const express = require('express');
const Age = require('./UserSchema.js');
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

app.post('/average-age', async (req, res) => {
    try {
        const ageUser = await Age.aggregate([
            {
                $group: {
                    _id: null,
                    totalAge: { $sum: "$age" },
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    averageAge: { $divide: ["$totalAge", "$count"] }
                }
            }
        ]);

        return res.json({
            success: true,
            message: "Average age of Users",
            ageUser
        });
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