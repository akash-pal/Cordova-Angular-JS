//option 1
/*app.controller('CustomersController',function ($scope){
                console.log("hi");
                $scope.sortBy = 'name';
                $scope.reverse = false;

                $scope.customers=[
                   {joined:'2000-12-02',name:'John',city:'Chandler',orderTotal:9.9956},
                   {joined:'1965-01-25',name:'Zed',city:'Las vegas',orderTotal:19.99},
                   {joined:'1944-06-15',name:'Tina',city:'New York',orderTotal:44.99},
                   {joined:'1995-03-28',name:'Dave',city:'Seattle',orderTotal:101.5}];

                $scope.doSort = function(propName){
                    $scope.sortBy = propName;
                    $scope.reverse = !$scope.reverse;
                };
});*/

//option 2

/*(function(){

    angular.module('customersApp')
        .controller('CustomersController',function ($scope)
        {
                    console.log("hi");
                    $scope.sortBy = 'name';
                    $scope.reverse = false;

                    $scope.customers=[
                       {joined:'2000-12-02',name:'John',city:'Chandler',orderTotal:9.9956},
                       {joined:'1965-01-25',name:'Zed',city:'Las vegas',orderTotal:19.99},
                       {joined:'1944-06-15',name:'Tina',city:'New York',orderTotal:44.99},
                       {joined:'1995-03-28',name:'Dave',city:'Seattle',orderTotal:101.5}];

                    $scope.doSort = function(propName)
                    {
                        $scope.sortBy = propName;
                        $scope.reverse = !$scope.reverse;
                    };
        });

}()); */   

//option 3

(function(){

        console.log("CustomersController");
        var CustomersController = function ($scope,$log,customersFactory,appSettings)
        {
                    $scope.sortBy = 'name';
                    $scope.reverse = false;
                    $scope.customers = [];
                    $scope.appSettings = appSettings;

                    function init(){
                        //sunchronous call
                        $scope.customers=customersFactory.getCustomers();
                        
                        /*
                        //asynchronous call
                        customersFactory.getCustomers()
                            .success(function(customers){
                            $log.log(customers);
                            $scope.customers = customers;
                            
                        })
                            .error(function(data,status,headers,config){
                            //handle error
                            $log.log(data.error +" "+status);
                        });*/
                    }
            
                    init();

                    $scope.doSort = function(propName)
                    {
                        $scope.sortBy = propName;
                        $scope.reverse = !$scope.reverse;
                    };
            
                    $scope.deleteCustomer = function(customerId)
                    {
                        customersFactory.deleteCustomer(customerId)
                            .success(function(status){
                            if(status){
                                for(var i=0;i<$scope.customers;i++){
                                    if($scope.customers[i].id === customerId){
                                        $scope.customers[i].splice(i,1);
                                        break;
                                    }
                                }
                            }
                            else{
                                $window.alert('unable to delete customer');
                            }
                        })
                            .error(function(data,status,headers,config){
                            
                        });
                    }
        };

        //to prevent minification of $scope 
        CustomersController.$inject=['$scope','$log','customersFactory','appSettings'];

    //getter method
    angular.module('customersApp').controller('CustomersController',CustomersController);

}()); 