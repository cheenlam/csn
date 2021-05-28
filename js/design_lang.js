$(function () {
	//語系
	$(".are-lang").hover(
		function(){
			$(".ul-lang").stop(true,false).slideDown(400);
		},
		function(){
			$(".ul-lang").stop(true,true).slideUp(400);
		}
	);
}); 