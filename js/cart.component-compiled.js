angular.module('store').component('cart', {
    templateUrl: 'cart.component.html',
    bindings: {
        items: '='
    },
    controller: function CartController() {
        this.total = () => this.items.reduce((prev, curr) => prev + curr.product.price * curr.amount, 0);
        this.checkDelete = (item, action) => {
            if (action === 'click' || item.amount === 0) {
                console.log('Clicked');
                this.items.splice(this.items.indexOf(item), 1);
            }
        };
    }
});

//# sourceMappingURL=cart.component-compiled.js.map