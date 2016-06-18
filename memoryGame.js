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
    const numOfRows = 4;
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
        'glyphicon-asterisk',
        'glyphicon-plus',
        'glyphicon-minus',
        'glyphicon-euro',
        'glyphicon-cloud',
        'glyphicon-envelope',
        'glyphicon-pencil',
        'glyphicon-glass',
        'glyphicon-music',
        'glyphicon-search',
        'glyphicon-heart',
        'glyphicon-star',
        'glyphicon-star-empty',
        'glyphicon-user',
        'glyphicon-film',
        'glyphicon-th-large',
        'glyphicon-th',
        'glyphicon-th-list',
        'glyphicon-ok',
        'glyphicon-remove',
        'glyphicon-zoom-in',
        'glyphicon-zoom-out',
        'glyphicon-off',
        'glyphicon-signal',
        'glyphicon-cog',
        'glyphicon-trash',
        'glyphicon-home',
        'glyphicon-file',
        'glyphicon-time',
        'glyphicon-road',
        'glyphicon-download-alt',
        'glyphicon-download',
        'glyphicon-upload',
        'glyphicon-inbox',
        'glyphicon-play-circle',
        'glyphicon-repeat',
        'glyphicon-refresh',
        'glyphicon-list-alt',
        'glyphicon-lock',
        'glyphicon-flag',
        'glyphicon-headphones',
        'glyphicon-volume-off',
        'glyphicon-volume-down',
        'glyphicon-volume-up',
        'glyphicon-qrcode',
        'glyphicon-barcode',
        'glyphicon-tag',
        'glyphicon-tags',
        'glyphicon-book',
        'glyphicon-bookmark',
        'glyphicon-print',
        'glyphicon-camera',
        'glyphicon-font',
        'glyphicon-bold',
        'glyphicon-italic',
        'glyphicon-text-height',
        'glyphicon-text-width',
        'glyphicon-align-left',
        'glyphicon-align-center',
        'glyphicon-align-right',
        'glyphicon-align-justify',
        'glyphicon-list',
        'glyphicon-indent-left',
        'glyphicon-indent-right',
        'glyphicon-facetime-video',
        'glyphicon-picture',
        'glyphicon-map-marker',
        'glyphicon-adjust',
        'glyphicon-tint',
        'glyphicon-edit',
        'glyphicon-share',
        'glyphicon-check',
        'glyphicon-move',
        'glyphicon-step-backward',
        'glyphicon-fast-backward',
        'glyphicon-backward',
        'glyphicon-play',
        'glyphicon-pause',
        'glyphicon-stop',
        'glyphicon-forward',
        'glyphicon-fast-forward',
        'glyphicon-step-forward',
        'glyphicon-eject',
        'glyphicon-chevron-left',
        'glyphicon-chevron-right',
        'glyphicon-plus-sign',
        'glyphicon-minus-sign',
        'glyphicon-remove-sign',
        'glyphicon-ok-sign',
        'glyphicon-question-sign',
        'glyphicon-info-sign',
        'glyphicon-screenshot',
        'glyphicon-remove-circle',
        'glyphicon-ok-circle',
        'glyphicon-ban-circle',
        'glyphicon-arrow-left',
        'glyphicon-arrow-right',
        'glyphicon-arrow-up',
        'glyphicon-arrow-down',
        'glyphicon-share-alt',
        'glyphicon-resize-full',
        'glyphicon-resize-small',
        'glyphicon-exclamation-sign',
        'glyphicon-gift',
        'glyphicon-leaf',
        'glyphicon-fire',
        'glyphicon-eye-open',
        'glyphicon-eye-close',
        'glyphicon-warning-sign',
        'glyphicon-plane',
        'glyphicon-calendar',
        'glyphicon-random',
        'glyphicon-comment',
        'glyphicon-magnet',
        'glyphicon-chevron-up',
        'glyphicon-chevron-down',
        'glyphicon-retweet',
        'glyphicon-shopping-cart',
        'glyphicon-folder-close',
        'glyphicon-folder-open',
        'glyphicon-resize-vertical',
        'glyphicon-resize-horizontal',
        'glyphicon-hdd',
        'glyphicon-bullhorn',
        'glyphicon-bell',
        'glyphicon-certificate',
        'glyphicon-thumbs-up',
        'glyphicon-thumbs-down',
        'glyphicon-hand-right',
        'glyphicon-hand-left',
        'glyphicon-hand-up',
        'glyphicon-hand-down',
        'glyphicon-circle-arrow-right',
        'glyphicon-circle-arrow-left',
        'glyphicon-circle-arrow-up',
        'glyphicon-circle-arrow-down',
        'glyphicon-globe',
        'glyphicon-wrench',
        'glyphicon-tasks',
        'glyphicon-filter',
        'glyphicon-briefcase',
        'glyphicon-fullscreen',
        'glyphicon-dashboard',
        'glyphicon-paperclip',
        'glyphicon-heart-empty',
        'glyphicon-link',
        'glyphicon-phone',
        'glyphicon-pushpin',
        'glyphicon-usd',
        'glyphicon-gbp',
        'glyphicon-sort',
        'glyphicon-sort-by-alphabet',
        'glyphicon-sort-by-alphabet-alt',
        'glyphicon-sort-by-order',
        'glyphicon-sort-by-order-alt',
        'glyphicon-sort-by-attributes',
        'glyphicon-sort-by-attributes-alt',
        'glyphicon-unchecked',
        'glyphicon-expand',
        'glyphicon-collapse-down',
        'glyphicon-collapse-up',
        'glyphicon-log-in',
        'glyphicon-flash',
        'glyphicon-log-out',
        'glyphicon-new-window',
        'glyphicon-record',
        'glyphicon-save',
        'glyphicon-open',
        'glyphicon-saved',
        'glyphicon-import',
        'glyphicon-export',
        'glyphicon-send',
        'glyphicon-floppy-disk',
        'glyphicon-floppy-saved',
        'glyphicon-floppy-remove',
        'glyphicon-floppy-save',
        'glyphicon-floppy-open',
        'glyphicon-credit-card',
        'glyphicon-transfer',
        'glyphicon-cutlery',
        'glyphicon-header',
        'glyphicon-compressed',
        'glyphicon-earphone',
        'glyphicon-phone-alt',
        'glyphicon-tower',
        'glyphicon-stats',
        'glyphicon-sd-video',
        'glyphicon-hd-video',
        'glyphicon-subtitles',
        'glyphicon-sound-stereo',
        'glyphicon-sound-dolby',
        'glyphicon-sound-5-1',
        'glyphicon-sound-6-1',
        'glyphicon-sound-7-1',
        'glyphicon-copyright-mark',
        'glyphicon-registration-mark',
        'glyphicon-cloud-download',
        'glyphicon-cloud-upload',
        'glyphicon-tree-conifer',
        'glyphicon-cd',
        'glyphicon-save-file',
        'glyphicon-open-file',
        'glyphicon-level-up',
        'glyphicon-copy',
        'glyphicon-paste',
        'glyphicon-alert',
        'glyphicon-equalizer',
        'glyphicon-king',
        'glyphicon-queen',
        'glyphicon-pawn',
        'glyphicon-bishop',
        'glyphicon-knight',
        'glyphicon-baby-formula',
        'glyphicon-tent',
        'glyphicon-blackboard',
        'glyphicon-bed',
        'glyphicon-apple',
        'glyphicon-erase',
        'glyphicon-hourglass',
        'glyphicon-lamp',
        'glyphicon-duplicate',
        'glyphicon-piggy-bank',
        'glyphicon-scissors',
        'glyphicon-bitcoin',
        'glyphicon-yen',
        'glyphicon-ruble',
        'glyphicon-scale',
        'glyphicon-ice-lolly',
        'glyphicon-ice-lolly-tasted',
        'glyphicon-education',
        'glyphicon-option-horizontal',
        'glyphicon-option-vertical',
        'glyphicon-menu-hamburger',
        'glyphicon-modal-window',
        'glyphicon-oil',
        'glyphicon-grain',
        'glyphicon-sunglasses',
        'glyphicon-text-size',
        'glyphicon-text-color',
        'glyphicon-text-background',
        'glyphicon-object-align-top',
        'glyphicon-object-align-bottom',
        'glyphicon-object-align-horizontal',
        'glyphicon-object-align-left',
        'glyphicon-object-align-vertical',
        'glyphicon-object-align-right',
        'glyphicon-triangle-right',
        'glyphicon-triangle-left',
        'glyphicon-triangle-bottom',
        'glyphicon-triangle-top',
        'glyphicon-superscript',
        'glyphicon-subscript',
        'glyphicon-menu-left',
        'glyphicon-menu-right',
        'glyphicon-menu-down',
        'glyphicon-menu-up',
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
            player.text(Number(player.text()) + 10);
        }
        else {
            let player = $('#player2Score');
            console.log(`Player 2 Score:${player.text()}`);
            player.text(Number(player.text()) + 10);
        }
    }

    function resetUserScore() {
        $('#player1').removeClass('label-danger').addClass('label-success');
        $('#player2').removeClass('label-success').addClass('label-danger');
        $('#player1Score,#player2Score').text('0');
    }

    function resetVariables() {
        playerOneTurn = true;
        inTurn = false;
        firstGlyph = 0;
        secondGlyph = 0;
    }

    function resetGame() {
        $('section#gameGame').children('div.container').children().remove();
        $('#gameAlert').removeClass('alert-success alert-warning alert-danger').addClass('alert-info');
        $('#gameAlert').text(`Hello! Match the Glyphs to win!`);
        resetUserScore();
        resetVariables();
        createRows(numOfRows);
        // createRow();
    }

    function checkEndGame() {
        let player1Score = Number($('#player1Score').text());
        let player2Score = Number($('#player2Score').text());
        if (player1Score/10 + player2Score/10 >= (numOfCols * numOfRows) / 2) {
            if (player1Score > player2Score) {
                $('#gameAlert').text(`Good Game! Player 1 Wins!`);
                $('#gameAlert').removeClass('alert-info alert-warning alert-danger').addClass('alert-success');
                // alert(`Good Game! Player 1 Wins!`);
            }
            else if (player1Score < player2Score) {
                $('#gameAlert').text(`Good Game! Player 2 Wins!`);
                $('#gameAlert').removeClass('alert-info alert-warning alert-danger').addClass('alert-success');
                // alert(`Good Game! Player 2 Wins!`);
            }
            else {
                $('#gameAlert').text(`Good Game! Its a Tie!`);
                $('#gameAlert').removeClass('alert-info alert-success alert-danger').addClass('alert-warning');
                // alert(`Good Game! Its a Tie!`);
            }
            // resetGame();
        }
        console.log(player1Score, player2Score);
        // $('span.glyphicon-eye-open').each((index, element) => {
        //     // console.log(index, $(element).data('behind'));
        // });
    }

    $('#newGameButton').on('click', function () {
        console.log("New Game");
        resetGame();

    });

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