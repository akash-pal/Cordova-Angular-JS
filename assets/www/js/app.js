(function(){
	//setter method
	var app= angular.module('customersApp',['ngRoute','ngAnimate']);
    
    app.config(function($routeProvider){
       $routeProvider
          .when('/',{
           controller:'CustomersController',
           templateUrl:'partials/customers.html'
       })
          .when('/orders/:customerId',{
           controller:'OrdersController',
           templateUrl:'partials/orders.html'
       })
        .when('/orders',{
           controller:'AllOrdersController',
           templateUrl:'partials/allOrders.html'
       })
       .otherwise({redirectTo:'/'});
        
        
    });
}());

/*========== UI.router========*/

