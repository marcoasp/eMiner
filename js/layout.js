$(function() {
	/* Twitter Bootstrap Plugins */
	
	/* End of Twitter Bootstrap Plugins */
	
	
	$(".appear-fade-in.appear-left").each(function(index, element) {
		$(element).appear();
		$(element).on('appear', function() {
			$(element).animate({opacity:1, left: 0});
		});
	});
	
	$(".appear-fade-in.appear-right").each(function(index, element) {
		$(element).appear();
		$(element).on('appear', function() {
			$(element).animate({opacity:1, right: 0});
		});
	});
	
	$(".appear-fade-in.appear-top").each(function(index, element) {
		$(element).appear();
		$(element).on('appear', function() {
			$(element).animate({opacity:1, top: 0});
		});
	});
	
	$(".appear-fade-in.appear-bottom").each(function(index, element) {
		$(element).appear();
		$(element).on('appear', function() {
			$(element).animate({opacity:1, bottom: 0});
		});
	});
	
	$('#main-navbar li a').bind('click.removeactive', function() {
		$('#main-navbar li').removeClass('active');
		$(this).parents('li').addClass('active');
	})
	
	$('#main-navbar li a').smoothScroll({speed: 800});
	
	$.stellar({
		horizontalScrolling: false,
		responsive: true
	});
})