/* global angular */

(function(){

    var app = angular.module('userProfiles');

    app.controller('MainController', function($scope, mainService) {

      $scope.getUsers = function() {
            mainService.getUsers()
                    .then(function(response){
                        $scope.users = response.data.data;  //will now wait for asynchronous activity before defining $scope.users.
                        //the response.data has a lot of information we may not need, response.data.data is a particular object where the information
                        //we want is stored. 
            });
      };


      $scope.getUsers();

    });

}());