app.controller('homeCtrl', function($scope){
  $scope.articles = [
    {title : "titre article 1", date : "23-06-2017", content : "lorem ipsum dolor sin amet machin truc content article 1"},
    {title : "titre article 2", date : "23-06-2017", content : "lorem ipsum dolor sin amet machin truc content article 2"},
    {title : "titre article 3", date : "23-06-2017", content : "lorem ipsum dolor sin amet machin truc content article 3"}
  ];
  $scope.post = ""
  $scope.setOutput = function(){
    $scope.output = $scope.post.replace(/(?:\r\n|\r|\n)/g, '<br/>')
  };

  $scope.addGras = function(){
    $scope.post += "<strong></strong>";
  }

  $scope.addlink = function(){
    $scope.post += "<a href=''></a>";
  }
  
})
