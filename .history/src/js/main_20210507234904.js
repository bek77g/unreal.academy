$(document).ready(function(){
    $(".slidbtn").click(function(){
        $(".slidebtn").toggleClass("slidebtn-active")
    })

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.gotop').fadeIn();
        } else {
            $('.gotop').fadeOut();
        }
    });
})