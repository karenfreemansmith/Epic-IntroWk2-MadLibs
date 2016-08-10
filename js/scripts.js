$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    $('#blanks').hide();
    $(".animal").text($("input#animal").val());
    $(".food").text($("input#food").val());
    $("#story").show();

     event.preventDefault();
  });
});
