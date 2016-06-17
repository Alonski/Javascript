/**
 * Created by Alonski on 6/7/2016.
 */
"use strict";

$(function () {
    console.log("Start");
    $("ul.destinations").on('click', 'li', function () {
        console.log("Clicked on li in ul destinations");
        var el = $(this);
        el.slideToggle("fast", function () {
            $('ul.wishlist').prepend(el);
        });
        el.slideToggle();
    });

    $("ul.wishlist").on('click', 'li', function () {
        console.log("Clicked on li in ul wishlist");
        var el = $(this);
        el.slideToggle("fast", function () {
            $('ul.destinations').prepend(el);
        });
        el.slideToggle();
    });
});