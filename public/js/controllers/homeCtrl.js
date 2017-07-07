app.controller('homeCtrl', function($scope, articleFactory, $timeout){
  $scope.articles = [];
  $scope.articlesShown = 4;

  $scope.getArticles = function(){
    articleFactory.getArticles()
      .then(function(response){
        $scope.articles = response.data;
        $scope.articles.sort(compare);
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

  $scope.showMoreArticles = function(){
    if ($scope.articlesShown < 7){
      $scope.articlesShown++;
    }
  };
});
