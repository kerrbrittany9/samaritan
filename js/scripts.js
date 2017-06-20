function Survey(name, deed, goodness, altruisms, acts, gifts, times) {
  this.userName = name;
  this.descript = deed;
  this.goodness = goodness;
  this.rate = rate;
  this.altruisms = altruisms;
  this.acts = acts;
  this.gifts = gifts;
  this.times = times;
  this.score;
  this.total;
}

Survey.prototype.calc = function() {
  this.score = Math.max(this.altruisms.length, this.acts.length, this.gifts.length, this.time.length);
  return this.score;
}

Survey.prototype.total = function() {
  this.total = this.altruisms + this.acts + this.gifts + this.times;
  return this.total;
}

$(document).ready(function() {
  // var name;
  var deed;
  var goodness;
  var greeting;
  var altruisms;
  var acts;
  var gifts;
  var times;

// page1
  $("#fransatan").click(function(){
    $("#satan").toggle();
    $("#francis").toggle();
  })

  $("#start").submit(function(event) {
    event.preventDefault()
    name = $("#name").val();
    deed = $("#goodDeed").val();
    goodness = $("#howGood").val();
    greeting = "Welcome, " + name + "!" + " It's time to find out if you're a good person.";
    $("#nameResponse").prepend(greeting);
    $("#start").hide();
    $("#hidden").fadeIn(3000);
    console.log(name, deed, goodness);
  });
// page2
  $("#page2responses").submit(function(event) {
    event.preventDefault()
    var petition = $("input:radio[name=petition]:checked").val();
    var lemonade = $("input:radio[name=lemonade]:checked").val();
    var litter = $("input:radio[name=litter]:checked").val();
    var bully = $("input:radio[name=bully]:checked").val();
    var seat = $("input:radio[name=seat]:checked").val();
    answers = []
    altruisms = []
    answers.push(petition, lemonade, litter, bully, seat)
    for (i = 1; i <= answers.length; i += 1) {
      if (answers[i] === "yes") {
        altruisms.push(answers[i]);
      }
    };
    console.log(altruisms)
    console.log(petition, lemonade, litter, bully, seat)
    $("input:checkbox[name=altruism]:checked").each(function() {
      var altruism = $(this).val();
      altruisms.push(altruism);
    });
    var score = altruisms.length;
    console.log(score)
  });

  // page3
  $(".acts").submit(function(event){
    event.preventDefault();
    acts = []
    $("input:checkbox[name=acts]:checked").each(function(){
      var act = $(this).val();
      acts.push(act);
    });
    console.log(acts)
  });
// page4
  $("form#gifts").submit(function(event){
    event.preventDefault();
    var cans = $("input:radio[name=cans]:checked").val();
    var goodwill = $("input:radio[name=items]:checked").val();
    gifts = []
    donations = []
    donations.push(cans, goodwill)
    for (i = 1; i <= donations.length; i += 1) {
      if (donations[i] === "yes") {
        donations.push(donations[i]);
      }
    };
    $("input:checkbox[name=gifts]:checked").each(function(){
      var gift = $(this).val();
      gifts.push(gift);
    });

  });

  // page5
  $("#time").submit(function(event) {
    event.preventDefault();
    times = [];
    $("input:checkbox[name=time]:checked").each(function() {
      var time = $(this).val();
      times.push(time);
    });

    console.log(times)
  // var total = newSurvey.calc();
  // $("#score").text(total);

  // var newSurvey = new Survey(name, deed, goodness, altruisms, acts, gifts, times)
  // console.log(newSurvey)
    console.log(name);

  });

});
