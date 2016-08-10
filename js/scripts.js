$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    $(".animal").append("Goose");
    $(".food").append("egg");
    $("#story").show();

     event.preventDefault();
  });
});
