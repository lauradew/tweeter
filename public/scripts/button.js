//function to hide or display compose button in nav bar
$(document).ready(function() {
  $("#compose").on("click", function(event) {
    $(".new-tweet").toggle("blind", 200);
    $("#textarea").focus();
  });
});