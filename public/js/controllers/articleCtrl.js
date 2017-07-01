app.controller('articleCtrl', function($scope, categoryFactory, articleFactory, tagFactory, $routeParams, $sce){
  $scope.article = [];
  $scope.categories = [];
  $scope.articleContent;

  //ARTICLE

  $scope.getArticle = function(){
    articleFactory.getArticle($routeParams.slug)
      .then(function(response){
        $scope.article = response.data
        $scope.articleContent = $sce.trustAsHtml($scope.article.html);
      }, function(error){
        console.log(error);
      });
  };
  $scope.getArticle();
  
});
