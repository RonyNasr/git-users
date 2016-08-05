var GitUser = require('./../js/search.js').gitUserModule;

$(document).ready(function(){
  $("#search").click(function(event){
    event.preventDefault();
    var username =$("#username").val();
    var gitUser = new GitUser(username);

    $("#username").focus();
    $("#username").val("");
    $("#results").empty();
    $("#user-info").empty();

     gitUser.getUserInfo(displayUserInfo);
  });
});

function displayResults(results) {
  results.forEach(function(result){
    $("#results").append("<div class='panel panel-primary'>");
    $("#results").append("<div class='panel-heading'><h5 class='panel-title'>" +result.name+ "<h5></div>");
    $("#results").append("<div class= 'panel-body'>"+ result.description +"</div>");
    $("#results").append("<div class='panel-footer'>"+ moment(result.created_at).format("MM/DD/YYYY HH:mm:ss") + "</div>");
    $("#results").append("</div>");
  });
}


function displayUserInfo(userInfo) {
  var htmlText = "";
  htmlText = htmlText +
            "<div class=row>" +
            "<div id='avatar' class='col-sm-3 col-sm-push-6'><img src='"+userInfo.avatar_url+"' alt='profile picture' class='img-circle'></div>" +
            "<div class='col-sm-3 col-sm-push-6'><h3>" + userInfo.name + "</h3></div>"+
            "</div>";
  $("#user-info").append(htmlText);

  gitUser = new GitUser(userInfo.login);
  gitUser.getRepos(displayResults);
}
