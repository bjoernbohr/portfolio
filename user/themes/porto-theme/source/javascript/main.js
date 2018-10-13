var IDs = [];

jQuery(document).ready(function () {

    /*fadeIn Hero*/
    $('#header').addClass('fade-h');

    /*fadeIn on Scroll*/
    function isVisisble(elem) {
        return $(elem).offset().top - $(window).scrollTop() < $(elem).height();
    }
    $(window).scroll(function () {
        if (isVisisble($('.animated-p'))) {
            if($('.animated-p').children('.animated').addClass('go'));
        };
    });

    /*fadeIn Reset transition*/
    $('.fade').on('transitioned MSTransitionEnd webkitTransitionEnd oTransitionEnd', function(event) {
       $('.fade').css('transition','initial');
    });

    /*der Id setztene Loop JO!*/
    $("#top").find("header, section, footer").each(function () {

        IDs.push($(this).attr("id"));

        var filterIds = IDs.filter(function (element) {
            return element !== undefined;
        });

    });

});





