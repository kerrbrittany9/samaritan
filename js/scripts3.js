$(document).ready(function(){
  $("form#acts").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=acts]:checked").each(function(){
      var acts = $(this).val();
    });
