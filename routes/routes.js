wigzoApp.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'views/login.html',
    controller:'loginController'
  })
  .when('/user/:userId',{
    templateUrl:'views/user.html',
    controller:'userController'
  })
  .when('/editTask/:userId/:taskId',{
    templateUrl:'views/editTask.html',
    controller:'editTaskController'
  })
  .when('/logout',{
    templateUrl:'views/login.html',
    controller:'logOutController'
  })
  .when('/error',{
    template : "<h1>Sorry</h1><p>You are not allowed to access other user data</p>"
  })
  .otherwise({
        template : "<h1>Sorry</h1><p>The page or search is not present at the moment.</p>"
    });
})
