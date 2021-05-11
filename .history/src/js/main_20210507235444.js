$(document).ready(function(){
    $(".slidbtn").click(function(){
        $(".slidebtn").toggleClass("slidebtn-active")
    })

    $(window).on('scroll', function(){
        if ($(this).scrollTop() > 500) {
            $('.gotop').fadeIn(slow);
        } else {
            $('.gotop').fadeOut(slow);
        }
    });
})