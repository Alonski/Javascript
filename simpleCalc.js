/**
 * Created by Alonski on 6/7/2016.
 */
"use strict";

$(function () {
    $("span.total").text(0);

    $("button.add").on('click', function () {
        console.log("Adding New Input Field");
        var newinput = ('<input type="text" value="0"><button class="delete">-</button><br/>');
        $('#content').append(newinput);
        update();
    });

    $(this).on('click', 'button.delete', function () {
        console.log("Deleting Input Field");
        $(this).next().remove();
        $(this).prev().remove();
        $(this).remove();
        update();
    });

    $(this).on('input', 'input', function () {
        console.log("Input changed");
        console.log(isNaN($(this).val()));
        $(this).toggleClass('error', isNaN($(this).val()));
// \        if (isNaN($(this).val())) {
//             $(this).addClass('error');
//         }
//         else {
//             $(this).removeClass('error');
//         }
        update();
    });

    var update = function () {
        var arr = $('input').map(function () {
            return $(this).val();
        });
        var sum = $('input').toArray().reduce(function (sum, element) {
            return sum + Number(element.value);
        }, 0);
        if ($('input').length < 1) {
            $('span.total').text(0);
            $('span.average').text(0);
            $('span.smallest').text(0);
            $('span.largest').text(0);
            return 0;
        }
        var average = sum / $('input').length;
        var smallest = $('input').min(function () {
            return $(this).val();
        });
        var largest = $('input').max(function () {
            return $(this).val();
        });
        $('span.total').text(sum);
        $('span.average').text(average);
        $('span.smallest').text(smallest);
        $('span.largest').text(largest);
    }

    $.fn.max = function (selector) {
        return Math.max.apply(null, this.map(function (index, el) {
            return selector.apply(el);
        }).get());
    };

    $.fn.min = function (selector) {
        return Math.min.apply(null, this.map(function (index, el) {
            return selector.apply(el);
        }).get());
    };
});