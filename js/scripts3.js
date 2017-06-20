$(document).ready(function(){
  $("form#acts").submit(function(event){
    event.preventDefault();
    var acts = []
    $("input:checkbox[name=acts]:checked").each(function(){
      var act = $(this).val();
      acts.push(act);
    });
  });
});
