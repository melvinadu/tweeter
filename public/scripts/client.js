/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const createTweetElement = (tweet) => {

  const $tweet = $(`<article>`).addClass('tweet');

  let html = `<header class="tweet-header">
      <div>${tweet.user.name}</div>
      <div class="handle">${tweet.user.handle}</div>
    </header>
    <p>${tweet.content.text}</p>
    <footer class="tweet-footer">
      <div>${timeago.format(tweet.created_at)}</div>
      <div class="icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>`;

    let tweetElement = $tweet.append(html);

    return tweetElement;
  }

const renderTweets = function(tweets) {
  //empty container
  $('#tweets').empty();

  // loops through tweets
  for (let tweet of tweets) {
  // calls createTweetElement for each tweet
  const $tweet = createTweetElement(tweet);
  const $tweetsContainer = $('#tweets');
  // takes return value and appends it to the tweets container
  $tweetsContainer.prepend($tweet);
  }
}


const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

renderTweets(tweetData);

});