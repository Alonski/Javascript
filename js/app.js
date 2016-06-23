/**
 * Created by Alonski on 6/21/2016.
 */
"use strict";

console.log("App Starts");

var mymod = angular.module("mymodule", []);

mymod.run(function ($rootScope) {
    console.log("mymodule is running");
    $rootScope.rows = 9;
    $rootScope.cols = 9;
    // console.log($rootScope);
    // $rootScope.total = 0;
    // $rootScope.values = [];
    // $rootScope.showMessage = function(x) {
    //     console.log("Yo", x, $rootScope.total);
    // };
});

mymod.controller("MineSweepController", function MineSweepController($scope) {
    console.log("MineSweepController Loaded");
    $scope.board = [
        [{mine: true}, {mine: false}, {mine: true}, {mine: false}, {mine: true},],
        [{mine: true}, {mine: false}, {mine: true}, {mine: false}, {mine: true},],
        [{mine: true}, {mine: false}, {mine: true}, {mine: false}, {mine: true},],
        [{mine: true}, {mine: false}, {mine: true}, {mine: false}, {mine: true},],
        [{mine: true}, {mine: false}, {mine: true}, {mine: false}, {mine: true},],
    ];
    $scope.clicked = function clicked($event, $row, $col)
    {
        console.log("Clicked", $event.currentTarget, $row, $col);
        console.log($scope.board[$row][$col]);
    }
    ;
});

mymod.controller("CalcController", function CalcController($scope) {
    console.log("CalcController Loaded", $scope);
    $scope.x = 0;
    $scope.f = function () {
        console.log("test");
    };
});

mymod.controller("ShopListController", function CalcController() {
    console.log("ShopListController Loaded");
});

console.log("App Ends");