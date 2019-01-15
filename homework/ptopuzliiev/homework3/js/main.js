// owl carousel
$(document).ready(function(){
	$('.slider').owlCarousel({
    items : 1,
    loop: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplaySpeed: 2000,
    dots: true
	});
});


// add class active for links
$(document).on('click', 'ul li', function(){
		$(this).addClass('active').siblings().removeClass('active')
})
