const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// CONTROLLERS
const userController = require('./controllers/userController');
const noteController = require('./controllers/noteController');

// CONFIGURATION
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ROUTES
app.post('/api/register', userController.register);
app.post('/api/login', userController.login);

app.get('/api/notes', noteController.allNotes);

function authorize(req, res, next) {
    const token = req.headers;
    console.log(token);
    console.log(typeof token);
    next();
}

app.get('/api/mycollections', authorize, (req, res) => {    
    res.json({ message: 'hello' });
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
    console.log(err);
});

