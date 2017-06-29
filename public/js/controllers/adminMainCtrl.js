app.controller('adminMainCtrl', function($scope, categoryFactory, articleFactory, tagFactory){
  // Handling active section display
  $scope.activeSection = "dashboard";
  $scope.showSection = function(section){
    $scope.activeSection = section
  }
});
