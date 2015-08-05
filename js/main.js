$(document).ready(function () {
	fixProject();
	$( window ).resize(function() {
		fixProject();
	});

	function fixProject() {
		var div = $('#personal-webspace');
		var width = div.width();
		var height = (2*width)/3;

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