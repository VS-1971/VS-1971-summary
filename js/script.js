
$(document).ready(function(){
  $('.carusel__inner').slick({
  infinite: true,
  speed: 1200,
  slidesToShow: 1,
  prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>'
    }
  );
});

$('.work__slick').slick({
  infinite: true,
  speed: 1200,
  fade: true,
  adaptiveHeight: true,
  centerMode: true,
  arrows: false
});