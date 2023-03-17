$(function () {
    silder();
    function silder() {
        $('.tour-slider').css({ display: 'block' });
        $(".tour-slider").slick({
            autoplay: true,
            autoplaySpeed: 6000,
            speed: 1000,
            arrows: false,
            centerPadding: '48px',
            centerMode: true,
            pauseOnHover: false,
            slidesToShow: 4,
            dots: true,
            initialSlide: 0,
            infinite: true,
            // the magic
            responsive: [{
                breakpoint: 767,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 1,
                    dots: true,
                    initialSlide: 0,
                }
            },]
        });

    }

    var processIdToRunSlide;
    $('#beforeSLider').mouseenter(function () {
        processIdToRunSlide = setInterval(() => { functionSlide(-1) }, 1000);
    });
    $('#beforeSLider').mouseout(function () {
        clearInterval(processIdToRunSlide)
    });
    $('#afterSLider').mouseout(function () {
        clearInterval(processIdToRunSlide)
    });
    $('#afterSLider').mouseenter(function () {
        processIdToRunSlide = setInterval(() => { functionSlide(1) }, 1000);
    });
    function functionSlide(stepSlide) {
        $(".tour-slider").slick('slickGoTo', parseInt($(".tour-slider").slick('slickCurrentSlide')) + stepSlide);

    }
});