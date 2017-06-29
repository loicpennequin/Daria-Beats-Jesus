app.controller('articleCtrl', function($scope, categoryFactory, articleFactory, tagFactory, $routeParams){
  $scope.article = [];
  $scope.categories = [];


  //ARTICLE

  $scope.getArticle = function(){
    articleFactory.getArticle($routeParams.slug)
      .then(function(response){
        $scope.article = response.data
        console.log($scope.article);
      }, function(error){
        console.log(error);
      });
  };
  $scope.getArticle();
});
