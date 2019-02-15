$(document).ready(function(){
	$('.nav-btn').on('click', function() {
        console.log('test')
        $('body').toggleClass('menu-active');
    })
});

