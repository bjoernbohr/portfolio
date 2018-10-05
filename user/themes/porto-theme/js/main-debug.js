
/* Add Fadein to Parent*/
var ids = [
    "header",
    "about",
    "works",
    "contact"
];

jQuery(document).ready(function(){
    jQuery.each( ids, function( i, val ) {
        jQuery("#" + val).addClass('fadein');
    });
    /*  Start text typed  */

});


