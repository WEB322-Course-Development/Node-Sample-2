$(function(){
  $(".calc-btn").not(":input[type=submit], #calc-clear").on("click", function(e){
	  e.preventDefault();
	  
	  var $this = $(this);
	  var $calcDisplay = $("#calc-display");
	  
	  $calcDisplay.val($calcDisplay.val() + $this.text());
	  
  });
  
  $("#calc-clear").on("click", function(e){
	  e.preventDefault();
	  $("#calc-display").val("");
  });
  
});