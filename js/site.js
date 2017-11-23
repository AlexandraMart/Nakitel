$(document).ready(function(){
	$('.doors-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: 'autoplay',
		autoplaySpeed: 3500,
		responsive: [
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});
});