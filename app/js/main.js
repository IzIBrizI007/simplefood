$(function () {
  $('.comments__slider').slick({
    dots: true,
    infinite: true,
  });
});

var mixer = mixitup('.categories__choice');
mixer.filter('.category-a');
