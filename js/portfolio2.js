
	var $container = $('.row');

	$container.imagesLoaded(function () {
		$container.isotope({
			itemSelector: '[class*="col-"]',
			animationEngine: 'best-available',
			resizable: true, // disable normal resizing
			resizesContainer: true
		});
	});


	$(window).smartresize(function () {
		$container.isotope();
	});
