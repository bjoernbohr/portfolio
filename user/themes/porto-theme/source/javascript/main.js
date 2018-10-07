var IDs = [];

jQuery(document).ready(function(){
    jQuery("#top").find("header, section, footer").each(function(){

        IDs.push(jQuery(this).attr("id"));

        var filterIds = IDs.filter(function( element ) {
            return element !== undefined;

        });

        var resultArray = filterIds.join();

        console.log(resultArray);

        jQuery.each( filterIds, function( i, val ) {
            jQuery("#" + val).addClass('fadein');
            jQuery(".nav-list").append('<a class="nav-link text text__w text__upper link link__p flex-container flex-container__center-V" href="#'+val+'">' + val + '</a>');
        });

    });
});




