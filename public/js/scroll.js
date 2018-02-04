$(function(){
	$(".page-scroll").click(function(event){
		var anchor = $(this);
		$("body").stop().animate({
			scrollTop : ($($(this).attr("href")).offset().top-60)
		}, 1250, 'easeInOutSine');
		event.preventDefault();
	});
});