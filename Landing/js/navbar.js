/*globals $:false */
/*jslint browser: true */
/*global window */
/*global document */


$('.omnie').click(function () {
	$('html, body').animate({
		scrollTop: $('#koncert').offset().top
	}, 2000);
});


$(window).scroll(function () {
	if ($(document).scrollTop() > 50) {
		$('nav').addClass('shrink');
	} else {
		$('nav').removeClass('shrink');
	}
});
