/**
 * Created by Alonski on 6/7/2016.
 */
"use strict";
$(function () {
    console.log("Start");
    function updateTotal() {
        // console.log($('ul.cart li.item').data('price'));
        let total = 0;
        $('ul.cart li.item').each((index, element) => {
            // console.log("Logging", index, element);
            // console.log("Price: ", $(element).data('price'));
            total += $(element).data('price') * Number($(element).children('span').text());
        });
        // console.log(`Total: ${total}`);
        $("#total").text(`${total} Shmekels`);
    }

    $("ul.inventory").on('click', 'li', function () {
        let el = $(this);
        let elCart = 0;
        let contains = false;
        $('ul.cart li.item').each((index, element) => {
            // console.log(`El ID: ${el.data('type')}, Element ID: ${$(element).data('type')}`);
            if (el.data('type') === $(element).data('type')) {
                contains = true;
                elCart = $(element);
                return false;
                // console.log("Same id");
            }
            // console.log("Logging", index, element);
            // console.log(this);
            // console.log(element);
            // console.log(`El: ${el} and Element: ${element}`);
            // if ($('ul.cart').find(this).length > 0) {
            //     contains = true;
            //     console.log('Contains El');
            // }
        });
        // let el_price = Number($(this).data('price'));
        // $("#total").text(Number($("#total").text()) + el_price);
        // el.slideToggle("fast", function () {
        if (contains) {
            // let numOfItem = Number($('ul.cart li.item span.badge').text());
            let numOfItem = Number(elCart.children('span').text());
            if (numOfItem >= 0) {
                elCart.children('span').text((numOfItem + 1));
            }
            // elCart.append('<span class="badge">1</span>');
            // console.log("Adding + to Current Element");
        }
        else {
            let newEl = el.clone();
            newEl.children('span').text('1');
            // let newElButton = '<button type="button" class="btn btn-sm btn-danger">Delete</button>';
            newEl.append('<button type="button" class="btn btn-danger" data-type="delete"><span class="glyphicon glyphicon-remove"></span></button>');
            newEl.append('<button type="button" class="pull-right btn btn-warning" data-type="minus"><span class="glyphicon glyphicon-minus"></span></button>');
            newEl.prepend('<button type="button" class="pull-right btn btn-success" data-type="plus"><span class="glyphicon glyphicon-plus"></span></button>');
            $('ul.cart').prepend(newEl);
            // $('ul.cart').prepend(el.slideToggle());
            // });
        }
        updateTotal();
        // console.log($(this).text(), $(this).data('price'));
    });

    $('ul.cart').on('click', 'button', function () {
        // console.log($(this));
        let numOfItem = Number($(this).parent().children('span').text());
        switch ($(this).data('type')) {
            case('delete'):
                $(this).parent().remove();
                break;
            case('plus'):
                if (numOfItem >= 0) {
                    $(this).parent().children('span').text((numOfItem + 1));
                }
                break;
            case('minus'):
                if (numOfItem > 1) {
                    $(this).parent().children('span').text((numOfItem - 1));
                }
                else {
                    $(this).parent().remove();
                }
                break;
        }
        updateTotal();
    });

    // $("ul.cart").on('click', 'li', function () {
    //     let el = $(this);
    //     // el.slideToggle("fast", function () {
    //     $('ul.inventory').prepend(el);
    //     // });
    //     // console.log($(this).text(), $(this).data('price'));
    //     updateTotal();
    // });
});