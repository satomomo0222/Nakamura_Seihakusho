$(function(){
  $('.slide').slick({
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    swipe: false,
    swipeToSlide: false,
    dots: false,
    infinite: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    arrows: false
  }).on({
    beforeChange: function(event, slick, currentSlide, nextSlide) {
      $(".slick-slide", this).eq(currentSlide).addClass("preve-slide");
      $(".slick-slide", this).eq(nextSlide).addClass("slide-animation");
    },
    afterChange: function() {
      $(".preve-slide", this).removeClass("preve-slide slide-animation");
    }
  });
  $('.slide').find(".slick-slide").eq(0).addClass("slide-animation");

  $('#buy').hover(function(){
    $("#bounce").addClass("bounce");
  },function(){
    $("#bounce").removeClass("bounce");
  });

  $('.product-slide-list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  });
  $("#product-next-btn").click(function(){
    $('.product-slide-list').slick('slickNext');
  });
  $("#product-prev-btn").click(function(){
    $('.product-slide-list').slick('slickPrev');
  });
});