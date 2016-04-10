(function(){
    console.log("customersFactory");
    var customersFactory = function($http){
    
        
        var customers = [
                       {
                        id:1,
                        joined:'2000-12-02',
                        name:'John',
                        city:'Chandler',
                        orderTotal:9.9956,
                        orders:[
                            {
                                id:1,
                                product:'Shoes',
                                total:9.9956
                            }
                        ]
                       },
                       {
                        id:2,   
                        joined:'1965-01-25',
                        name:'Zed',
                        city:'Las vegas',
                        orderTotal:19.99,
                        orders:[
                            {
                                id:2,
                                product:'Baseball',
                                total:9.995
                            },
                            {
                                id:3,
                                product:'Bat',
                                total:9.995
                            }
                        ]
                       },
                       { 
                        id:3,
                        joined:'1944-06-15',
                        name:'Tina',
                        city:'New York',
                        orderTotal:44.99,
                        orders:[
                            {
                                id:4,
                                product:'Headphone',
                                total:44.99
                            }
                        ]
                       },
                       {
                        id:4,
                        joined:'1995-03-28',
                        name:'Dave',
                        city:'Seattle',
                        orderTotal:101.5,
                        orders:
                           [
                            {
                                id:5,
                                product:'Kindle',
                                total:101.5
                            }
                        ]    
                    }
                 ];
        
        
        var factory ={};
        factory.getCustomers= function(){
         	return customers; 
            console.log("get");
            /*return $http.get('/customers');*/
        };
        
        factory.getCustomer=function(customerId){
            for(var i=0,len=customers.length;i<len;i++){
                    if(customers[i].id === parseInt(customerId)){
                        return customers[i];        
                    }
                }
            return {};
            /*return $http.get('/customers/'+ customerId);*/
        };
        
        factory.getOrders = function(){
          /*return $http.get('/orders'); */
           var data=[];
               var orders;
               for(var i=0,len=customers.length;i<len;i++){
                   orders = customers[i].orders;
                   if(orders){
                       for(j=0;j<orders.length;j++){
                           console.log(orders[j]);
                           data.push(orders[j]);
                       }
                   }
               }
               return data;
        };
        
        factory.deleteCustomer=function(customerId){
            return $http.delete('/customers/'+ customerId);
        }
        
        return factory;
    };
    
    customersFactory.$inject=['$http'];
    angular.module('customersApp').factory('customersFactory',customersFactory);
    
    
}());