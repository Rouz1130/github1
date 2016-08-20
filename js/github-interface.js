var Git= require('./../js/github.js').gitModule;

$(document).ready(function() {
  var.currentGit = new Git();
  $('.search').submit(funtion(event) {
    event.preventDefault();
    var input = $('#search-user').val();
    $('#search-user').val("");
    currentGit.gitSearch(input);
    console.log(input);

  });
});
