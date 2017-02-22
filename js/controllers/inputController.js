var app = angular.module('myModule');


app.controller('inputController', function($scope, myFactory, $location){

  $scope.infoInput = function(words) {
    console.log(words);

    myFactory.sendWords(words);

    $location.path('/output');
  };

});
