/**
 * Created by Alonski on 6/7/2016.
 */

"use strict";

var life = function (gen0) {
    var newgen = [];
    var on = 1;
    var off = 0;

    var returnLiveFriends = function (cells) {
        var liveFriends = 0;
        if (i > 0) {
            if (gen0[i - 1][j] === on) {
                liveFriends++;
            }
            if (j > 0) {
                if (gen0[i - 1][j - 1] === on) {
                    liveFriends++;
                }
            }
            if (j < gen0[i].length) {
                if (gen0[i - 1][j + 1] === on) {
                    liveFriends++;
                }
            }
        }
        if (i < gen0.length - 1) {
            if (gen0[i + 1][j] === on) {
                liveFriends++;
            }
            if (j > 0) {
                if (gen0[i + 1][j - 1] === on) {
                    liveFriends++;
                }
            }
            if (j < gen0[i].length) {
                if (gen0[i + 1][j + 1] === on) {
                    liveFriends++;
                }
            }
        }
        if (j > 0) {
            if (gen0[i][j - 1] === on) {
                liveFriends++;
            }
        }
        if (j < gen0[i].length) {
            if (gen0[i][j + 1] === on) {
                liveFriends++;
            }
        }
        return liveFriends;
    };

    for (var i = 0; i < gen0.length; i++) {
        newgen.push([]);
        for (var j = 0; j < gen0[i].length; j++) {
            var liveFriends = returnLiveFriends(gen0);
            if (gen0[i][j] === on) {
                if (liveFriends < 2 || liveFriends > 4) {
                    newgen[i].push(off);
                }
                else {
                    newgen[i].push(on);
                }
            }
            else {
                if (liveFriends === 3) {
                    newgen[i].push(on);
                }
                else {
                    newgen[i].push(off);
                }
            }
        }
    }
    return newgen;
    // ------------------------
};

var gen0 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var gen1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var result = life(gen0);
console.log("Original:");
gen1.forEach(function (row) {
    console.log(row);
});
console.log("New:");
result.forEach(function (row) {
    console.log(row);
});

for (var i = 0; i < 10; i++) {
    console.log("Gen:", i);
    result.forEach(function (row, j) {
        console.log(row, j);
    });
}

console.assert(gen1.length === result.length);
for (var y = 0; y < gen1.length; y++) {
    console.assert(gen1[y].length === result[y].length);
    for (var x = 0; x < gen1[y].length; x++) {
        console.assert(gen1[y][x] === result[y][x]);
    }
}
console.log("OK");