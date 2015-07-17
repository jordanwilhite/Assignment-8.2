var $main = $('.main');
var $sidebar =('.sidebar')
var $result = $('.result');
var mainurl = 'https://api.github.com/users/jordanwilhite';
var repos = 'https://api.github.com/users/jordanwilhite/repos';


var access_token = "bf2f63910395da2a11db7e7d6b1c3b30f04237eb"
$.ajax({
   url: "https://api.github.com/users/jordanwilhite",
   method: "GET",
   data: {
     access_token: access_token
   },

 })

 var access_token = "bf2f63910395da2a11db7e7d6b1c3b30f04237eb"
$.ajax({
   url: "https://api.github.com/users/jordanwilhite/repos",
   method: "GET",
   data: {
     access_token: access_token
   },

 })

// var displayProfile = function(data, textStatus, xhr){
$.ajax(mainurl,{
  error: function(xhr, type, error){
    $main.text('Sorry ' + error);
  },
  success: function(data, textStatus, xhr){
    var profile = data;
    var avatar = profile.avatar_url;

    $img = $('<img>').attr('src', avatar);
      $main.append($img);
    $h3 = $('<h3>').text(profile.name);
      $main.append($h3);
    $h4 = $('<h4>').text(profile.email);
       $main.append($h4);
    $p = $('<p>').text(profile.html_url);
      $main.append($p);
    $blog = $('<blog>').text(profile.blog);
      $main.append($blog);
    $location = $('<location>').text(profile.location);
      $main.append($location);



  console.log(profile);
  }

});

$.ajax(repos, {
 error: function(xhr, type, error){
   $main.text("Sorry " + error);
 },
 success: function(repos, textStatus, xhr){
   $repos = $('.repos');
   repos.forEach(function(repo){
       $repos.append('<h3><a href="'+ repo.html_url+'">' + repo.name + '</a></h3>');
       $repos.append('<p>' + moment(repo.updated_at).fromNow() + '</p>');
       console.log(repo);
   });
  }
});
