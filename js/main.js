$(document).ready(function(){
	$('.services__slider').slick({
		adaptiveHeight: true,
		draggable: true,
		infinite: true,
		slidesToShow: 3,
  		slidesToScroll: 3,
		// autoplay: true,
		// autoplaySpeed: 2500,		
		arrows: false,
		dots: true,
		responsive: [
			{
			  breakpoint: 550,
			  settings: {
				 slidesToShow: 2,
				 slidesToScroll: 2,
				 infinite: true,
			  }
			}
		]
	 });

	// Scroll Reveal

	const sr = ScrollReveal({
		distance: '60px',
		duration: 1650,
		delay: 250,
	 })

	sr.reveal(`.header__title-box, .cost__title, .cost__decor`, { origin: 'left'});
	sr.reveal(`.header__photo-box, .intro__image-box, `, { origin: 'right'});
	sr.reveal(`.intro__text-box, .fin__title`, { origin: 'top'});
	sr.reveal(`.services__title, .urgent__row, .fin__subtitle`, { origin: 'bottom'});
	sr.reveal(`.header__title`, { origin: 'top', delay: 650});
	sr.reveal(`.header__subtitle, .urgent__text, .cost__columns-row, .fin__social-row`, { origin: 'bottom', delay: 650});
	sr.reveal(`.header__decor_one, .urgent__image-box`, { origin: 'left', delay: 850});
	sr.reveal(`.header__decor_two, .services__decor-image`, { origin: 'right', delay: 850});
});