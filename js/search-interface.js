var GitUser = require('./../js/search.js').gitUserModule;

$(document).ready(function(){
  $("#search").click(function(event){
    event.preventDefault();
    var username ='RonyNasr';
    var gitUser = new GitUser(username);

    $("#results").append("<h3>" + username + "</h3>");
    gitUser.search(displayResults);
  });
});

function displayResults(results) {
  results.forEach(function(result){
    $("#results").append("<h5>"+result.name+"</h5>");
  });
}
