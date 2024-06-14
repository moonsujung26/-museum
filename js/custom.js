$(function () {

    $('.main_full').fullpage({
        paddingTop: '0',
        paddingBottom: '0',
        verticalCentered: false,
        responsiveWidth: 1200,
        anchors:
            ['main_visual', 'main_exhibition', 'main_introduction', 'main_news',
                'main_customer', 'footer'],
        afterLoad: function (a, i) {
            $('.aside li')
                .eq(i - 1)
                .addClass('on')
                .siblings()
                .removeClass('on');
            $('.main_full .section')
                .eq(i - 1)
                .addClass('on')
                .siblings()
                .removeClass('on');
            // if (i == 2 || i == 4|| i == 5|| i == 6 || i == 7) {
            //     $('.header').addClass('on')
            // } else {
            //     $('.header').removeClass('on')
            // }
        },
        autoScrolling:true

    });

    $('.main_visual_slide').slick({
        arrows: true,
        dots: true,
        // autoplay: true,
        pauseOnHover: false
    });


    $('.content_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        useTransform: false,
        slidesToShow: 1
    });

    $('.more a').on('mouseenter', function (e) {
        e.preventDefault();
        let idx = $(this)
            .parent()
            .index()

        $('.content_slide').slick('slickGoTo', idx)

    });


    $('.main_news .news .news_menu button').on('click', function () {
        let idx = $(this).parent().index();
        $('.main_news .news .news_content>ul')
            .eq(idx)
            .addClass('on')
            .siblings()
            // 나머지 형제들 선택자//
            .removeClass('on');


        $(this).parent()
            .addClass('on')
            .siblings()
            .removeClass('on')
    });

    $('.main_news .event .event_slide').slick({
        slidesToShow: 1,
        // dots: true,
        arrows: false,
        dots:true,
    });



})