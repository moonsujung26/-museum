$(function () {

    $('.main_full').fullpage({
        paddingTop: '0',
        paddingBottom: '0',
        verticalCentered: false,
    });

    $('.main_visual_slide').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        pauseOnHover: false
    });


    $('.content_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        useTransform: false
    });

    $('.more a').on('mouseenter', function (e) {
        e.preventDefault();
        let idx = $(this)
            .parent()
            .index()

        $('.content_slide').slick('slickGoTo', idx)

    });

    
    ('.main_news .news .news_menu button').on('click', function () {
        let idx = $(this).parent().index();
        $('.main_news .news .news_content>ul')
            .eq(idx)
            .addClass('on')
            .siblings()
            // 나머지 형제들 선택자//
            .removeClass('on');


        $(this).parent().addClass('on')
            .siblings()
            .removeClass('on')
    });


})