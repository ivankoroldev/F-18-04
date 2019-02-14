jQuery(function(){
	initMenu();
	initSlick();
});

function initMenu() {
	var opener = jQuery('.menu-opener');
	var page = jQuery('html');
	var classActive = 'menu-active';

	var clickHandler = function(e) {
		e.preventDefault();
		page.toggleClass(classActive);
	};
	opener.on('click', clickHandler);
}

function initSlick() {
	$('.your-class').slick({
	    slidesToShow: 3,
	    dots: true,
	    autoplay: true,
  autoplaySpeed: 2000,
	    responsive: [
		    {
		      breakpoint: 768,
		      settings: "unslick"
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
	 });
}