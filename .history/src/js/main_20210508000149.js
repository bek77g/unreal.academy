$(document).ready(function(){
    $(".slidbtn").click(function(){
        $(".slidebtn").toggleClass("slidebtn-active")
    });

    $(window).on('scroll', function(){
        if ($(this).scrollTop() > 500) {
            $('.go-top').fadeIn(slow);
        } else {
            $('.go-top').fadeOut(slow);
        }
    });
})