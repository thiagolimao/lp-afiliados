jQuery.event.special.touchstart = {
    setup: function (_, ns, handle) {
        this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
    }
};
jQuery.event.special.touchmove = {
    setup: function (_, ns, handle) {
        this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
    }
};
jQuery.event.special.wheel = {
    setup: function (_, ns, handle) {
        this.addEventListener("wheel", handle, { passive: true });
    }
};
jQuery.event.special.mousewheel = {
    setup: function (_, ns, handle) {
        this.addEventListener("mousewheel", handle, { passive: true });
    }
};

!(function ($) {
    "use strict";

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
                    items: 1.01,
                    margin: 25,
                    loop: true
                },
                540: {
                    items: 1.25,
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


    $(window).on('load', function () {
        owlPorque();
        owlAssistencia();
    });

})(jQuery);


