/*
* Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


//same functionality as easytweet with more tedious formatting
//more secure but still missing aria-hidden
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
//END OF CREATE TWEET ELEMENT FUNCTION


$(document).ready(function() {
  // var $tweet = createTweetElement(tweetData);
  // $('#tweets-container').append($tweet);
  loadTweets();


function renderTweets(tweets) {
  tweets.forEach(function(tweet) {
    $('#tweets-container').prepend(createTweetElement(tweet));
    // $('#tweets-container').prepend(easyTweet(tweet));
  });
}

$('.new-tweet form').on('submit', function(e) {
  e.preventDefault();
  const newtext = $(this).find(".textarea").val();
  if (newtext.length === 0) {
    alert("Tweet may not be empty.");
    return;
  }
  else if (newtext.length > 140) {
    alert("Tweet must be within 140 character limit.");
  return;
  } else {
  var newest = $('.new-tweet form').serialize();

  $.post('/tweets', newest).done(function() {
    $('.textarea').val("");
    $('.counter').text("140");
    loadTweets();

    // load that tweet into the view
    // $('#tweets-container').append(easyTweet(newest));

  });
}
});

function loadTweets() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function(result) {
        renderTweets(result);
      }
    })
}

//same function as loadTweets -- alternative formatting;
// $(() => {
// function loadTweets() {
//   $.get('/tweets').done(function(result) {
//     renderTweets(result);
//   })


// function addTweet() {
//   $.ajax({
//     url: '/tweets',
//     method: 'POST',
//     success: function(result) {


//       easyTweet(result);
//       }
//     }
//   })
// }



//less secure function; users can manipulate
// function easyTweet(tweetObject) {
//   const htmldata = `
//     <article class="tweet">
//               <header>
//                 <img class="userAv" id="userAv" src="${tweetObject.user.avatars.small}">
//                 <p class="fullName" id="fullName">
//                   ${tweetObject.user.name}
//                 </p>
//                 <p class="userat" id="userID">
//                   ${tweetObject.user.handle}
//                 </p>
//               </header>
//               <p class="content" id="tweettext">
//                 ${tweetObject.content.text}
//               </p>
//               <footer>
//                 <p class="footerText" id="footertext">
//                 Posted ${moment(tweetObject.created_at).fromNow()}.
//                 </p>
//                 <p class="icons" id="icons">
//                   <i class="fa fa-flag" aria-hidden="true"></i>
//                   <i class="fa fa-retweet" aria-hidden="true"></i>
//                   <i class="fa fa-heart" aria-hidden="true"></i>
//                 </p>
//               </footer>
//             </article>
//     `;
//     return htmldata;
// }


});

