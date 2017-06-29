app.directive("togglable", function () {
  var controller = function ($scope) {
      $scope.view = false;
      $scope.toggle = function(){
        $scope.view = !$scope.view
      };
      $scope.$on('close', function(event, data) {
        $scope.view = false;
      });
  }
    return {
        restrict: 'A',
        scope: true,
        controller: controller
    };
  });
