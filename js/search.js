var apiKey = require("./../.env").apiKey;

function GitUser(username) {
  this.username = username;
}

GitUser.prototype.search = function (displayResults) {
  $.ajax('https://api.github.com/?access_token='+ apiKey).then(
    $.ajax("https://api.github.com/users/"+this.username+"/repos?sort=created&direction=desc").then(
    function(response){
      displayResults(response);
    }).fail(function(error) {
      console.log(error.responseJSON.message);
    }).fail(function (error) {
      console.log(error.responseJSON.message);
    })
  );
};


exports.gitUserModule = GitUser;
