$(document).ready(function () {
	fixProject();
	$( window ).resize(function() {
		fixProject();
	});

	function fixProject() {
		var div = $('.project-section');
		var width = div.width();
		var height = width/2;

		div.css('height', height);
	}
	

	$(window).on('scroll', function() {
		(!window.requestAnimationFrame) ? fixGallery() : window.requestAnimationFrame(fixGallery);
	});

	function fixGallery() {
		var offsetTop = $('.nav-wrapper').offset().top,
			scrollTop = $(window).scrollTop();
		( scrollTop > offsetTop ) ? $('.nav-wrapper > .site-nav').addClass('float') : $('.nav-wrapper > .site-nav').removeClass('float');
	}
});