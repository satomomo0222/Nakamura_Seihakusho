$(function(){
  // header-slide
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


  //buy-icon
  $('#buy').hover(function(){
    $("#bounce").addClass("bounce");
  },function(){
    $("#bounce").removeClass("bounce");
  });

  //product-slide
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

  //page-top btn
  $("#page-top").click(function(){
    $('body, html').animate({scrollTop: 0}, 600, 'swing');
  });
  //scroll
  $(".scroll").click(function(){
    $('body, html').animate({scrollTop:$('.content').offset().top}, 600, 'swing');
  });

  //scrollin
  $(window).scroll(function(){
    $('.fadein').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight +100){
        $(this).addClass('scrollin');
      }
    });
  });
  $(window).scroll(function(){
    $('.fadein2').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200){
        $(this).addClass('scrollin2');
      }
    });
  });
  $(window).scroll(function(){
    $('.fadein3').each(function(){
      var elemPos = $('.type1').offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200){
        $(this).addClass('scrollin3');
      }
    });
  });
  $(window).scroll();

  $('button.gmenu').on('click', function(){
      $(this).toggleClass('-open');
      $('.gnav').toggleClass('-open');
  });

});