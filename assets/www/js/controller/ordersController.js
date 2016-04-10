
(function(){

        var OrdersController = function ($scope,$routeParams,customersFactory)
        {
            
            console.log("ordersController");
            var customerId = $routeParams.customerId;
            $scope.customer = null;
            
            function init(){
                //search the customers for the customerId----synchronous call
                $scope.customer = customersFactory.getCustomer(customerId);
                
                
                /*//asynchronous call
                customersFactory.getCustomer(customerId)
                    .success(function(customer){
                   $scope.customer = customer;
                })
                    .error(function(data,status,headers,config){
                    //handle error
                });*/
                
            }
            init();
        };

        //to prevent minification of $scope and $routeParams
        OrdersController.$inject=['$scope','$routeParams','customersFactory'];

    //getter method
    angular.module('customersApp').controller('OrdersController',OrdersController);

}()); 