$(document).ready(function(){
    $(window).on('scroll', function(){
        if ($(this).scrollTop() > 2000) {
            $('.go-top').fadeIn();
        } else {
            $('.go-top').fadeOut();
        }
    });
})