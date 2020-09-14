console.log('\'Allo \'Allo!');


jQuery(document).ready(function ($) {
	// remove empty div
	$("p:empty").remove();
  // about us timeline
  var $slideshow ;
	window.onload = function () {
		$slideshow = $(".your-class").slick({
			variableWidth: true,
			dots: true,
			infinite: false,
			speed: 300,
			arrows: false,
			appendDots: "#mainSlider__dots1"
		});
	};
	$('.your-class').click(function () {
		$slideshow.slick('slickGoTo', parseInt($slideshow.slick('slickCurrentSlide')) + 1);
	});
 });

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
