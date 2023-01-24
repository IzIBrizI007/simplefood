$(function () {

  $('.burger').on('click', function(){
  $('.burger').toggleClass('burger__line--active');
  
  $('body').toggleClass('lock');
  $('.burger-nav').toggleClass('burger-nav--active');

  $(document).mouseup( function(e){
  var div = $('.burger'); 
		if (!$('.burger-nav').is(e.target)
		    && $('.burger-nav').has(e.target).length === 0 ) { 
      $('.burger').removeClass('burger__line--active');
			$('.burger-nav').removeClass('burger-nav--active');
      $('body').removeClass('lock'); 
		}
	});
});


    $(window).on('load resize', function() {
      if ($(window).width() < 561) {
        $('.restorans__list:not(.slick-initialized)').slick({
          dots: true,
          arrows : false,
          autoplay: true,
          autoplaySpeed: 11111000,
        });
      } else {
        $(".restorans__list.slick-initialized").slick("unslick");
      }
    });

    $('.comments__slider:not(.slick-initialized)').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      fade: true,
      infinite: false,
      prevArrow: '<button type="button" class="comments__arrow comments__arrow--prev"><span class="sr-only">Предидущий слайд</span><svg class="icons-sprite"><use xlink:href="images/sprite.svg#icon-vector"></use></svg></button>',
      nextArrow: '<button type="button" class="comments__arrow comments__arrow--next"><span class="sr-only">Следующий слайд</span><svg class="icons-sprite"><use xlink:href="images/sprite.svg#icon-vector"></use></svg></button>',
      appendArrows: '.comments__slider',
      responsive: [
        {
            breakpoint: 769,
            settings: {
              dots: false
            }
        }
      ]
    });
});

var mixer = mixitup('.choice__foods');
mixer.filter('.category-a');
