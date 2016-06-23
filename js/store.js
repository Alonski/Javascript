/**
 * Created by Alonski on 6/23/2016.
 */
'use strict';

function indexBy(data, key = 'id') {
    const d = {};
    for (let p of data) {
        d[p.id] = p;
    }
    return d;
}

var m = angular.module('store', ['ngRoute']);

m.factory('inventory', function InventoryService($http) {
    return $http.get('js/inventory.json').then(resp => resp.data);
});

m.factory('inventoryById', function InventoryByIdService(inventory) {
    return inventory.then(indexBy);
});

m.config(function ($routeProvider) {
    console.log('Config Phase');
    $routeProvider.when('/', {
        templateUrl: 'directory.html'
    });

    $routeProvider.when('/inventory/:invId/', {
        templateUrl: 'inventory.html',
        controller: function InventoryController(inventory) {
            // console.log(inventory);
            this.inventory = inventory;
        },
        controllerAs: '$ctrl',
        resolve: {
            inventory: function ($route, inventoryById) {
                // console.log($route);
                return inventoryById.then(data => data[$route.current.params.invId]);
            }
        }
    });

    $routeProvider.when('/inventory/:invId/product/:prodId/', {
        templateUrl: 'product.html',
        controller: function ProductController(product, $routeParams) {
            console.log(product.inventory.filter(value => value.id === $routeParams.prodId)[0]);
            // console.log(product.inventory[1]);
            this.product = product.inventory.filter(value => value.id === $routeParams.prodId)[0];
            this.parent = $routeParams.invId;
        },
        controllerAs: '$ctrl',
        resolve: {
            product: function ($route, inventoryById) {
                // console.log($route);
                return inventoryById.then(data => data[$route.current.params.invId]);
            }
        }
    });

    // $routeProvider.when('/product/:prodId/', {
    //     templateUrl: 'product.html',
    //     controller: function ProductController(product) {
    //         this.product = product;
    //     },
    //     controllerAs: '$ctrl',
    //     resolve: {
    //         product: function ($route, productById) {
    //             console.log($route);
    //             return productById.then(data => data[$route.current.params.prodId]);
    //         }
    //     }
    // });
});

m.controller('StoreController', function StoreController(inventory) {
    this.loaded = false;
    this.loadingMessage = "Loading Inventory...";
    inventory.then(data => {
        this.inventory = data;
        this.loaded = true;
    }).catch(() => {
        this.loadingMessage = "Oops this shouldn't happen";
    });
    // this.inventory = [
    //     {id: '1', title: 'milk', price: 1.2},
    //     {id: '2', title: 'yellow cheese', price: 1},
    //     {id: '3', title: 'soft cheese', price: 2},
    // ];
    this.cart = [];
    // console.log(this);
    this.addToCart = product => {
        console.log(product.id, product.title);
        console.log(this.cart.filter(value => value.product.id === product.id).length);
        if (this.cart.filter(value => value.product.id === product.id).length === 0) {
            this.cart.push(
                {product: product, amount: 1}
            );
        }
        else {
            console.log(this.cart.filter(value => value.product.id === product.id));
            this.cart.filter(value => value.product.id === product.id)[0].amount++;
        }
        // console.log(product);
    };
});