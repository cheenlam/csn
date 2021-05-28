$(function() {
	$('.lay-container').fadeOut({
		'complete': function() {
			var scrWidth = $('body')[0].scrollWidth;
			var scrHeight = $('body')[0].scrollHeight;
			var top = (scrHeight - 327) / 2;
			top = (top < 0) ? 300 : top;
			var left = (scrWidth - 665) / 2;
			$('.reg-noSupport').css({ 'top': top, 'left': left });
			$('.reg-noSupport').fadeIn();
		}
	});
	
	$('.lnk-noSupport-close').click(function() {
		$('.reg-noSupport').fadeOut();
		$('.lay-container').fadeIn();
	});
});