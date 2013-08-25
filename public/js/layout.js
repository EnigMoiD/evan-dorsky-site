$(document).ready(function() {
	setupTopBar();
});

function setupTopBar() {
	var topBarItems = $('.topbar ul li');
	var itemWidth = 100 / topBarItems.length;

	topBarItems.width(itemWidth+'%');
}