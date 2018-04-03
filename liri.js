require('dotenv').config();

let keys = require('./keys.js');
var spotify = keys.spotify;
var client = keys.twitter;

console.log(spotify);

let [node, path, command, value] = process.argv;
console.log(command);
// if spotify-that-song, run function to call spotify api