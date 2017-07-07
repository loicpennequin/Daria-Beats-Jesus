app.controller('articleCtrl', function($scope, categoryFactory, articleFactory, tagFactory, $routeParams, $sce){
  $scope.article = [];
  $scope.categories = [];
  $scope.articleContent;
  $scope.articles = [];


  //ARTICLE

  $scope.getArticle = function(){
    articleFactory.getArticle($routeParams.slug)
      .then(function(response){
        $scope.articleContent = $sce.trustAsHtml(response.data.html);
        angular.forEach($scope.articles, function(value, key){
            if (value.id == response.data.id){
                $scope.article = value;
            };
        });
        let index = $scope.articles.indexOf($scope.article);
        if (index > 0){
          $scope.prev = $scope.articles[index-1].slug;
        }
        if (index < $scope.articles.length-1 ){
          $scope.next = $scope.articles[index+1].slug
        }
      }, function(error){
        console.log(error);
      });
  };

  $scope.getArticles = function(){
    articleFactory.getArticles()
      .then(function(response){
        $scope.articles = response.data;
        $scope.articles.sort(compare);
        $scope.getArticle();
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
