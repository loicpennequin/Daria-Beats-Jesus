app.controller('adminMediasCtrl', function($scope, mediasFactory, $timeout){
  $scope.images = [];
  $scope.uploadSuccess = false;
  $scope.uploadError = false;
  $scope.errorMessage = "";

  $scope.uploadFile = function(){
    mediasFactory.uploadFile($scope.myFile)
      .then(function(response){
        if (response.message == "invalid file format"){
          $scope.errorMessage = "Invalid file format. Accepted formats are .jpg, .jpeg, .png and .gif";
          $scope.uploadError = true;
          $timeout(function(){ $scope.uploadError = false}, 3000)
        }else {
          $scope.getImages();
          $scope.uploadSuccess = true;
          $timeout(function(){ $scope.uploadSuccess = false}, 3000)
        }
      }, function(error){
        $scope.errorMessage = "An error has occured. Please try again later.";
        $scope.uploadError = true;
        $timeout(function(){ $scope.uploadError = false}, 3000)
      });
  };

  $scope.getImages = function(){
    mediasFactory.getImages()
      .then(function(response){
        $scope.images = response.data
      }, function(error){
        console.log(error);
      })
  }
  $scope.getImages();

  $scope.deleteImage = function(image){
    mediasFactory.deleteImage(image.id)
      .then(function(response){
        $scope.getImages();
      }, function(error){
        console.log(error);
      })
  };
});
