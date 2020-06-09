$(document).ready(function() {
  /* STICKY NAVIGATION */
  $('.js--section-features').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '75px;'
  });

  /* SCROLL ON BUTTONS */
  $('.js--scroll-to-plans').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
  });

  $('.js--scroll-to-start').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  });

  /* NAVIGATION SCROLL */
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({scrollTop: target.offset().top}, 1000);
          return false;
        }
      }
    });
  });

  /* ANIMATIONS ON SCROLL */
  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animate__animated animate__fadeIn');
  }, {
    offset: '60%'
  });

  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animate__animated animate__flipInX');
  }, {
    offset: '60%'
  });

  $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animate__animated animate__fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animate__animated animate__pulse');
  }, {
    offset: '60%'
  });

  /* mobile nav */
  $('.js--nav-icon').click(function() {
    let nav = $('.js--main-nav');
    let icon = $('.js--nav-icon ion-icon');
    

    nav.slideToggle(200);

    if (icon.attr("name") == "menu-outline") {
      icon.attr("name", "close-outline");
      icon.text("close-outline");
    } else {
      icon.attr("name", "menu-outline");
      icon.text("menu-outline");
    }
  });
});