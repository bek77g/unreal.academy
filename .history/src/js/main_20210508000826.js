$(document).ready(function(){
    $(window).on('scroll', function(){
        if ($(this).scrollTop() > 500) {
            $('.go-top').fadeIn(slow);
        } else {
            $('.go-top').fadeOut(slow);
        }
    });
})