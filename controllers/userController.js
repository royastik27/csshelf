const jwt = require('jsonwebtoken');

const userModel = require('./../data/userSchema');

module.exports.register = async (req, res) => {

    // check if the user already exists
    try {
        const result = await userModel.findOne().or([
            { 'userName': req.body.userName },
            { 'email': req.body.email }
        ]);
        
        // typeof result = object
        // if not found, then result = null

        if(result) {
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
        // console.log(err);
        res.status(500).json({ ok: false, message: 'Internal server problem #2'});
    }
}

 module.exports.login = async (req, res) => {

    userModel.findOne({
        'userName': req.body.userName
    })
    .then(result => {
        if(result)
            if(req.body.password === result.password)
            {
                // code here
                const user = { userName: req.body.userName };

                res.status(200).json({
                    ok: true,
                    message: 'Logged in!',
                    token: jwt.sign(user, process.env.ACCESS_TOKEN)
                });
            }
            else
                res.status(200).json({ ok: true, message: 'Incorrect password' });
        else
            res.status(200).json({ ok: true, message: 'User not found!' });
    })
    .catch(err => {
        // console.log(err);
        res.status(500).json({
            acknowledgement: false,
            message: err.message
        });
    });
}