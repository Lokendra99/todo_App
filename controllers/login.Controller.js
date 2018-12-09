(function () {
  'use strict';

  wigzoApp.controller('loginController',['$scope','$location','Flash','storageService',
                      function($scope,$location,Flash,storageService){

    $scope.getUser=function(userId){
      if(userId===undefined){
        var message = 'Kindly mention your User ID';
        Flash.create('danger', message);
        $location.path('/');
      }
      else{
        // Save session data to storageService on successfull response from $http service.
        storageService.save('key', userId);
        $scope.userId=storageService.get('key');
        $location.path('/user/'+$scope.userId);
      }
    };
  }]);

})();
