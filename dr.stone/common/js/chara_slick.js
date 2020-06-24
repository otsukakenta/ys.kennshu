$('.main_content-imgCara').slick({
asNavFor: '.main_content-imgBtn',
arrows: true,
slidesToShow: 1,
prevArrow: '<div class="arrow-prev"><img src="../image/bd_icon_001.png"></div>',
nextArrow: '<div class="arrow-next"><img src="../image/bd_icon_001.png"></div>',
});

$('.main_content-imgBtn').slick({
asNavFor: '.main_content-imgCara',
focusOnSelect: true,
arrows: false,
slidesToShow: 18,
});