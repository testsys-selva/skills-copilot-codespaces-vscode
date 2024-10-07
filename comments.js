// create web server
// create a new express app
const express = require('express');
const app = express();
// create a new comments array
const comments = [
  { username: "Todd", comment: "lol that is so funny!" },
  { username: "Skyler", comment: "I like to go birdwatching with my dog" },
  { username: "Sk8erBoi", comment: "Plz delete your account, Todd" },
  { username: "onlysayswoof", comment: "woof woof woof" }
];
// create a route that sends back the entire comments array
app.get('/comments', (req, res) => {
  res.send(comments);
});
// listen on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
// run the server with node comments.js
// open your browser and go to http://localhost:3000/comments
// you should see the entire comments array displayed in your browser
// if you don't see the comments array, check your code and make sure it is correct