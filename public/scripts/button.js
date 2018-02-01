$(document).ready(function() {

  $("#compose").on("click", function(event) {
    $(".new-tweet").toggle("blind", 200);
    $("#textarea").focus();
  });

});