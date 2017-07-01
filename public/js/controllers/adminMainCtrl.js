app.controller('adminMainCtrl', function($scope, categoryFactory, articleFactory, tagFactory){

  $scope.activeSection = "dashboard";
  $scope.showSection = function(section){
    $scope.activeSection = section
  };

});
