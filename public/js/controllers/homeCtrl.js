app.controller('homeCtrl', function($scope, articleFactory){
  $scope.articles = [];

  $scope.getArticles = function(){
    articleFactory.getArticles()
      .then(function(response){
        $scope.articles = response.data;
        $scope.articles.sort(compare);
        console.log($scope.articles[1]);
      }, function(error){
        console.log(error);
      });
  };
  $scope.getArticles();

  function compare(a,b) {
    if (a.created_at < b.created_at)
      return 1;
    if (a.created_at > b.created_at)
      return -1;
    return 0;
  };

});
