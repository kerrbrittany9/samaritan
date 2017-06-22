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
  this.choices = [];
}

Survey.prototype.calc = function() {
  if (this.altruisms.length > this.acts.length && this.altruisms.length > this.gifts.length && this.altruisms.length > this.times.length) {
    this.total = "jamie";
  } else if (this.acts.length > this.altruisms.length && this.acts.length > this.gifts.length && this.acts.length > this.times.length) {
    this.total = "jane";
  } else if (this.gifts.length > this.altruisms.length && this.gifts.length > this.acts.length && this.gifts.length > this.times.length) {
    this.total = "angie";
  } else if (this.times.length > this.altruisms.length && this.times.length > this.acts.length && this.times.length > this.gifts.length) {
    this.total = "mother";
  } else if (this.altruisms.length === this.acts.length || this.altruisms.length === this.gifts.length || this.altruisms.length === this.times.length) {
    this.total = "jamie";
  } else if (this.acts.length === this.altruisms.length || this.acts.length === this.gifts.length || this.acts.length === this.times.length) {
    this.total = "jane";
  } else if (this.gifts.length === this.altruisms.length || this.gifts.length === this.acts.length || this.gifts.length === this.times.length) {
    this.total = "angie";
  } else if (this.times.length === this.altruisms.length || this.times.length === this.acts.length || this.times.length === this.gifts.length) {
    this.total = "mother";
  }
  return this.total;
};

Survey.prototype.grand = function() {
  this.score = this.altruisms.length + this.acts.length + this.gifts.length + this.times.length;
  return this.score;
};

Survey.prototype.joinArrays = function() {
  this.choices = this.altruisms.concat(this.acts, this.gifts, this.times);
  return this.choices;
};

var displayArray = function(result) {
  $("#userChoices").empty();
  result.forEach(function(index) {
    $("#userChoices").append("<li>" + index + "</li>")
  });
  return;
};

$(document).ready(function() {
  // var name;
  // var deed;
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
  });

  $("#wheelie").hover(function(){
    $("#umbrella").toggle();
    $("#noUmbrella").toggle();
  });

  $("#deeds").hover(function(){
    $("#good").toggle();
    $("#bad").toggle();
  });

  $("#redhead").hover(function(){
    $("#girl").toggle();
    $("#boy").toggle();
  });

  $("#start").submit(function(event) {
    event.preventDefault()
    name = $("#name").val();
    deed = $("#goodDeed").val();
    goodness = $("#howGood").val();
    greeting = "Welcome, " + name + "!" + " It's time to find out if you're a good person.";
    $("#nameResponse").prepend(greeting);
    $("#start").hide();
    $("#hidden").fadeIn(1500);
    console.log(name, deed, goodness);
  });
  $("#quiz-start").click(function(){
    $(".mainPage").hide();
    $("#page2").fadeIn();
  })
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
    for (i = 0; i < answers.length; i += 1) {
      if (answers[i] !== "no") {
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

  $("#localPrevious").click(function(){
    $("#page2").hide();
    $(".mainPage").fadeIn();
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

  $("#actsPrevious").click(function(){
    $("#page3").hide();
    $("#page2").fadeIn();
  })

// page4
  $(".gifts").submit(function(event){
    event.preventDefault();
    var cans = $("input:radio[name=cans]:checked").val();
    var goodwill = $("input:radio[name=items]:checked").val();
    gifts = []
    donations = []
    donations.push(cans, goodwill)
    for (i = 0; i < donations.length; i += 1) {
      if (donations[i] !== "no") {
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

  $("#donorPrevious").click(function(){
    $("#page4").hide();
    $("#page3").fadeIn();
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

  $("#servicePrevious").click(function(){
    $("#page5").hide();
    $("#page4").fadeIn();
  });

  $("#results").click(function(){
    var newSurvey = new Survey(name, deed, goodness, altruisms, acts, gifts, times)
    var total = newSurvey.calc();
    var score = newSurvey.grand();
    console.log(newSurvey)
    $("#spicer").hide();
    $("#temporary").hide();
    $("#buddy").show();
    if (score <= 10) {
      $("#lost").fadeIn();
    } else {
      if(total === "jamie") {
      $("#jamieFoxx").fadeIn();
    } else if (total === "jane") {
      $("#jane").fadeIn();
    } else if (total === "angie") {
      $("#angie").fadeIn();
    } else if (total === "mother") {
      $("#mother").fadeIn();
      }
    };
    $(".grand-total").append(score + " / 48 ");
    var allChoices = newSurvey.joinArrays();
    displayArray(allChoices);

    console.log(allChoices);
  });

  $("#goHome").click(function(){
    $("#resultsPage").hide();
    $(".mainPage").fadeIn();
  });

  $("#profileButt").click(function(){
    var deed;
    deed = $("#goodDeed").val();
    $("#userName").text(name);
    $(".goodDeed").text(deed);
    $("#resultsPage").hide();
    $("#profile").fadeIn();
  $("#profile-goals").submit(function(event) {
      event.preventDefault()
      toDoList = $("#to-do").val();
      $("#userGoals").append("<li class='list'>" + toDoList + "</li>");
      $("input#to-do").val("");
      $(".list").click(function() {
      $("#userChoices").append("<li>" + toDoList + "</li>");
      $(this).fadeOut();
    });
    });
  });

  $("#home2").click(function(){
    $("#profile").hide();
    $(".mainPage").fadeIn();
  });

  $("#score").click(function(){
    $("#profile").hide();
    $("#resultsPage").fadeIn();
  });

});
