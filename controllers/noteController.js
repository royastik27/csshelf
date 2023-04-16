const fs = require('fs');

exports.allNotes = (req, res) => {

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
}