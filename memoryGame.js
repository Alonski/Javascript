/**
 * Created by Alonski on 6/14/2016.
 */

"use strict";
$(function () {
    console.log("Start");

    // class gameItem {
    //     constructor(x, y)
    // }
    let playerOneTurn = true;
    let inTurn = false;
    let firstGlyph = 0;
    let secondGlyph = 0;
    let lock = false;

    const colorOrig = 'blue';
    const numOfCols = 12;
    const numOfRows = 3;
    const glyphOrig = 'glyphicon-tree-deciduous';
    const glyphs = [
        'glyphicon-plane',
        'glyphicon-fire',
        'glyphicon-thumbs-up',
        'glyphicon-gbp',
        'glyphicon-phone',
        'glyphicon-heart-empty',
        'glyphicon-paperclip',
        'glyphicon-earphone',
        'glyphicon-education',
        'glyphicon-king',
        'glyphicon-queen',
        'glyphicon-pawn',
    ];
    const colors = [
        'red',
        'green',
        'teal',
        'black',
        'darkmagenta',
    ];
    // let style='<div style="color:darkmagenta"></div>';
    Array.prototype.shuffle = function () {
        let arr = this;
        for (let i = 0; i < arr.length; i++) {
            let randomNum = Math.floor(Math.random() * arr.length);
            let temp = arr[i];
            arr[i] = arr[randomNum];
            arr[randomNum] = temp;
        }
        return arr;
    };

    function createRows(numOfRows) {
        let oldGlyphs = glyphs.shuffle().splice(0, (numOfCols * numOfRows) / 2);
        // let oldGlyphs = glyphs.shuffle();
        let newGlyphs = [];
        newGlyphs.push(...oldGlyphs);
        for (let i = 0; i < ((numOfCols * numOfRows) / 2) - oldGlyphs.length; i++) {
            newGlyphs.push(oldGlyphs[i]);
        }
        let randomGlyphs = newGlyphs;
        randomGlyphs.forEach(function (element, index, array) {
            let randomNum = Math.floor(Math.random() * colors.length);
            array[index] = [element, colors[randomNum]];
        });
        randomGlyphs.push(...newGlyphs);
        // console.log('To Flow:', randomGlyphs, "Old:", glyphs);
        // for (let i = 0; i < numOfRows - 1; i++) {
        //     randomGlyphs.push(...oldGlyphs);
        // }
        // console.log('before random', randomGlyphs);

        randomGlyphs.shuffle();
        // randomGlyphs.push(...glyphs.shuffle());
        // console.log('random', randomGlyphs);
        // let randomGlyphs = glyphs;
        // console.log(randomGlyphs);
        while (randomGlyphs.length) {
            let row = $('<div class="row"></div>');
            for (let i = 0; i < numOfCols; i++) {
                // console.log(`H: ${h} I: ${i}`);
                let cell = randomGlyphs.pop();
                let col = $(`<div class="col-xs-1"><h1><span class="glyphicon ${glyphOrig}" aria-hidden="true" data-behind=${cell[0]} data-color="${cell[1]}" style="color:blue"></span></h1></div>`);
                col.appendTo(row);
            }
            row.appendTo('#gameGame div.container');
        }
    }

    function changeUser() {
        if (playerOneTurn) {
            $('#player1').removeClass('label-success').addClass('label-danger');
            $('#player2').removeClass('label-danger').addClass('label-success');
        }
        else {
            $('#player1').removeClass('label-danger').addClass('label-success');
            $('#player2').removeClass('label-success').addClass('label-danger');
        }
        playerOneTurn = !playerOneTurn;
    }

    function addUserScore() {
        if (playerOneTurn) {
            let player = $('#player1Score');
            console.log(`Player 1 Score:${player.text()}`);
            player.text(Number(player.text()) + 1);
        }
        else {
            let player = $('#player2Score');
            console.log(`Player 2 Score:${player.text()}`);
            player.text(Number(player.text()) + 1);
        }
    }

    function resetUserScore() {
        $('#player1').removeClass('label-danger').addClass('label-success');
        $('#player2').removeClass('label-success').addClass('label-danger');
        $('#player1Score,#player2Score').text('0');
    }

    function resetGame() {
        $('section#gameGame').children('div.container').children().remove();
        resetUserScore();
        createRows(numOfRows);
        // createRow();
    }

    function checkEndGame() {
        let player1Score = Number($('#player1Score').text());
        let player2Score = Number($('#player2Score').text());
        if (player1Score + player2Score >= (numOfCols * numOfRows) / 2) {
            if (player1Score > player2Score) {
                alert(`Good Game! Player 1 Wins!`);
            }
            else if (player1Score < player2Score) {
                alert(`Good Game! Player 2 Wins!`);
            }
            else {
                alert(`Good Game! Its a Tie!`);
            }
            resetGame();
        }
        console.log(player1Score, player2Score);
        // $('span.glyphicon-eye-open').each((index, element) => {
        //     // console.log(index, $(element).data('behind'));
        // });
    }

    $('div.container').on('click', '.' + glyphOrig, function () {
        if (lock) {
            return;
        }
        if (!inTurn) {
            firstGlyph = $(this);
            firstGlyph.removeClass(glyphOrig);
            firstGlyph.addClass(firstGlyph.data('behind'));
            firstGlyph.css('color', firstGlyph.data('color'));
            inTurn = true;
            console.log(firstGlyph.data('behind'), firstGlyph.data('color'));
            return;
        }

        secondGlyph = $(this);
        secondGlyph.removeClass(glyphOrig);
        secondGlyph.addClass($(this).data('behind'));
        secondGlyph.css('color', secondGlyph.data('color'));
        lock = true;
        window.setTimeout(function () {
            inTurn = false;
            lock = false;
            if (firstGlyph.data('behind') === secondGlyph.data('behind') && firstGlyph.data('color') === secondGlyph.data('color')) {
                console.log("Correct!");
                firstGlyph.removeClass(firstGlyph.data('behind'));
                secondGlyph.removeClass(secondGlyph.data('behind'));
                // firstGlyph.remove();
                // secondGlyph.remove();
                addUserScore();
                checkEndGame();
            } else {
                console.log("Not Correct!");
                changeUser();
                firstGlyph.removeClass(firstGlyph.data('behind'));
                firstGlyph.addClass(glyphOrig);
                firstGlyph.css('color', colorOrig);
                // firstGlyph.addClass(glyphOrig).slideUp(300).delay(800).fadeIn(400);
                secondGlyph.removeClass(secondGlyph.data('behind'));
                secondGlyph.addClass(glyphOrig);
                secondGlyph.css('color', colorOrig);
            }

        }, 500);
        // console.log(secondGlyph.data('behind'));
        // switch (inTurn) {
        //     case tri:
        //
        //     case 1:
        //
        //     // case 2:
        //     //     console.log(firstGlyph.data('behind'));
        //     //     console.log(secondGlyph.data('behind'));
        //     //     firstGlyph.removeClass(firstGlyph.data('behind'));
        //     //     firstGlyph.addClass(glyphOrig);
        //     //     secondGlyph.removeClass(secondGlyph.data('behind'));
        //     //     secondGlyph.addClass(glyphOrig);
        //     //     inTurn = 0;
        //     //     break;
        // }
    });

    resetGame();

    // function updateTotal() {
    //     // console.log($('ul.cart li.item').data('price'));
    //     let total = 0;
    //     $('ul.cart li.item').each((index, element) => {
    //         // console.log("Logging", index, element);
    //         // console.log("Price: ", $(element).data('price'));
    //         total += $(element).data('price') * Number($(element).children('span').text());
    //     });
    //     // console.log(`Total: ${total}`);
    //     $("#total").text(`${total} Shmekels`);
    // }
    //
    // $("ul.inventory").on('click', 'li', function () {
    //     let el = $(this);
    //     let elCart = 0;
    //     let contains = false;
    //     $('ul.cart li.item').each((index, element) => {
    //         // console.log(`El ID: ${el.data('type')}, Element ID: ${$(element).data('type')}`);
    //         if (el.data('type') === $(element).data('type')) {
    //             contains = true;
    //             elCart = $(element);
    //             return false;
    //             // console.log("Same id");
    //         }
    //         // console.log("Logging", index, element);
    //         // console.log(this);
    //         // console.log(element);
    //         // console.log(`El: ${el} and Element: ${element}`);
    //         // if ($('ul.cart').find(this).length > 0) {
    //         //     contains = true;
    //         //     console.log('Contains El');
    //         // }
    //     });
    //     // let el_price = Number($(this).data('price'));
    //     // $("#total").text(Number($("#total").text()) + el_price);
    //     // el.slideToggle("fast", function () {
    //     if (contains) {
    //         // let numOfItem = Number($('ul.cart li.item span.badge').text());
    //         let numOfItem = Number(elCart.children('span').text());
    //         if (numOfItem >= 0) {
    //             elCart.children('span').text((numOfItem + 1));
    //         }
    //         // elCart.append('<span class="badge">1</span>');
    //         // console.log("Adding + to Current Element");
    //     }
    //     else {
    //         let newEl = el.clone();
    //         newEl.children('span').text('1');
    //         // let newElButton = '<button type="button" class="btn btn-sm btn-danger">Delete</button>';
    //         newEl.append('<button type="button" class="btn btn-danger" data-type="delete"><span class="glyphicon glyphicon-remove"></span></button>');
    //         newEl.append('<button type="button" class="pull-right btn btn-warning" data-type="minus"><span class="glyphicon glyphicon-minus"></span></button>');
    //         newEl.prepend('<button type="button" class="pull-right btn btn-success" data-type="plus"><span class="glyphicon glyphicon-plus"></span></button>');
    //         $('ul.cart').prepend(newEl);
    //         // $('ul.cart').prepend(el.slideToggle());
    //         // });
    //     }
    //     updateTotal();
    //     // console.log($(this).text(), $(this).data('price'));
    // });
    //
    // $('ul.cart').on('click', 'button', function () {
    //     // console.log($(this));
    //     let numOfItem = Number($(this).parent().children('span').text());
    //     switch ($(this).data('type')) {
    //         case('delete'):
    //             $(this).parent().remove();
    //             break;
    //         case('plus'):
    //             if (numOfItem >= 0) {
    //                 $(this).parent().children('span').text((numOfItem + 1));
    //             }
    //             break;
    //         case('minus'):
    //             if (numOfItem > 1) {
    //                 $(this).parent().children('span').text((numOfItem - 1));
    //             }
    //             else {
    //                 $(this).parent().remove();
    //             }
    //             break;
    //     }
    //     updateTotal();
    // });
    //
    // // $("ul.cart").on('click', 'li', function () {
    // //     let el = $(this);
    // //     // el.slideToggle("fast", function () {
    // //     $('ul.inventory').prepend(el);
    // //     // });
    // //     // console.log($(this).text(), $(this).data('price'));
    // //     updateTotal();
    // // });
});