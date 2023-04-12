const express = require('express');
const cors = require('cors');
const fs = require('fs');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ROUTES
const userModel = require('./data/userSchema');

app.post('/api/adduser', async (req, res) => {

    const newUser = new userModel(req.body);
    console.log(req.body);

    try {
        const result = await newUser.save();
        res.send(result);
    }
    catch(err) {
        console.log(err);
        res.status(500).send('Something went wrong!');
    }
});

app.post('/api/login', async (req, res) => {

    console.log(req.body);

    userModel.findOne({
        'userName': req.body.userName
    }).then(result => {
        if(result)
            res.status(200).json({
                acknowledgement: true, message: 'User registered successfully!'
            });
        else
            throw { message: 'User not found!' };
    }).catch(err => {
        // console.log(err);
        res.status(500).json({
            acknowledgement: false,
            message: err.message
        })
    });
});

app.get('/api/notes', (req, res) => {

    try {
        const posts = fs.readFileSync('./data/posts.json', 'utf-8');

        // console.log(JSON.parse(posts));
        // console.log(typeof JSON.parse(posts));  // object

        res.json(JSON.parse(posts));
    }
    catch(err)
    {
        console.log(err);
        res.json({ message: "Data not found!" })
    }
});


// DATABASE AND SERVER
const DB_URL = 'mongodb://localhost:27017/csshelf';

mongoose.connect(DB_URL).then(() => {
    console.log('Database connected');

    app.listen(PORT, err => {
        if (err) console.log("Error in server setup!");
        else console.log("Server is running..");
    });
}).catch(err => {
    console.log('err');
});

