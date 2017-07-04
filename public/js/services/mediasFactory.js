app.factory('mediasFactory', function($http, $q){
  return{
    uploadFile : function(file){
      var deferred = $q.defer(),
          fd = new FormData();
      fd.append('file', file);
      $http.post('http://localhost:8080/api/images/upload', fd, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
      })
      .then(function(response){
        deferred.resolve(response.data)
      }, function(error){
        deferred.reject(error)
      });
      return deferred.promise;
    },
    getImages : function(){
      var deferred = $q.defer();
      $http.get('http://localhost:8080/api/images')
      .then(function(response){
        deferred.resolve(response.data)
      }, function(error){
        deferred.reject(error)
      });
      return deferred.promise;
    },
    deleteImage : function(id){
      var deferred = $q.defer();
      $http.delete('http://localhost:8080/api/images/' + id)
      .then(function(response){
        deferred.resolve(response.data)
      }, function(error){
        deferred.reject(error)
      });
      return deferred.promise;
    }
  };
});
