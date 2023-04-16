const mongoose = require('mongoose');
const validator = require('./validator');

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            validate: [ validator.email , 'Uh oh, this email provider is not acceptable!' ]
        },
        password: {
            type: String,
            required: true,
            validate: [ validator.password, 'Uh oh, try strong password!' ]
        },
        birthDate: String,
        gender: String,
        institution: String
        // phoneNumber: String
    }, {
        versionKey: false
    }
);

module.exports = mongoose.model('user', userSchema);