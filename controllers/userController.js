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
                // console.log(result);

                const user = {
                    userId: result._id,
                    userName: req.body.userName
                };                

                // IF YOU CHANGE HERE, MAKE CHANGE IN exports.logout()
                res.cookie('token', jwt.sign(user, process.env.ACCESS_TOKEN), {
                    httpOnly: true,
                    path: '/',
                    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                });

                // res.redirect('/profile');

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

exports.authorize = async (req, res, next) => {
    
    const token = req.cookies.token;
    // console.log(token);

    try {
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN);

        res.locals.userId = decode.userId;
        res.locals.userName = decode.userName;

        next();
    }
    catch(err) {
        res.json({
            ok: false,
            message: 'Authorization failed'
        });
    }
}

exports.getUserDetails = (req, res) => {
    console.log(req);
    res.json({
        ok: true,
        userId: res.locals.userId,
        userName: res.locals.userName
    });
}

exports.logout = (req, res) => {

    res.clearCookie('token', {
        httpOnly: true,
        path: '/'
    });
    
    res.json({
        ok: true,
        message: 'Logged out succesfully'
    });
}