$(document).ready(function(){ // ensures document is loaded on the DOM
  console.log('jquery was correctly sourced!');
  getAllSongs(); // calls the function, but what does this do?
  function getAllSongs() { // creates a function, but what does this function do?
    $.ajax({  // ajax get request. I'm not sure exactly what this is doing, though.
      type: 'GET', // the type of request is 'GET'
      url: '/songs', // refers to /songs url
      success: function(response) { // if the request goes through, it will return a success or error message
        console.log('response', response);
      },
      error: function(error) {
        console.log('error', error);
      }
    });
  }

  $('#addSongButton').on('click', function(){ // button click event listener
    var newSongTitle = $('#title').val(); // sets var to the title input value
    var newSongArtist = $('#artist').val(); // sets var to the artist input value
    var newSongObject = { // creating a new objet with two properties
      title: newSongTitle,
      artist: newSongArtist
    };
    console.log(newSongObject);
    $.ajax({ // second ajax request to add data
      type: 'POST', // the request type 'POST' means that you are adding data
      url: '/newSong', // not sure what this does
      data: newSongObject, // not exactly sure what this does, but I assume it adds a new song object to the songsList array
      success: function(response) {  // notify user if the POST request is successful
        console.log('response', response);
        getAllSongs(); // call the function if the request is successful
      },
      error: function(error) {
        console.log('error', error); // notify the user if the POST request is not successful
      }
    });
  });

});
