(function(){
    var app = angular.module('store', [])

    app.controller('StoreController', function(){
        this.products = gems
    })

    var gems = [

        {
            name: 'Dodecaherdron',
            price: 2.95,
            description : 'this is a description',
            canPurchase: true,

        },

        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description : 'this is a description',
            canPurchase: false,
            
        }


    ]




})()
