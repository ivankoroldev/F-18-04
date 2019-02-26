$(document).ready(function(){
	$(".know-more").on("click", function(){
        $(this).parent(".visible-text").parent(".img").toggleClass("ok");
        $(this).toggleClass("active");
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