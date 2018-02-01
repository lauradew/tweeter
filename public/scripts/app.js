
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



$(document).ready(function() {
  function loadTweets() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function(result) {
        renderTweets(result);
      }
    });
  }

  loadTweets();

  function renderTweets(tweets) {
    tweets.forEach(function(tweet) {
      $('#tweets-container').prepend(createTweetElement(tweet));
    });
  }

  $('.new-tweet form').on('submit', function(e) {
    e.preventDefault();
    const newtext = $(this).find(".textarea").val();
    if (newtext.length === 0) {
      alert("Tweet may not be empty.");
      return;
    } else if (newtext.length > 140) {
      alert("Tweet must be within 140 character limit.");
      return;
    } else {
      const newest = $('.new-tweet form').serialize();

      $.post('/tweets', newest).done(function() {
        $('.textarea').val("");
        $('.counter').text("140");
        loadTweets();
      });
    }
  });

});

