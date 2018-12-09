(function () {
  'use strict';

  wigzoApp.controller('editTaskController',['$scope','$location','$routeParams',
                      'Flash','feedService','storageService',function($scope,
                       $location,$routeParams,Flash,feedService,storageService){

    $scope.userId=storageService.get('key');
    $scope.taskId=$routeParams.taskId;
    $scope.taskUpdate=false;

    if($scope.userId==$routeParams.userId){
      feedService.getUserTaskById($scope.taskId)
      .then(
        function(result){
          $scope.task=result.data;
      }, function(error) {
        console.error(error)
      });
    }
    else{
      $location.path('/error');
    }
    $scope.editTask=function(taskId){
      $scope.dataToUpdate={
        userId:$scope.userId,
        id:$scope.taskId,
        title:$scope.taskTitle|| $scope.task.title,
        completed:$scope.taskStatus || $scope.task.completed,
      }
      feedService.updateUserTask($scope.dataToUpdate)
      .then(
        function(result){
          var message = 'You have successfully updated a Task with Task ID:'+result.data.id;
          Flash.create('success', message);
          $scope.taskUpdate=true;
          $scope.upatedTask=result.data;
      }, function(error) {
        console.error(error)
      });
    }
  }])
})();
