'use strict';

// TOOLTIP

// $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
// });


// CAROUSEL CONTROLS

$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselPause").click(function(){
        $(".carousel").carousel("pause");
    });
    $("#carouselPlay").click(function(){
        $(".carousel").carousel("cycle");
    });
});
