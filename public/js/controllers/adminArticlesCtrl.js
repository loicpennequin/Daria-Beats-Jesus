app.controller('adminArticlesCtrl', function($scope, categoryFactory, articleFactory, tagFactory){
  $scope.articles = [];

  // CATEGORIES

  $scope.getCategories = function(){
    categoryFactory.getCategories()
      .then(function(response){
        $scope.categories = response.data
      }, function(error){
        console.log(error);
      });
  };
  $scope.getCategories();


  // ARTICLE
  $scope.getArticles = function(){
    articleFactory.getArticles()
      .then(function(response){
        $scope.articles = response.data
      }, function(error){
        console.log(error);
      });
  };
  $scope.getArticles();

  $scope.addArticle = function(){
    articleFactory.addArticle(this.newArticle)
    .then(function(response){
      console.log('article ajouté');
    }, function(error){
      console.log(error);
    });
  };
});
