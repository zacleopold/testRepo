(function(){
    var app = angular.module('store', [])

    app.controller('StoreController', function(){
        this.products = gems
    })

    var gems = [

        {
            name: 'Dodecaherdron This is also A Test of the Emergecy Broadcast System',
            price: 2.95,
            description : 'this is a description #1',
            canPurchase: true,

        },

        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description : 'this is a description #2',
            canPurchase: false,

        },

        {
            name: 'BadAss Gem',
            price: 10.00,
            description : 'this is a description #3' ,
            canPurchase: true,
            
        }


    ]




})()
