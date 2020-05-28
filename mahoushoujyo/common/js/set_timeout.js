$(function(){
$(".wrapper").css("display", "none");
setTimeout(function() {
    $('.anime').fadeOut();
	}, 4000);
});

$(function(){
    $(".wrapper").css({opacity:'1'});
    setTimeout(function(){
    $(".wrapper").css("display", "block");
    $(".wrapper").stop().animate({opacity:'1'},4000);
    },4000);
});
