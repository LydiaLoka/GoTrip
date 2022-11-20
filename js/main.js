
/* carousel */
  const owl = $('.owl-carousel');
owl.owlCarousel( {
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 3,
});

$('.slider__button--next').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.slider__button--prev').click(function() {
    owl.trigger('prev.owl.carousel');
});

const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav')
const menuIcon = document.querySelector('.menu-icon');


navBtn.onclick = function () {
	nav.classList.toggle('nav--mobile')
	menuIcon.classList.toggle('menu-icon--active');
	document.body.classList.toggle('no-scroll');
};
