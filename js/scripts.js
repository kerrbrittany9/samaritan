$(document).ready(function(){
  $("form#acts").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=acts]:checked").each(function(){
      var acts = $(this).val();
    });
$(document).ready(function(){
  $("form#gifts").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=gifts]:checked").each(function(){
      var gifts = $(this).val();
    });
    var inputtedCans = $("input#can").val();
    var inputtedGoodwill = $("input#goodwill").val();
