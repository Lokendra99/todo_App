// firing up AJAX call in service depending on type of data recieved
wigzoApp.service('feedService',function($http){
  var self=this;
  var baseUrl='https://jsonplaceholder.typicode.com/todos';

  self.getUserTasks=function(userId){
    var finalUrl=baseUrl+'?userId='+userId;
    return $http.get(finalUrl);
  }
  self.getUserTaskById=function(taskId){
    var finalUrl=baseUrl+'/'+taskId;
    return $http.get(finalUrl);
  }
  self.addUserTask=function(data){
    return $http.post(baseUrl,data);
  }
  self.updateUserTask=function(dataToUpdate){
    var finalUrl=baseUrl+'/'+dataToUpdate.id;
    return $http.put(finalUrl,dataToUpdate);
  }
  self.deleteUserTask=function(taskId){
    var finalUrl=baseUrl+'/'+taskId;
    return $http.delete(finalUrl);
  }
})
