$(function(){
  $('.slide-list').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    dots: true,
    infinite: true,
    speed: 2000,
    fade: true,
    cssEase: 'linear',
    arrows: false
  });

  $('#buy').hover(function(){
    $("#bounce").addClass("bounce");
  },function(){
    $("#bounce").removeClass("bounce");
  });
});