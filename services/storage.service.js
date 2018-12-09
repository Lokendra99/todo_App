wigzoApp.factory('storageService', ['$rootScope', function($rootScope) {
  return {
      get: function(key) {
          return sessionStorage.getItem(key);
      },
      save: function(key, data) {
          sessionStorage.setItem(key, data);
      },
      remove:function(key){
         sessionStorage.removeItem(key);
      }
  };
}]);
