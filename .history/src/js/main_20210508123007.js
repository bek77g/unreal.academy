$(document).ready(function(){
    $(window).on('scroll', function(){
        if ($(this).scrollTop() > 500) {
            $('.go-top').fadeIn(slow);
        } else {
            $('.go-top').fadeOut(slow);
        }
    });

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
      
})