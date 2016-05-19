$(function () {
    var $headerNav = $('#header-navbar');
    var $transparentFadeIn = $('.transparent-fadeIn');
    var $transparentFadeInFull = $('.transparent-fadeIn-full');
    var $body = $('body');

    $(window).scroll(function () {
        var pos = $(window).scrollTop();

        if (pos > 300) {
            $headerNav.css('visibility', 'visible');
            $headerNav.css('opacity', '1');
        } else {
            $headerNav.css('visibility', 'hidden');
            $headerNav.css('opacity', '0');
        }

        $transparentFadeIn.each(function() {
            var bottomOfObject = $(this).offset().top + 100;
            var bottomOfWindow = $(window).scrollTop() + $(window).height();

            if (bottomOfWindow > bottomOfObject) {
                $(this).animate({opacity: '1'}, 500);
            }
        });

        $transparentFadeInFull.each(function() {
            var bottomOfObject = $(this).offset().top + $(this).height();
            var bottomOfWindow = $(window).scrollTop() + $(window).height();

            if (bottomOfWindow > bottomOfObject) {
                $(this).animate({opacity: '1'}, 500)
            }
        });

        $('#sidebar').css('visibility', pos < $(window).height() ? 'hidden' : 'visible');
    });

    //$('.hidden-before-load').hide();

    $('#project-name').css('opacity', '1');
    setTimeout(function () {
        $('#project-title').css('opacity', '1');
    }, 1000);
    setTimeout(function () {
        $('#project-links').css('opacity', '1');
    }, 1000);
    setTimeout(function () {
        $('.circle-button').css('opacity', '1');
    }, 1000);


    $('a[href*=#]:not([href=#ls], [href=#zs], [href=#1kb], [href=#2kb], [href=#identita], [href=#tpcup], [href=#ost], [href=#koniec])').click(function (event) {
        var href = $(this).attr('href');

        var $target = (href.indexOf('#', href.length - 1)) ? $($(this).attr('href')) : $body;

        $('html, body').animate({
            scrollTop: $target.offset().top + 80
        }, 1000);

        event.preventDefault();
    });

    $("[data-toggle=tooltip]").tooltip();
    $body.scrollspy({target: '#header-navbar'})
});
