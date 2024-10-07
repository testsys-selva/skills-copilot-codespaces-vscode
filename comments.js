// create web server
var express = require('express');
var app = express();

// create a route
app.get('/comments', function(req, res) {
    res.send('This is the comments page');
});

// create a sub-route
app.get('/comments/new', function(req, res) {
    res.send('This is the new comments page');
});

// start the server
app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});

// Run the server and go to http://localhost:3000/comments and http://localhost:3000/comments/new in your browser.