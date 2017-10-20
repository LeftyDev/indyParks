//animations that start at page runtime
function runtimeAnimation() {
    $("html, body").fadeIn(700, function() {
        $('nav').stop().animate({
            top: "0"
        }, 1000, 'easeOutQuad');
        $('#home-content').removeClass('active', 1000, "easeOutQuad");
        $('#home-end-content-holder, #slide-arrows').fadeIn(700);
    });
}

//all click bindings
function setBindings() {
    //learn more click event
    $('#home-end-content, #home-end-content-downchevron').click(function() {
        $('html, body').animate({
           scrollTop: $('#about-section').offset().top
        }, 1250, "easeInExpo");
    });

    $('a:nth-child(1)').click(function() {
        $('html, body').animate({
            scrollTop: $('#home-section').offset().top
        }, 1250, 'easeInExpo');
    });

    $('a:nth-child(2)').click(function() {
        $('html, body').animate({
            scrollTop: $('#about-section').offset().top
        }, 1250, 'easeInExpo');
    });

    $('a:nth-child(3)').click(function() {
        $('html, body').animate({
            scrollTop: $('#team-section').offset().top
        }, 1250, 'easeInExpo');
    });

    //initial navicon click event
    //communicates down to closeNav() which then communicates with openNav() and so on and so on...
    $('.fa-navicon').click(function() {
        if ($('#nav-links').css('marginTop') === "-150px") {
            $('#nav-links').stop().animate({
                marginTop: "0"
            }, 750, 'easeOutQuad');
            $('.navicon').html("<i class='fa fa-close fa-3x close-click' aria-hidden='true' onclick='closeNav()'></i>");
        }
    });
}

function openNav() {
    if ($('#nav-links').css('marginTop') === "-150px") {
        $('#nav-links').stop().animate({
            marginTop: "0"
        }, 750, 'easeOutQuad');
        $('.navicon').html("<i class='fa fa-close fa-3x close-click' aria-hidden='true' onclick='closeNav()'></i>");
    }
}

function closeNav() {
    $('#nav-links').stop().animate({
        marginTop: "-150px"
    }, 400, 'easeInQuad');
    $('.navicon').html("<i class='fa fa-navicon fa-3x' aria-hidden='true' onclick='openNav()'></i>");
}


//runs beginning animations and sets click bindings
$(document).ready(function() {
    $("html, body, #home-end-content-holder, #slide-arrows").hide();
    runtimeAnimation();
    $(setBindings())();
});