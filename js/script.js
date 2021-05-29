$('.banner-slider').slick({
  dots: false,
    arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-angle-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-right next"></i>',
  
});

 $('.counter').counterUp({
                delay: 10,
                time: 1000
            });

$('.course-slider').slick({
  dots: false,
    arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-angle-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-right next"></i>',
    centerMode: true,
    centerPadding: "0",
  
});

$('.img-slider').slick({
  dots: false,
    arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.text-slider',
  
});

$('.text-slider').slick({
  dots: false,
    arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.img-slider',
  
});

$('.footer-slider').slick({
  dots: false,
    arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 1,
  centerMode: true,
  
});

