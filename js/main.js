$(document).ready(function() {
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 1) {
            $(".navbar").addClass("box-shadow");

        } else {
            $(".navbar").removeClass("box-shadow");
        }
    });
    $(".fa-bars").on("click", function() {
        $(".fa-bars").toggleClass("fa-times");

    });
    $("#news-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [991, 2],
        itemsMobile: [768, 1],
        pagination: false,
        navigation: true,
        navigationText: ["", ""],
        autoPlay: true,
    });
    ScrollReveal({
        reset: true,
        distance: '60px',
        duration: 2500,
        delay: 400,
    });

    ScrollReveal().reveal('#h1', { origin: 'right', duration: 4000, delay: 500 });
    //strat animation scrollreval faculties section
    ScrollReveal().reveal('#faculties-top', { origin: 'left', duration: 3000, delay: 500 });
    ScrollReveal().reveal('#faculties-bottom', { origin: 'bottom', duration: 3000, delay: 700 });
    ScrollReveal().reveal('#faculties-right', { origin: 'right', duration: 3000, delay: 500 });
    ScrollReveal().reveal('#faculties-left', { origin: 'top', duration: 3000, delay: 700 });
    //end animation scrollreval faculties section

    //strat animation scrollreval contact section

    ScrollReveal().reveal('#contact-us-form', { origin: 'bottom', duration: 3000, delay: 600 });
    ScrollReveal().reveal('#contact-us-img', { origin: 'top', duration: 3000, delay: 700 });
    //end animation scrollreval contact section
});