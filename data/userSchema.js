const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
            validate: [ validator.password, 'Uh oh, try stronger password!' ]
        },
        birthDate: String,
        gender: String,
        institution: String
        // phoneNumber: String
    }, {
        versionKey: false
    }
);

userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 12);

    next();
});

module.exports = mongoose.model('user', userSchema);