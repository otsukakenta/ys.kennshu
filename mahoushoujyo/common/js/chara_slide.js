$('.main_character').slick({
asNavFor: '.slider',
slidesToShow: 1,
arrows: false,
initialSlide: 0,
});

$('.slider').slick({
asNavFor: '.main_character',
focusOnSelect: true,
arrows: false,
slidesToShow: 3,
centerMode: true,
fade: false,
swipe: false,
});