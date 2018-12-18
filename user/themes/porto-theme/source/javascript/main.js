var IDs = [];

jQuery(document).ready(function () {

    /*fadeIn Hero*/
    $('#header').addClass('fade-h');

    /*fadeIn on Scroll*/
        jQuery(document).ready(function() {

            jQuery.fn.isInViewport = function() {
                var elementTop = jQuery(this).offset().top;
                var elementBottom = elementTop + jQuery(this).outerHeight();

                var viewportTop = jQuery(window).scrollTop();
                var viewportBottom = viewportTop + jQuery(window).height();

                return elementBottom > viewportTop && elementTop < viewportBottom;
            };

            jQuery(window).on('resize scroll', function() {
            jQuery('.animated-p').each(function() {
                if (jQuery(this).isInViewport()) {
                    jQuery(this).addClass('go');
                    }
                });
            });
        });

    /*fadeIn Reset transition*/
    $('.fade').on('transitioned MSTransitionEnd webkitTransitionEnd oTransitionEnd', function(event) {
       $('.fade').css('transition','initial');
    });

    /*der Id setztene Loop JO!*/
    $("*").each(function () {

        IDs.push($(this).attr("id"));

        var filterIds = IDs.filter(function (element) {
            return element !== undefined;
        });

    });

/*      if($('*').hasClass('animated-p')) {

          $('.animated-p').addClass('trigger-' + (+1))
      }*/

//PARALLAX FUNCTION
    $(window).scroll(function(e){
        parallax();
    });

    function parallax(){
        var scrolled = $(window).scrollTop();

        $('[parallax]').each(function() {
            var parallaxItem = $(this);
            var getSpeed = $(parallaxItem).attr('data-speed');

            $(this).css({'transform' : 'translateY( ' + -(scrolled*getSpeed) +'px)'});
        });
    }


});





