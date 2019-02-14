$(document).ready(function(){
	$(".nav-btn").on("click", function(){
		$("body").toggleClass("menu_active");
});	
})
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
toggleClass=function() {
	for(var i=0;i<elem1.length;i++){
		elem1[i].classList.remove('active-li')
		this.classList.add("active-li")
	}
}
	for (var i =0; i < elem1.length; i++) {
		elem1[i].addEventListener("click",toggleClass);
	}
}