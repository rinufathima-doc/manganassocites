$(document).ready(function () {

    $(".slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false
    });

    $(".prev-btn").click(function (e) {
        e.preventDefault();
        $(".slider").slick("slickPrev");
    });

    $(".next-btn").click(function (e) {
        e.preventDefault();
        $(".slider").slick("slickNext");
    });

});