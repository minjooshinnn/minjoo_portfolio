$(function () {


    let winHeight = $(window).height();
    $(window).on('resize', function () {
        winHeight = $(window).height();
    });

    $('#wrap>section').on('mousewheel', function (e, d) {
        if (d > 0) {
            let prv = $(this).prev().offset().top;
            $('html, body').stop().animate({
                scrollTop: prv
            });
        } else if (d < 0) {
            let nxt = $(this).next().offset().top;
            $('html, body').stop().animate({
                scrollTop: nxt
            })
        }
    });


    $('.tab li').on('click', function (e) {
        e.preventDefault();
        let i = $(this).index();
        $('.cont>div').eq(i).css({ display: 'flex' }).siblings().hide();
        $(this).addClass('on').siblings().removeClass('on');
    })



    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 2,
        slidesToScroll: 1,
        pauseOnHover: true,
        infinite: true,
        speed: 1000,
        arrows: true,
    });


    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    $("#hide").click(function () {
        $("stack1").hide();
    });

    $("#show").click(function () {
        $("stack1").show();
    });


    $('#goTop').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });






})


