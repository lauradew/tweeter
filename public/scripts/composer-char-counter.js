$(document).ready(function() {
  $(".textarea").keyup(function() {
    console.log($(this));
    $(".counter").text(140 - $(this).val().length);
    if ($(this).val().length > 140) {
      $(".counter").addClass("negative");
    } else {
      $(".counter").removeClass("negative");
    }
  })
});

// ["0"].parentElement
// ["0"].parentElement.childNodes[6]