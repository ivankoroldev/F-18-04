window.onload = function(){
let elem = document.getElementsByClassName('nav');
let elem1=document.getElementsByClassName("li");
toggleClass = function(){
	for (var i =0;i<elem.length;i++){
		elem[i].classList.remove("active");
		this.classList.add("active");
	}
};
for(var i=0;i<elem.length;i++){
	elem[i].addEventListener("click",toggleClass);
	}

}

$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});
	})

$(document).ready(function(){
	$(".nav-btn").on("click", function(){
		$("body").toggleClass("menu_active");
});	
})