var $result = $('.results');
var url = 'https://api.github.com/users/jordanwilhite';
var repos = 'https://api.github.com/users/jordanwilhite/repos';

console.log($.ajax(url,{}));
console.log($.ajax(repos,{}));
