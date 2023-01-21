$(function () {

  $('.burger').on('click', function(){
  $('.burger').toggleClass('burger__line--active');
  

  $('body').toggleClass('lock');
  $('.burger-nav').toggleClass('burger-nav--active');
});

  if($(window).width() > 577)
    {   
      $('.comments__slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        // fade: true, 
        infinite: false,
        prevArrow: '<button type="button" class="comments__arrow comments__arrow--prev"><span class="sr-only">Предидущий слайд</span><svg class="icons-sprite"><use xlink:href="images/sprite.svg#icon-vector"></use></svg></button>',
        nextArrow: '<button type="button" class="comments__arrow comments__arrow--next"><span class="sr-only">Следующий слайд</span><svg class="icons-sprite"><use xlink:href="images/sprite.svg#icon-vector"></use></svg></button>',
        appendArrows: '.comments__slider'
      });
    }

    else {
      $('.comments__slider').slick({
        dots: false,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // fade: true,
        infinite: false,
        prevArrow: '<button type="button" class="comments__arrow comments__arrow--prev"><span class="sr-only">Предидущий слайд</span><svg class="icons-sprite"><use xlink:href="images/sprite.svg#icon-vector"></use></svg></button>',
        nextArrow: '<button type="button" class="comments__arrow comments__arrow--next"><span class="sr-only">Следующий слайд</span><svg class="icons-sprite"><use xlink:href="images/sprite.svg#icon-vector"></use></svg></button>',
        appendArrows: '.comments__slider'
      });
    }

  if($(window).width() < 577)
    {   
      $('.restorans__list').slick({
        dots: true,
        arrows : false,
        autoplay: true,
        autoplaySpeed: 11111000,
      });
    }

});



var mixer = mixitup('.choice__foods');
mixer.filter('.category-a');
