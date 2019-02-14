// owl carousel
$(document).ready(function(){
	$('.nav-btn').on('click', function() {
        console.log('test')
        $('body').toggleClass('menu-active');
    })
});
 $(document).ready(function(){
      $('.clients-slider').slick({
         dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true
      });
    });