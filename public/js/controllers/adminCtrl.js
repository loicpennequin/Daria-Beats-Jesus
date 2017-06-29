app.controller('adminCtrl', function($scope, categoryFactory, articleFactory, tagFactory){
  $scope.categories = [];
  $scope.articles = [];
  $scope.comments = [];
  $scope.tags = [];

  // Handling active section display
  $scope.activeSection = "dashboard";
  $scope.showSection = function(section){
    $scope.activeSection = section
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

  $scope.addCategory = function(){
    categoryFactory.addCategory(this.newCategory)
      .then(function(response){
        $scope.getCategories()
      }, function(error){
        console.log(error);
      });
  };

  // POSTS

  $scope.getArticles = function(){
    articleFactory.getArticles()
      .then(function(response){
        $scope.articles = response.data
      }, function(error){
        console.log(error);
      });
  };
  $scope.getArticles();

  // TAGS
  $scope.getTags = function(){
    tagFactory.getTags()
      .then(function(response){
        $scope.tags = response.data
      }, function(error){
        console.log(error);
      });
  };
  $scope.getTags();

})
