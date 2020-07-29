$(function () {
	$(".wrapper").css("z-index", "2");
	setTimeout(function () {
		$('.anime').fadeOut();
	}, 1500);
});

$(function () {
	$(".wrapper").css({
		opacity: '1'
	});
	setTimeout(function () {
		$(".wrapper").css("z-index", "5");
		$(".wrapper").stop().animate({
			opacity: '1'
		}, 1500);
	}, 1500);
});
