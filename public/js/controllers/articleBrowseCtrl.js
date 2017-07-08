app.controller('articleBrowseCtrl', function($scope, categoryFactory, articleFactory, tagFactory, $routeParams, $routeParams, _){
  $scope.sortType = $routeParams.sort;
  $scope.items = [];

  if ($scope.sortType == "categories"){
    categoryFactory.getCategories()
      .then(function(response){
          $scope.items = response.data;
      }, function(error){
          console.log(error);
      });
  } else if ($scope.sortType == "tags"){
    tagFactory.getTags()
      .then(function(response){
          $scope.items = response.data;
      }, function(error){
          console.log(error);
      });
  } else if ($scope.sortType == 'date'){
    articleFactory.getArticles()
      .then(function(response){
        let articles = response.data;
        articles.forEach(function(article, index){
          let month = new Date(article.created_at).getMonth(),
              year = new Date(article.created_at).getFullYear(),
              date = {
                date : new Date(year, month),
                articles : [],
                test : "test"
              };
          if (!$scope.items.some(function(el){ return el.date.getTime() == date.date.getTime()}) ){
            date.articles.push(article);
            $scope.items.push(date)
          } else {
            let key = _.findKey($scope.items, { 'date': date.date });
            $scope.items[key].articles.push(article)
          }
        });
      }, function(error){
          console.log(error);
      });
  };


});
