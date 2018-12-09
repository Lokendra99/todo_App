(function () {
  'use strict';

  wigzoApp.controller('logOutController',['$scope','$location','Flash','storageService',
                      function($scope,$location,Flash,storageService){

    var message = 'You have successfully Loggged Out ';
    Flash.create('danger', message);
    $location.path('/')
    storageService.remove('key');
  }]);
})();
