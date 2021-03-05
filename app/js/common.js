$(function () {
  let swiper1 = new Swiper('.main-swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var swiper2 = new Swiper('.news__slider', {
    slidesPerView: 2,
    spaceBetween: 70,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
