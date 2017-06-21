function Survey(name, deed, goodness, altruisms, acts, gifts, times) {
  this.userName = name;
  this.descript = deed;
  this.goodness = goodness;
  this.altruisms = altruisms;
  this.acts = acts;
  this.gifts = gifts;
  this.times = times;
  this.score;
  this.total;
}

Survey.prototype.calc = function() {
  if (this.altruisms > this.acts && this.altruisms > this.gifts && this.altruisms > this.times) {
    this.total = "jamie";
  } else if (this.acts > this.altruisms && this.acts > this.gifts && this.acts > this.times) {
    this.total = "jane";
  } else if (this.gifts > this.altruisms && this.gifts > this.acts && this.gifts > this.times) {
    this.total = "angie";
  } else if (this.times > this.altruisms && this.times > this.acts && this.times > this.gifts) {
    this.total = "mother";
  }
  return this.total;
};

Survey.prototype.total = function() {
  this.score = this.altruisms.length + this.acts.length + this.gifts.length + this.times.length;
  return this.score;
};

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
    $(".mainPage").hide();
    $("#page2").fadeIn();
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
    $("#page2").hide();
    $("#page3").fadeIn();
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
    $("#page3").hide();
    $("#page4").fadeIn();
  });
// page4
  $(".gifts").submit(function(event){
    event.preventDefault();
    var cans = $("input:radio[name=cans]:checked").val();
    var goodwill = $("input:radio[name=items]:checked").val();
    gifts = []
    donations = []
    donations.push(cans, goodwill)
    for (i = 1; i <= donations.length; i += 1) {
      if (donations[i] === "yes") {
        gifts.push(donations[i]);
      }
    };
    $("input:checkbox[name=gifts]:checked").each(function(){
      var gift = $(this).val();
      gifts.push(gift);
    });
    $("#page4").hide();
    $("#page5").fadeIn();
    console.log(gifts);
  });

  // page5
  $(".time").submit(function(event) {
    event.preventDefault();
    times = [];
    $("input:checkbox[name=time]:checked").each(function() {
      var time = $(this).val();
      times.push(time);
    });

    console.log(times);
  // $("#score").text(total);


    $("#page5").hide();
    $("#resultsPage").fadeIn();

  });

  $("#results").click(function(){
    var newSurvey = new Survey(name, deed, goodness, altruisms, acts, gifts, times)
    var total = newSurvey.calc();
    console.log(newSurvey)
    $("#spicer").hide();
    $("#temporary").hide();
    $("#buddy").show();
    if (total === "jamie") {
      $("#jamieFoxx").fadeIn();
    } else if (total === "jane") {
      $("#jane").fadeIn();
    } else if (total === "angie") {
      $("#angie").fadeIn();
    } else if (total === "mother") {
      $("#mother").fadeIn();
    };
  });

});
