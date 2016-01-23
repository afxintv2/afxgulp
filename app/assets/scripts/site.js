(function($) {

	// slick
	// $('.team-slider').slick({
	// 	infinite: true,
	// 	// margin: 20,
	// 	// nav: true,
	// 	// navText: ['<span class="pe-7s-angle-left-circle"></span>', '<span class="pe-7s-angle-right-circle"></span>'],
	// 	dots: true,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	autoplay: true,
	// 	autoplaySpeed: 10000,
	// 	easing: 'easeInOutQuad',
	// 	speed: 1000,
	//   responsive: [
	//     { breakpoint: 543, settings: { slidesToShow: 1 } },
	//     { breakpoint: 767, settings: { slidesToShow: 2 } },
	//     { breakpoint: 991, settings: { slidesToShow: 3 } },
	//   ]
	// });

	// owl
	$('.team-slider').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		navText: ['<span class="pe-7s-angle-left"></span>', '<span class="pe-7s-angle-right"></span>'],
		dots: true,
		slideBy: 'page',
		autoplay: true,
		autoplayTimeout: 10000,
		autoplaySpeed: 500,
	  responsive: {
	    0: { items: 1, nav: false, margin: 0 },
	    544: { items: 2 },
	    992: { items: 3 },
	  }
	});

})(jQuery);
