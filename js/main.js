// parallax
(function() {
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#parallax");
  function parallax(e) {
    let widthValue = window.innerWidth/2;
    let heightValue = window.innerHeight/2;
    let mouseMoveX = e.clientX;
    let mouseMoveY = e.clientY;
    let depthValue = `${90 + (mouseMoveX - widthValue) * 0.002}% ${60 - (mouseMoveY - heightValue) * 0.005}%`;
    elem.style.backgroundPosition = `${depthValue}`;
  }
})();


$(document).ready(function(){

  // navigate in page
  $('a[href^="#nav-"]').on('click', function(event) {
    event.preventDefault();

    let sc = $(this).attr("href"),
        dn = $(sc).offset().top;

    $('html, body').animate({scrollTop: dn}, 500, 'linear');
  });


  // form
  let isBlured = false;
  $('.contact__form .contact__form_input').blur(function() {
    if(isBlured) {
      if( this.value ) {
        $(this).addClass('active');
        $(this).removeClass('error');
      } else {
        $(this).removeClass('active');
        $(this).addClass('error');
      }
    }
  });

  $('#sendButton').on('click', function(event) {
    isBlured = true;
    let isFormValid = true;
    $(".contact__form .contact__form_input").each(function(){
      if (this.value){
        $(this).addClass('active');
        $(this).removeClass('error');
        isFormValid = false;
      }
      else{
        $(this).removeClass('active');
        $(this).addClass('error');
      }
    });
    return isFormValid;
  });






  // up button
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {
      $('#up-button').fadeIn(200);
    } else {
      $('#up-button').fadeOut(200);
    }

    let dynamicPosition = 150 - ($(document).height() - $(window).scrollTop() - $(window).height());
    if($(window).scrollTop() + $(window).height() + 100 >= $(document).height()){
      $('#up-button').css("bottom",dynamicPosition);
    } else {
      $('#up-button').css("bottom","50px");
    }
  });
  $('.up-button').click(function() {
    $('body,html').animate({scrollTop : 0}, 500, 'linear');
  });


  // features
  // owl carousel
  $('#owl-carousel').owlCarousel({
    autoplay: false,
    autoplaySpeed: 2000,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    center: true,
    dots: false,
    items: 8,
    lazyLoad : true,
    loop: true,
    nav: false,
    startPosition: 'URLHash',
    URLhashListener:true,
    responsive:{
      0:{
        items:2
      },
      575:{
        items:3
      },
      768:{
        items:4
      },
      992:{
        items:4
      },
      1400:{
        items:5
      },
      1920:{
        items:6
      }
    },
  });

  $(".features-carousel .owl-item").click(function() {
    $(".features-carousel .owl-item").removeClass('center');
    $(this).addClass("center active");
  });

  $(".features__list .features__item").hover(function() {
    $(".features__desc").hide();
    $(".features__list .features__item").removeClass('active');
    $(this).addClass("active");
    let selected_tab = $(this).find("a").attr("href");
    $(selected_tab).stop().fadeIn();
    return false;
  });

  $(".features-carousel .features-carousel__item_after").hover(function() {
    $(".features__desc").hide();
    $(".features-carousel .features-carousel__item_after").removeClass('active');
    $(this).addClass("active");
    let indexOfThis = $(this).attr( "data-ind" );
    let selected_tab = $(".features__list .features__item").children().eq(indexOfThis)[0];
    let xlo = $(selected_tab).attr("href");
    $(xlo).stop().fadeIn();
    return false;
  });

});





