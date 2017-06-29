app.controller('adminCtrl', function($scope, categoryFactory, articleFactory, tagFactory){
  $scope.categories = [];
  $scope.articles = [];
  $scope.comments = [];
  $scope.tags = [];
  $scope.selectedCategories = [];
  $scope.selectedTags = [];

  // Handling active section display
  $scope.activeSection = "dashboard";
  $scope.showSection = function(section){
    $scope.activeSection = section
  }

  // item selection

  $scope.selectItem = function(item, array){
    function belongs(element){
      return element == item
    }
    if (!array.some(belongs)){
      array.push(item)
    }else{
      var i = array.indexOf(item);
      array.splice(i, 1)
    }
  }

  $scope.isSelected = function(item, array){
    return array.some(function(el){ return el == item})
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
        $scope.getCategories();
        $scope.$broadcast('close');
      }, function(error){
        console.log(error);
      });
  };

  $scope.deleteCategories = function(){
    $scope.selectedCategories.forEach(function(category, key){
      categoryFactory.deleteCategory(category.id)
        .then(function(response){
          $scope.getCategories();
          $scope.selectedCategories = [];;
        }, function(error){
          console.log(error);
        });
      })
  };


  // ARTICLES

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

  $scope.addTag = function(){
    this.newTag.slug = this.newTag.name.replace (" ", "-");
    tagFactory.addTag(this.newTag)
      .then(function(response){
        $scope.getTags();
        $scope.$broadcast('close');
      }, function(error){
        console.log(error);
      });
  };

});
