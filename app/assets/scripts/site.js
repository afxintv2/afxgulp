(function($) {

	// retina: dense
	$('img[data-2x]').dense();

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

	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-66441440-1', 'auto');
	ga('send', 'pageview');

})(jQuery);
