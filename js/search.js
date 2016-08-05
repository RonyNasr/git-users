var apiKey = require("./../.env").apiKey;

function GitUser(username) {
  this.username = username;
}

GitUser.prototype.getRepos = function (displayResults) {
  $.ajax('https://api.github.com/users/'+this.username+'/repos?per_page=1000&sort=created&direction=desc&access_token='+ apiKey).then(
    function(response){
      displayResults(response);
    }).fail(function (error) {
      console.log(error.responseJSON.message);
    });
};

GitUser.prototype.getUserInfo = function (displayUserInfo) {
   $.ajax('https://api.github.com/users/'+this.username +'?access_token='+ apiKey).then(
    function(response){
      displayUserInfo(response);
      }).fail(function (error) {
      console.log(error.responseJSON.message);
  });
};

exports.gitUserModule = GitUser;
