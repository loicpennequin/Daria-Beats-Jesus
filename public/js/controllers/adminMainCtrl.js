app.controller('adminMainCtrl', function($scope, categoryFactory, articleFactory, tagFactory, commentFactory){
  $scope.$emit('BackOffice')
  $scope.unread = [];
  $scope.activeSection = "dashboard";

  $scope.showSection = function(section){
    $scope.activeSection = section
  };

  $scope.getUnreadComments = function(){
    commentFactory.getComments()
      .then(function(response){
        $scope.unread = [];
        response.data.forEach(function(comment, key){
          if (comment.is_read == 0){
            $scope.unread.push(comment)
          };
        });
      });
  };
  $scope.getUnreadComments();

  $scope.$on('updateUnread', function(){
    $scope.getUnreadComments();
  });
});
