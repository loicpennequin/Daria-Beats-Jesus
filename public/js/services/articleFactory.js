app.factory('articleFactory', function($http, $q){
  return{
    getArticles : function(){
      var deferred = $q.defer();
      $http.get('http://localhost:8080/api/articles')
        .then(function(response){
          deferred.resolve(response.data)
        }, function(error){
          deferred.reject(error)
        });
      return deferred.promise;
    }
  };
});
