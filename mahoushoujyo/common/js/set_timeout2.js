$(function(){
$(".wrapper").css("display", "none");
setTimeout(function() {
    $('.anime').fadeOut();
	}, 1500);
});

$(function(){
    $(".wrapper").css({opacity:'1'});
    setTimeout(function(){
    $(".wrapper").css("display", "block");
    $(".wrapper").stop().animate({opacity:'1'},1500);
    },1500);
});
