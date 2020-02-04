$(document).ready(function() {

	$(".section_4").waypoint(function() {
		setTimeout(function(){
		$(".card").addClass("card-visible"); 
	});
	}, {
		offset : "20%"
	});

});