app.controller('adminCommentsCtrl', function($scope, commentFactory, categoryFactory, articleFactory, tagFactory, $timeout){
  $scope.comments = [];
  $scope.unreadComments = [];
  $scope.selectedComment = {};
  $scope.commentDeleteConfirm = false;
  $scope.commentError = false;



  // COMmENTS

  $scope.getComments = function(){
    commentFactory.getComments()
      .then(function(response){
        $scope.comments = response.data;
        $scope.unreadComments = [];
        sortUnread($scope.comments);
      }, function(error){
        console.log(error);
      });
  };
  $scope.getComments();

  function sortUnread(comments){
    comments.forEach(function(comment, key){
      if (comment.is_read == 0){
        $scope.unreadComments.push(comment)
      };
    });
  };

  $scope.markAsRead = function(comment){
    commentFactory.markAsRead(comment.id)
      .then(function(response){
        $scope.getComments();
      }, function(error){
        console.log(error);
      });
  };

  $scope.deleteComment = function(){
    commentFactory.deleteComment($scope.selectedComment.id)
      .then(function(response){
        $scope.getComments();
        $scope.selectedArticle = {};
      }, function(error){
        console.log(error);
        $scope.commentError = true;
        $timeout(function(){$scope.commentError = false;}, 3000)
      });
  };

  $scope.confirmDeletion = function(comment){
    $scope.commentDeleteConfirm = true;
    $scope.selectedComment = comment;
  };

});
