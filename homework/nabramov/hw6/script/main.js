$(document).ready(function(){
    initCustom();
})


function initCustom(){
    var activeClass = "visible";
    var opener = jQuery('.worker');

var checkState = function() {
    opener.each(function(){
        var item = jQuery(this);
        var block = item.attr("data-id");

        if(item.hasClass(activeClass)) {
            jQuery("#" + block).addClass(activeClass).siblings().removeClass(activeClass);
        }
    })
}

opener.on( "mouseover", function() {
    jQuery(this).addClass(activeClass).siblings().removeClass(activeClass);
    checkState();
})

checkState();

}



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

$(document).ready(function(){
	$(".article-wrap").on("mousemove", function(){
        $(this).addClass("ok").siblings().removeClass("ok");
    }) 
})