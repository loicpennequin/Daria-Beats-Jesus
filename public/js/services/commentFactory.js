app.factory('commentFactory', function($http, $q){
  return{
    getComments : function(){
      var deferred = $q.defer();
      $http.get('http://localhost:8080/api/comments')
        .then(function(response){
          deferred.resolve(response.data)
        }, function(error){
          deferred.reject(error)
        });
      return deferred.promise;
    },
    markAsRead : function(id){
      var deferred = $q.defer();
      $http.put('http://localhost:8080/api/comments/' + id + '/read')
        .then(function(response){
          deferred.resolve(response.data)
        }, function(error){
          deferred.reject(error)
        });
      return deferred.promise;
    },
    deleteComment : function(id){
      var deferred = $q.defer();
      $http.delete('http://localhost:8080/api/comments/' + id)
        .then(function(response){
          deferred.resolve(response.data)
        }, function(error){
          deferred.reject(error)
        });
      return deferred.promise;
    }
  }
});
