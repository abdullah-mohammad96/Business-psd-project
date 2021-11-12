$(function(){
    //banner slider;
    $('.banner-slider').slick({
        dots: true,
        prevArrow:'<i class="fas fa-chevron-left slick-prev left-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right slick-next right-arrow"></i>',
    });

    //funfact counter

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //animate css control by wow

    new WOW().init();

    //feedback slider
    $('.feedback-slider').slick({
        slidesToShow:2,
        slidesToScroll:1,
        dots:true,
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left slick-prev left-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right slick-next right-arrow"></i>'
    });

  });