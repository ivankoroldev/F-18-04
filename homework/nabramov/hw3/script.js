window.onload = function(){
let elem = document.getElementsByClassName('nav');
let elementPag = document.getElementsByClassName('pg');
toggleClass = function(){
	for (var i =0;i<elem.length;i++){
		elem[i].classList.remove("active");
		this.classList.add("active");
	}
};
for(var i=0;i<elem.length;i++){
	elem[i].addEventListener("click",toggleClass);
}
toggleClass = function(){
	for (var i=0;i<elem.length;i++){
		elementPag[i].classList.remove("is-active");
		this.classList.add("is-active");
	}
};
for(var i=0;i<elem.length;i++){
	elementPag[i].addEventListener("click",toggleClass);
};
}