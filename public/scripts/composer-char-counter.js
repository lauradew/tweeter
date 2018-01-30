$(document).ready(function() {
  $(".textarea").keyup(function() {
    $(".counter").text(140 - $(this).val().length);
  })
});