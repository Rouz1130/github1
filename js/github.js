var apiKey = require('./../.env').apiKey;

function Git() {
}

Git.prototype.getGit = function(name) {
  $.get('https://api.github.com/users/' + name + '/repos?/access_token=' + apiKey).then(function(response){
    console.log(JSON.stringify(response));
    for(var i = 0; i <= response.length; i++){

      $('ul#final').append("<li>" + response[i].name + "   "  + response[i].description + "</li>");
    }

    $('ul#repos').append("<li>" +" " + "</li");
    // $('ul#description').append("<li>" +" " + "</li");
    //put into html to show descriptions



  }).fail(function(error){

  });
};





exports.gitModule = Git;
