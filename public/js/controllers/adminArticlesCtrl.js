app.controller('adminArticlesCtrl', function($scope, categoryFactory, articleFactory, tagFactory, $timeout){
  $scope.articles = [];
  $scope.newArticle = {};
  $scope.tags = [];
  $scope.articleAdded = false;
  $scope.tinymceOptions = {
    plugins : 'advlist autolink link image lists charmap preview colorpicker textcolor',
    toolbar: "bold italic underline strikethrough forecolor backcolor alignleft aligncenter alignright alignjustify link image styleselect formatselect fontsizeselect",
    theme : 'modern'
  };
  $scope.closeAlert = function(){
    $scope.articleAdded = false;
  }

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
    articleFactory.addArticle($scope.newArticle)
    .then(function(response){
      $scope.newArticle = {};
      $scope.new_article_form.$setPristine();
      $scope.getArticles();
      $scope.articleAdded = true;
      $timeout(function(){$scope.articleAdded = false;}, 3000)
    }, function(error){
      console.log(error);
    });
  };
});
