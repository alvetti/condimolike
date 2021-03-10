$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
       $('.redes-line2').addClass('fx_line2');
    }
});
$(document).ready(function(){
    $('.scroll').click(function(){
        $('html, body').animate({
            scrollTop: $('.redes-line2').offset().top
        }, 1000);
    });
});