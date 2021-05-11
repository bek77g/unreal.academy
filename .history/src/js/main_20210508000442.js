$(document).ready(function(){
    $(window).on('scroll', function(){
        if ($(this).scrollTop() > 2000) {
            $('.go-top').fadeIn(slow);
        } else {
            $('.go-top').fadeOut(slow);
        }
    });
})