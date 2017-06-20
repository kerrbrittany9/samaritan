
$(document).ready(function(){
  $("form#gifts").submit(function(event){
    event.preventDefault();
    var gifts = []
    $("input:checkbox[name=gifts]:checked").each(function(){
      var gift = $(this).val();
      gifts.push(gift);
    });
    var inputtedCans = $("input#can").val();
    var inputtedGoodwill = $("input#goodwill").val();
  });
});
