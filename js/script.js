$(document).ready(function(){
	$(".articles").hide();
	$("#umMig").show();
});

function hideShow(id){
	$(".articles").hide();
	$('#'+id).show();
}

$("h3").click(function() {
	$(this).nextUntil("h3").toggle( "medium");
});
