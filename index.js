"use strict";

var x = 55;
console.log(x);
$(function () {
    console.log("Test")
    $("button").click(function () {
        console.log("Clicked")
        $("ul").append($("<li></li>").text($("input").val()));
        // $("ul").append($("<li></li>").text($("input").val()));
    });
    $('body').keydown(function(event) {
        if (event.keyCode === 13) {
            $('button').click()
            return false;
         }
    });
});