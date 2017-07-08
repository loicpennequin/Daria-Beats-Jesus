app.controller('globalCtrl', function($scope){
  $scope.isBackOffice = false;

  $scope.$on('BackOffice', function(){
    $scope.isBackOffice = true;
  })

  $scope.$on('FrontOffice', function(){
    $scope.isBackOffice = false;
  })
});
