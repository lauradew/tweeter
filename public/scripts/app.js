/*
* Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
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
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];


function createTweetElement(tweetObject) {

  const header = $("<header>");
  const article = $("<article>");
  const footer = $("<footer>");

  const avatar = $("<img>").addClass("userAv");
  const name = $("<p>").addClass("fullName");
  const tag = $("<p>").addClass("userat");

  const cont = $("<p>").addClass("content");

  const date = $("<p>").addClass("footerText");

  const icon = $("<p>").addClass("icons");
  const flag = $("<i>").addClass("fa fa-flag");
  const retweer = $("<i>").addClass("fa fa-retweet");
  const heart = $("<i>").addClass("fa fa-heart");

  const daysAgo = moment(tweetObject.created_at).fromNow();


article.append(header);
avatar.attr('src', tweetObject.user.avatars.small);
header.append(avatar);
name.text(tweetObject.user.name);
header.append(name);
tag.text(tweetObject.user.handle);
header.append(tag);


cont.text(tweetObject.content.text);
article.append(cont);

article.append(footer);
date.text("Posted " + daysAgo + ".");
footer.append(date);
footer.append(icon);
icon.append(flag);
icon.append(retweer);
icon.append(heart);



  console.log(article.html());
  return article;
}


// console.log($tweet);
$(document).ready(function() {
  // var $tweet = createTweetElement(tweetData);
  // $('#tweets-container').append($tweet);
  // console.log(data);
  renderTweets(data);
});

function renderTweets(tweets) {
  tweets.forEach(function(tweet) {
    // $('#tweets-container').append(createTweetElement(tweet));
    $('#tweets-container').append(easyTweet(tweet));
  });
}


function easyTweet(tweetObject) {
  const htmldata = `
    <article class="tweet">
              <header>
                <img class="userAv" id="userAv" src="${tweetObject.user.avatars.small}">
                <p class="fullName" id="fullName">
                  ${tweetObject.user.name}
                </p>
                <p class="userat" id="userID">
                  ${tweetObject.user.handle}
                </p>
              </header>
              <p class="content" id="tweettext">
                ${tweetObject.content.text}
              </p>
              <footer>
                <p class="footerText" id="footertext">
                Posted ${moment(tweetObject.created_at).fromNow()}.
                </p>
                <p class="icons" id="icons">
                  <i class="fa fa-flag" aria-hidden="true"></i>
                  <i class="fa fa-retweet" aria-hidden="true"></i>
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </p>
              </footer>
            </article>
    `;
    return htmldata;
}





