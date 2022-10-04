!(function ($) {
    "use strict";

    // Preloader
    $(window).on('load', function () {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function () {
                $(this).remove();
            });
        }
    });


    // carousel
    function owlPorque() {
        $("#owl-porque").owlCarousel({
            // loop: !0,
            // nav: true,
            // dots: !1,
            // loop: true,
            // margin: 10,
            nav: false,
            margin: 22,
            responsive: {
                0: {
                    items: 1,
                    margin: 25,
                    loop: true
                },
                540: {
                    items: 2.5,
                    margin: 25,
                    loop: true
                },
                660: {
                    items: 3.3,
                    margin: 25,
                    loop: true
                },
                768: { items: 4 },
                900: { items: 4 },
                1024: { items: 4 },
                1100: { items: 4 },
                1200: { items: 4 },
                1350: { items: 4 },
                1500: { items: 4 },
            },
        });
    }

    // carousel
    function owlAssistencia() {
        $("#owl-assistencia").owlCarousel({
            // loop: !0,
            // nav: true,
            // dots: !1,
            // loop: true,
            // margin: 10,
            nav: false,
            margin: 22,
            responsive: {
                0: {
                    items: 1,
                    margin: 25,
                    loop: true
                },
                540: {
                    items: 1.5,
                    margin: 25,
                    loop: true
                },
                660: {
                    items: 2.1,
                    margin: 25,
                    loop: true
                },
            },
        });
    }

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    $(window).on('load', function () {
        aos_init();
        owlPorque();
        owlAssistencia();
    });

})(jQuery);


