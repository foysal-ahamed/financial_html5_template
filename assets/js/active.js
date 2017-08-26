$(document).ready(function () {
	$('.hero-slider').slick({
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true,
	});

	var menu = $(".top-header");
	$(window).scroll(function () {
		//more then or equals to
		if ($(window).scrollTop() < 100) {
			menu.removeClass('fixed-menu-background animated fadeInDown');
			//less then 100px from top
		} else {
			menu.addClass('fixed-menu-background animated fadeInDown');

		}
	});

	var topto = $(".presstotop");
	$(window).scroll(function () {
		//more then or equals to
		if ($(window).scrollTop() > 500) {
			topto.removeClass('presstotop-display-none');
			//less then 100px from top
		} else {
			topto.addClass('presstotop-display-none');

		}
	});


	$(".presstotop").click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, "bounceIn");
		return false;
	});

	//	Slick Nav


	$('#resposivemenu').slicknav({
		appendTo: '.resposive-menu',
		label: '',
	});
});
