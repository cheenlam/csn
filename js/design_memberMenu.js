$(function() {
	var navList = $('ul.ui-ul-pageNav > li');
	for(var i = 0, nav; nav = navList[i]; i++) {
		if($(nav).find('ul.ui-ul-subPageNav').length > 0) {
			$(nav).css('height', $(nav).find(' > a').innerHeight());
			$(nav).find(' > a').click(function() {
				var navLi = $(this).parent();
				var subNav = navLi.find('ul.ui-ul-subPageNav');
				var closeHeight = $(this).innerHeight(),
					openHeight = closeHeight + $(subNav).innerHeight();
				if(navLi.css('height') === closeHeight + 'px') {
					$.each(navLi.parent().find(' > li.li-active > a'), function(i, navLnk) {
						closeNav.call(navLnk);
					});
					navLi.addClass('li-active');
					navLi.animate({
						height: openHeight
					}, 500);
				}
				else if(navLi.css('height') === openHeight + 'px') {
					closeNav.call(this);
				}
				
				return;
			});
		}
	}
	
	$('ul.ui-ul-pageNav > li.li-active').css('height', 'auto');
});

function closeNav() {
	var nav = $(this).parent();
	var closeHeight = $(this).innerHeight()
	$(nav).animate({
		height: closeHeight
	}, 500, function() {
		$(nav).removeClass('li-active');
	});
}