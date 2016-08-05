var apiKey = require("./../.env").apiKey;

function GitUser(username) {
  this.username = username;
}

GitUser.prototype.search = function (displayResults) {

  $.get('https://api.github.com/?access_token='+ apiKey+'/users/'+ this.username +'/repos').then(
    function(response){
      console.log(response);
    }).fail(function(error) {
      console.log(error.responseJSON.message);
  });
};


exports.gitUserModule = GitUser;
