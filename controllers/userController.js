const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userModel = require('./../data/userSchema');

exports.register = async (req, res) => {

    // check if the user already exists
    try {
        const result = await userModel.findOne().or([
            { 'userName': req.body.userName },
            { 'email': req.body.email }
        ]);
        
        // typeof result = object
        // if not found, then result = null

        if(result) {
            console.log(result);
            res.json({
                ok: false,
                message: 'Username or email already registered'
            });
            return;
        }
    }
    catch(err) {
        // console.log(err);
        res.status(500).json({
            ok: false,
            message: 'Internal server error'
        });
        return;
    }
    
    // register
    const newUser = new userModel(req.body);

    try {
        const result = await newUser.save();
        res.json({ ok: true, message: 'User created!'});
    }
    catch(err) {
        // if(err.errors['email']) console.log(err.errors['email'].message);
        res.status(500).json({ ok: false, message: err.message });
        // res.status(500).json({ ok: false, message: 'Invalid input or Server Problem' });
    }
}

exports.login = async (req, res) => {

    userModel.findOne({
        'userName': req.body.userName
    })
    .then(async function (result) {
        if (result)
            if (await bcrypt.compare(req.body.password, result.password)) {
                // WHEN TO brypt
                console.log(result);

                const user = {
                    id: result._id,
                    userName: req.body.userName
                };

                res.cookie('token', jwt.sign(user, process.env.ACCESS_TOKEN), { httpOnly: true });

                res.status(200).json({
                    ok: true,
                    message: 'Logged in!'
                    // token: jwt.sign(user, process.env.ACCESS_TOKEN) // DONT SEND
                });
            }

            else
                res.status(200).json({ ok: true, message: 'Incorrect password' });

        else
            res.status(200).json({ ok: true, message: 'User not found!' });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            ok: false,
            message: err.message
        });
    });
}