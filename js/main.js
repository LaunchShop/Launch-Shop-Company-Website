jQuery(document).ready(function($){
    $(".arrow-background").click(function() {
    $('html, body').animate({
        scrollTop: $("#services").offset().top
    }, 2000);
});
});

