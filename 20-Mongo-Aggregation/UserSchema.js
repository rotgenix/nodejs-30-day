const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number,
    }
});

const Age = mongoose.model("Age", userSchema);

module.exports = Age;