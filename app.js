var express = require('express'); // brings in the express library
var app = express(); // starts the express app
var bodyParser = require('body-parser');

app.use(express.static('public')); // runs each time a request is made to look for static files in the public folder

app.use(bodyParser.urlencoded({extended: true}));

var songList = [ // array of song objects
  {
    title: 'We did not start the Phire',
    artist: 'Billy Joel'
  },
  {
    title: 'Ring of Phire',
    artist: 'Johnny Cash'
  }
];

app.get('/songs', function(req, res) { // this makes a request to get our songList array the the url /songs
  res.send(songList);
});

app.post('/newSong', function(req, res){ // app.post adds information, but I can't remember exactly where it stores it.
  var newSong = req.body;
  if(newSong.artist !== "Justin Bieber"){ // conditional statement to either add the new song to the songList array or return an error to the user
    songList.push(newSong);
    console.log(songList);
    res.sendStatus(200); // notifies user of success
  } else {
    res.sendStatus(500); // notifies user of error
  }
});

app.listen(3000); // runs one time and then continues listening on port 3000
