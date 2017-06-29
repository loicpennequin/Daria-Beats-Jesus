app.factory('categoryFactory', function($http, $q){
  return{
    getCategories : function(){
      var deferred = $q.defer();
      $http.get('http://localhost:8080/api/categories')
        .then(function(response){
          deferred.resolve(response.data)
        }, function(error){
          deferred.reject(error)
        });
      return deferred.promise;
    },
    addCategory : function(data){
      var deferred = $q.defer();
      $http.post('http://localhost:8080/api/categories', data)
        .then(function(response){
          deferred.resolve(response.data)
        }, function(error){
          deferred.reject(error)
        });
      return deferred.promise;
    },
    deleteCategory : function(id){
      var deferred = $q.defer();
      $http.delete('http://localhost:8080/api/categories/' + id)
        .then(function(response){
          deferred.resolve(response.data)
        }, function(error){
          deferred.reject(error)
        });
      return deferred.promise;
    }
  };
});
