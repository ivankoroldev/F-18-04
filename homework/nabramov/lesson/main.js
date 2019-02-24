$(document).ready(function(){
     $(".step").on("click", function(){
        $(this).toggleClass("active").siblings().removeClass("active");
        }); 
});