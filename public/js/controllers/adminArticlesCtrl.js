app.controller('adminArticlesCtrl', function($scope, categoryFactory, articleFactory, tagFactory, $timeout){
  $scope.articles = [];
  $scope.newArticle = {};
  $scope.tags = [];
  $scope.alertSuccess = false;
  $scope.alertError = false;
  $scope.articleDeleteConfirm = false;
  $scope.selectedArticle = {};
  $scope.articleComments = [];
  $scope.seeComments = false;
  $scope.seeCommentsModal = false;
  $scope.successMessage="";
  $scope.errorMessage ="";
  $scope.tinymceOptions = {
    plugins : 'advlist autolink link image lists charmap preview colorpicker textcolor',
    toolbar: "bold italic underline strikethrough forecolor backcolor alignleft aligncenter alignright alignjustify link image styleselect formatselect fontsizeselect",
    theme : 'modern'
  };

  $scope.closeAlert = function(){
    $scope.alertSuccess = false;
    $scope.alertError = false;
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
    if ($scope.newArticle.cover == false){
      $scope.newArticle.cover = "";
    }
    articleFactory.addArticle($scope.newArticle)
    .then(function(response){
      console.log('article added');
      $scope.newArticle = {};
      $scope.new_article_form.$setPristine();
      $scope.getArticles();
      $scope.alertSuccess = true;
      $scope.successMessage = "Message successfully added."
      $timeout(function(){$scope.alertSuccess = false;}, 3000)
    }, function(error){
      console.log(error);
      $scope.alertError = true;
      $scope.errorMessage = "An error has occured while posting the article. Please try again later."
      $timeout(function(){$scope.alertError = false;}, 3000)
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
        $scope.alertSuccess = true;
        $scope.successMessage = "Message successfully deleted."
        $timeout(function(){$scope.alertSuccess = false;}, 3000)
      }, function(error){
        $scope.alertError = true;
        $scope.errorMessage = "An error has occured while deleting the article. Please try again later."
        $timeout(function(){$scope.alertError = false;}, 3000)
      });
  };

  $scope.seeComments = function(article){
    $scope.articleComments = article.comments;
    $scope.seeCommentsModal = true;
  }

});
