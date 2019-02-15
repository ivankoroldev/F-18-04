$(document).ready(function(){
	$("#work1").hover(function(){
    $('#aw1').toggleClass('hidden');
},function(){
    $('#aw1').removeClass('hidden');
	});
});



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