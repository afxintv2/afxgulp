(function($) {

	// slick
	$('.team-slick').slick({
		infinite: true,
		arrows: true,
		prevArrow: '<button type="button" class="arrow-prev"><span class="pe-7s-angle-left"></span></button>',
		nextArrow: '<button type="button" class="arrow-next"><span class="pe-7s-angle-right"></span></button>',
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 10000,
		easing: 'easeInOutCubic',
		speed: 500,
	  responsive: [
	    { breakpoint: 543, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false, dots: false } },
	    { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 2 } },
	  ]
	});

})(jQuery);
