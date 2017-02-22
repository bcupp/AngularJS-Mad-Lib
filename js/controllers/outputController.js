var app = angular.module('myModule');

app.controller('outputController', function($scope, myFactory){
  $scope.userInput = myFactory.getWords();
});
