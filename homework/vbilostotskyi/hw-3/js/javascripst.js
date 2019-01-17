$(document).ready(function(){
    $('.slider').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       dots: true,
       autoplay: true,
       autoplaySpeed: 4000,
       arrows: false
    });
  });

  (function($){
   $(function() {
     $('.menu__icon').on('click', function() {
       $(this).closest('.nav')
         .toggleClass('nav_state_open');
     });
     
     $('.nav__item').on('click', function() {
       // do something
 
       $(this).closest('.nav')
         .removeClass('nav_state_open');
     });
   });
 })(jQuery);