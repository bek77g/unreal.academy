$(document).ready(function(){
    $(".slidbtn").click(function(){
        $(".slidebtn").toggleClass("slidebtn-active")
    });

    $(window).on('scroll', function(){
        if ($(this).scrollTop() > 2000) {
            $('go-top').fadeIn(slow);
        } else {
            $('go-top').fadeOut(slow);
        }
    });
})