var $main = $('.main');
var $sidebar =('.sidebar')
var $result = $('.result');
var mainurl = 'https://api.github.com/users/jordanwilhite';
var repos = 'https://api.github.com/users/jordanwilhite/repos';
// var error = "error"; Take this out, maybe?

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
  success: function(data){
    var profile = data;
    var avatar = profile.avatar_url;

    $img = $('<img>').attr('src', avatar);
      $main.append($img);

  console.log(profile);
  }

});

    // var profile = data;
    // var name = profile.name;
    // var blog = profile.blog;
    // var location = profile.location;
    // var email = profile.email;
    // var avatar = profile.avatar_url;
    // var html = profile.html_url;
    // var repositories = profile.repositories;
    //
    //
    // $('.results .name').text(name);
    // $('.results .blog').text(blog);
    // $('.results .location').text(location);
    // $('.results .email').text(email);
    // $('.results .avatar').text(avatar);
    // $('.results .html').text(html);

// console.log(mainurl);

//     }
//
//   });
// };

var errorDisplayingProfile = function(xhr, type, error){
    $result.text("Oooops! " + error);
};

var settings = {
  method: 'GET',
  dataType: 'json',
  url: 'https://api.github.com/users/egdelwonk',
  error: function(xhr, type, error){
    $result.text("Oooops! " + error);
  },
};

var displayProfile = function(data, textStatus, xhr){
$.ajax(repos,{
  error: function(){
    $result.text('Sorry, bro ' + error);

  },
});
};

var errorDisplayingProfile = function(xhr, type, error){
    $result.text("Oooops! " + error);
};

var settings = {
  method: 'GET',
  dataType: 'json',
  url: 'https://api.github.com/users/egdelwonk',
  error: function(xhr, type, error){
    $result.text("Oooops! " + error);
  },
};
