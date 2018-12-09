(function () {
  'use strict';

  wigzoApp.controller('userController',['$scope','$location','$routeParams','Flash',
                      'feedService','storageService',function($scope,
                       $location,$routeParams,Flash,feedService,storageService){


    var message = 'You have successfully logged in ';
    Flash.create('danger', message);
    // Get saved session data from storageService on page reload
    $scope.sessionData = storageService.get('key');
    $scope.userId=$scope.sessionData;

    if($scope.sessionData==$routeParams.userId){
      feedService.getUserTasks($scope.userId)
      .then(
        function(result){
          $scope.tasks=result.data;
      }, function(error) {
        console.error(error)
      });
    }
    else{
      $location.path('/error');
    }

    $scope.addNewTask = function(){
      if(!$scope.taskTitle || !$scope.taskStatus){
        var message = 'Kindly fill all fields';
        Flash.create('success', message);
      }
      else{
        $scope.taskToAdd={
          userId:$scope.sessionData,
          title:$scope.taskTitle,
          completed:$scope.taskStatus
        }
          $scope.taskTitle = '';
          $scope.taskStatus='';

        feedService.addUserTask($scope.taskToAdd)
        .then(
          function(result){
            var message = 'You have successfully created a new Task with Task ID:'+result.data.id;
            Flash.create('success', message);
            $scope.newTaskAdded=result.data;
        }, function(error) {
          console.error(error)
        });
      }
    };

    $scope.deleteTask=function(taskId){
      feedService.deleteUserTask(taskId)
      .then(
        function(result){
          var message = 'You have successfully deleted a Task with Task Id:'+taskId;
          Flash.create('success', message);
          $scope.deletedTask=taskId;
      }, function(error) {
        console.error(error)
      });
    }
    }]);
})();
