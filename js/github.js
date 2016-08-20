var apiKey = require('./../.env').apiKey;


function Git() {
}

Git.prototype.gitSearch=function(input){
  $.get('https://api.github.com/users/' + input + '/repos?access_token=' + apiKey).then(function(response) {

};



exports.gitModule = Git;
