$(document).ready(function(){
	$(".know-more").click(function(e){
		e.preventDefault();
		$(this).click(function(){
			$(".hover-text").toggleClass("ok");
		})
	})
})


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
});