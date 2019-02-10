jQuery(function(){
	initMenu();
});

function initMenu() {
	var opener = jQuery('.menu-opener');
	var page = jQuery('html');
	var classActive = 'menu-active';

	var clickHandler = function(e) {
		e.preventDefault();
		page.toggleClass(classActive);
	};
	opener.on('click', clickHandler);
}

$('.grid').masonry({
	columnWidth: 200,
	itemSelector: '.grid-item',
	columnWidth: 200,
	horizontalOrder: true
  });