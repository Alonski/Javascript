/**
 * Created by Alonski on 6/14/2016.
 */
'use strict';

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    area() {
        return this.x * this.y;
    }
}

class ColoredPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
}

let p1 = new Point(5, 6);
console.log(p1.area(), p1.x);

let p2 = new ColoredPoint(99, 6, 'red');
console.log(p2.area(), p2.x, p2.color);

// Polyfill
if(!Array.prototype.of) {
    Array.prototype.of = function() {

    };
}

// let Point = function Point(w, h) {
//     this.w = w;
//     this.h = h;
//     return this;
// };
//
// Point.prototype.area = function () {
//     return this.w * this.h;
// };
//
// let p1 = new Point(10, 20);
// console.log(p1.area());
//
// let ColoredPoint = function ColoredPoint(w, h, color) {
//     Point.call(this, w, h);
//     this.color = color;
//     return this;
// };
//
// let p3 = new ColoredPoint(51, 20, 'blue');
// console.log(p3.area(), p3.color);