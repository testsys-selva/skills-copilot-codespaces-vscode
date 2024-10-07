//create a web server
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/comments', (req, res) => {
    fs.readFile('./comments.json', 'utf8', (err, data) => {
        if(err) {
            res.status(500).send('An error occurred');
        } else {
            res.send(data);
        }
    });
});

app.post('/comments', (req, res) => {
    const newComment = req.body;
    fs.readFile('./comments.json', 'utf8', (err, data) => {
        if(err) {
            res.status(500).send('An error occurred');
        } else {
            const comments = JSON.parse(data);
            comments.push(newComment);
            fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
                if(err) {
                    res.status(500).send('An error occurred');
                } else {
                    res.send('Comment added');
                }
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});