app.controller('adminArticlesCtrl', function($scope, categoryFactory, articleFactory, tagFactory, $timeout){
  $scope.articles = [];
  $scope.newArticle = {};
  $scope.tags = [];
  $scope.articleAdded = false;
  $scope.articleError = false;
  $scope.articleDeleteConfirm = false;
  $scope.selectedArticle = {};
  $scope.articleComments = [];
  $scope.seeComments = false;
  $scope.seeCommentsModal = false;
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
    if ($scope.newArticle.tags){
      $scope.newArticle.tagsArray = $scope.newArticle.tags.split(",")
    }
    articleFactory.addArticle($scope.newArticle)
    .then(function(response){
      $scope.newArticle = {};
      $scope.new_article_form.$setPristine();
      $scope.getArticles();
      $scope.articleAdded = true;
      $timeout(function(){$scope.articleAdded = false;}, 3000)
    }, function(error){
      $scope.articleError = true;
      $timeout(function(){$scope.articleError = false;}, 3000)
    });
  };

  $scope.confirmDeletion = function(article){
    $scope.articleDeleteConfirm = true;
    $scope.selectedArticle = article;
  };

  $scope.deleteArticle = function(){
    articleFactory.deleteArticle($scope.selectedArticle.id)
      .then(function(response){
        $scope.getArticles();
        $scope.selectedArticle = {};
      }, function(error){
        console.log(error);
      });
  };

  $scope.seeComments = function(article){
    $scope.articleComments = article.comments;
    $scope.seeCommentsModal = true;
  }

});
