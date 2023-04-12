const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        userName: String,
        email: String,
        password: String,
        birthDate: String,
        gender: String,
        institution: String
        // phoneNumber: String
    }, {
        versionKey: false
    }
);

module.exports = mongoose.model('user', userSchema);