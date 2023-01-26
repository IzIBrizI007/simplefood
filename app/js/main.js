$(function () {

  $('.select-styler').styler();


  $('.burger').on('click', function(){
  $('.burger').toggleClass('burger__line--active');
  
  $('body').toggleClass('lock');
  $('.burger-nav').toggleClass('burger-nav--active');
  });

$('.burger-filter').on('click', function(){
  $('.burger-filter').toggleClass('burger-filter--active');
  $('.catalog__filter-box').toggleClass('catalog__filter-box--active');
  $('body').toggleClass('lock');
});

$(document).mouseup( function(e){  
  var div = $('.burger'); 
		if (!$('.burger-nav, .catalog__filter-box').is(e.target)
		    && $('.burger-nav, .catalog__filter-box').has(e.target).length === 0 ) { 
      $('.burger').removeClass('burger__line--active');
      $('.burger-filter').removeClass('burger-filter--active');
			$('.burger-nav').removeClass('burger-nav--active');
			$('.catalog__filter-box').removeClass('catalog__filter-box--active');
      $('body').removeClass('lock'); 
		}
});

$('.filter-category__btn').on('click', function(){
  $('.burger-filter').removeClass('burger-filter--active');
  $('.catalog__filter-box').removeClass('catalog__filter-box--active');
  $('body').removeClass('lock');
});


    $(window).on('load resize', function() {
      if ($(window).width() < 769) {
        $('.restorans__list:not(.slick-initialized), .discount__list:not(.slick-initialized)').slick({
          dots: true,
          arrows : false,
          autoplay: true,
          autoplaySpeed: 12000,
        });
      } if ($(window).width() > 769) {
        $(".restorans__list.slick-initialized").slick("unslick");
        $(".discount__list.slick-initialized").slick("unslick");
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

    var $range = $(".filter-price__input");
    var $inputFrom = $(".filter-price__from");
    var $inputTo = $(".filter-price__to");
    var instance;
    var min = 0;
    var max = $inputTo;
    var from = 0;
    var to = 0;
    
    $range.ionRangeSlider({
        type: "double",
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");
    
    function updateInputs (data) {
        from = data.from;
        to = data.to;
    
        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }
    
    $inputFrom.on("change", function () {
        var val = $(this).prop("value");
    
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }
    
        instance.update({
            from: val
        });
    
        $(this).prop("value", val);
    
    });
    
    $inputTo.on("change", function () {
        var val = $(this).prop("value");
    
        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }
    
        instance.update({
            to: val
        });
    
        $(this).prop("value", val);
    });

var mixer = mixitup('.choice__foods, .catalog__list');
mixer.filter('.category-a');
