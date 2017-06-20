
$(document).ready(function() {

  $("#fransatan").click(function(){
    $("#satan").toggle();
    $("#francis").toggle();
  })

  $("#start").submit(function(event) {
    event.preventDefault()
    var name = $("#name").val();
    var description = $("#goodDeed").val();
    var goodness = $("#howGood").val();
    var greeting = "Welcome, " + name + "!" + " it's time to find out if you're a good person.";
    $("#nameResponse").prepend(greeting);
    $("#start").hide();
    $("#hidden").fadeIn(3000);
  });
});
