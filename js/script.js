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
});