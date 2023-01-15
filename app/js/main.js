$(function () {
  $('.comments__slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"><span class="lnr lnr-chevron-left"> <span class="sr-only">Предидущий слайд</span></span></button>',
    nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"><span class="lnr lnr-chevron-right"></span>  <span class="sr-only">Следующий слайд</span></button>',
    appendArrows: '.arrows-wrap'
  });

});

function svgSprites() {
  return src('app/images/icons/*.svg') 
  .pipe(cheerio({
        run: ($) => {
            $("[fill]").removeAttr("fill"); 
            $("[stroke]").removeAttr("stroke"); 
            $("[style]").removeAttr("style"); 
        },
        parserOptions: { xmlMode: true },
      })
  )
	.pipe(replace('&gt;','>')) // боремся с заменой символа 
	.pipe(
	      svgSprite({
	        mode: {
	          stack: {
	            sprite: '../sprite.svg', 
	          },
	        },
	      })
	    )
	.pipe(dest('app/images')); 
}

var mixer = mixitup('.categories__choice');
mixer.filter('.category-a');
