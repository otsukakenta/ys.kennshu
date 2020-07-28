$('.main_image-content').slick({
	asNavFor: '.main_nav',
	autoplay: true,
	draggable: false,
	fade: true,
	pauseOnFocus: false,
	pauseOnHover: false,
	autoplaySpeed: 4000,
	speed: 300,
	swipe: false,
	arrows: false,
	slidesToShow: 1,
});

$('.main_nav').slick({
	asNavFor: '.main_image-content',
	focusOnSelect: true,
	draggable: false,
	arrows: false,
	slidesToShow: 5,
});
