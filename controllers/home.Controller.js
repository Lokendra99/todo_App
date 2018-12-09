(function () {
  'use strict';

  wigzoApp.controller('homeController',['$scope','feedService','storageService',function($scope,
                     feedService,storageService){

    //watch function to check whther the user has logged in and updating his id to navbar
     $scope.$watch(function() {
      return storageService.get('key');
      }, function(newValue, oldValue) {
        if(newValue!==null){
        $scope.userId=newValue;
        }
        else if(newValue===null || oldValue===null || newValue==undefined || oldValue==undefined){
          $scope.userId=newValue;
        }
      });
  }]);
})();
