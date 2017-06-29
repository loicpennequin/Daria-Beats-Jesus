app.factory('tagFactory', function($http, $q){
  return{
    getTags : function(){
      var deferred = $q.defer();
      $http.get('http://localhost:8080/api/tags')
        .then(function(response){
          deferred.resolve(response.data)
        }, function(error){
          deferred.reject(error)
        });
      return deferred.promise;
    },
    addTag : function(data){
      var deferred = $q.defer();
      $http.post('http://localhost:8080/api/tags', data)
        .then(function(response){
          deferred.resolve(response.data)
        }, function(error){
          deferred.reject(error)
        });
      return deferred.promise;
    },
    deleteTag : function(id){
      var deferred = $q.defer();
      $http.delete('http://localhost:8080/api/tags/' + id)
        .then(function(response){
          deferred.resolve(response.data)
        }, function(error){
          deferred.reject(error)
        });
      return deferred.promise;
    }
  };
});
