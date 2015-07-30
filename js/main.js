$(document).ready( function() {
	$("img").animate({
		opacity: 1
	}, "slow", function() {
		console.log("tja");
	});
});

$(document).ready(function(){
  	$('.carousel').slick({
  		dots: true,
  		infinite: true,
  		speed: 500,
  		fade: true,
  		cssEase: 'linear'
	});
});