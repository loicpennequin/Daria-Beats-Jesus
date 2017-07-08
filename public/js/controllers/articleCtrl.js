app.controller('articleCtrl', function($scope, articleFactory, commentFactory, $routeParams, $sce){
  $scope.article = [];
  $scope.categories = [];
  $scope.articleContent;
  $scope.articles = [];
  $scope.newcomment= {};

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
          $scope.prev = $scope.articles[index-1];
        }
        if (index < $scope.articles.length-1 ){
          $scope.next = $scope.articles[index+1];
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


  //COMMENTS

  $scope.addComment = function(){
    $scope.newComment.article_id = $scope.article.id;
    commentFactory.addComment($scope.newComment)
      .then(function(response){
        $scope.getArticles();
        $scope.new_comment_form.$setPristine();
      }, function(error){
        console.log(error);
      });
  };

  $scope.commentIsAdmin = function(comment){
    let result;
    if (comment.author == 'Daria'){
      result = true;
    };
    return result;
  };


});
