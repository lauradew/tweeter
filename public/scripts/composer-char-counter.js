//character counting function, turns red when negative
$(document).ready(function() {
  $("#textarea").keyup(function() {
    $("#counter").text(140 - $(this).val().length);
    if ($(this).val().length > 140) {
      $("#counter").addClass("negative");
    } else {
      $("#counter").removeClass("negative");
    }
  });
});