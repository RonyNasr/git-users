var GitUser = require('./../js/search.js').gitUserModule;

$(document).ready(function(event){
  $("#search").click(function(event){
    event.preventDefault();
    var username ='caspyin';
    var gitUser = new GitUser(username);

    gitUser.search(displayResults);
  });
});

function displayResults(results) {
  $("#results").append("<h3>" + username + "</h3>");

  $("#results").append(results);
}
