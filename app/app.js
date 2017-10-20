function runtimeAnimation() {
    $("html, body").fadeIn(700, function() {
        $('nav').stop().animate({
            top: "0"
        }, 1000, 'easeOutQuad');
        $('#home-content').removeClass('active', 1000, "easeOutQuad");
        $('#home-end-content-holder, #slide-arrows').fadeIn(700);
    });
}

function setBindings() {
    $('#home-end-content, #home-end-content-downchevron').click(function() {
        $('html, body').animate({
           scrollTop: $('#about-section').offset().top
        }, 1500, "easeInExpo");
    });
}

$(document).ready(function() {
    $("html, body, #home-end-content-holder, #slide-arrows").hide();
    runtimeAnimation();
    setBindings();
});