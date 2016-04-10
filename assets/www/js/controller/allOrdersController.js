(function(){
    
    console.log("AllOrdersController");
    var AllOrdersController= function($scope,$routeParams,customersFactory){
        $scope.orders = null ;
        $scope.ordersTotal = 0;
        $scope.totalType="";
        
        function init(){
            $scope.orders = customersFactory.getOrders();
            ordersTotal();
            /*customersFactory.getOrders()
                .success(function(orders){
                console.log(orders); 
                $scope.orders = orders;
                ordersTotal();
            })
                .error(function(data,status,headers,config){
                
            });*/
        }
        
        init();
        
        function ordersTotal(orders){
            var total = 0;
            for(var i=0;i<$scope.orders.length;i++){
                total += $scope.orders[i].total;
            }
            $scope.ordersTotal=total;
            $scope.totalType= ($scope.ordersTotal > 100)? 'success' : 'danger';
        }
        
        
    };
    angular.module('customersApp').controller('AllOrdersController',AllOrdersController);

}());