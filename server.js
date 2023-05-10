const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');

// CONTROLLERS
const userController = require('./controllers/userController');
const noteController = require('./controllers/noteController');

// CONFIGURATION
const app = express();
const PORT = 5000;

app.use(cors());    // JUST FOR REACT APP, REMOVE AT PRODUCTION
app.use(express.json());
app.use(cookieParser());

// app.use((req, res, next) => {
//     // console.log(req.url);
//     console.log(req.cookies);
//     console.log(typeof req.cookies);
//     next();
// })

// ROUTES
app.post('/api/register', userController.register);
app.post('/api/login', userController.login);
app.post('/api/getuserdetails', userController.authorize, userController.getUserDetails);
app.post('/api/logout', userController.authorize, userController.logout);

app.get('/api/notes', noteController.allNotes);

function authorize(req, res, next) { // IF token were a header
    const token = req.headers.token;
    console.log(token);
    console.log(typeof token);
    next();
}

app.get('/api/mycollections', authorize, (req, res) => {    
    res.json({ message: 'hello' });
});

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

// DATABASE AND SERVER
const DB_URL = 'mongodb://127.0.0.1:27017/nshelf';

mongoose.connect(DB_URL).then(() => {
    console.log('Database connected');

    app.listen(PORT, err => {
        if (err) console.log("Error in server setup!");
        else console.log("Server is running..");
    });
}).catch(err => {
    console.log(err);
});

