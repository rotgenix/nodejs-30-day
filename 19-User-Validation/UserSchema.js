const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        validate: {
            validator: function (value) {
                return /\S+@\S+\.\S+/.test(value);
            },
            message: 'Invalid Email'
        }
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;