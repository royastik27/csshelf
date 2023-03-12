const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/', (req, res) => {

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

app.listen(PORT, err => {
    if (err) console.log("Error in server setup!")
    console.log("Server is running..");
});