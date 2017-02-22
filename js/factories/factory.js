var app = angular.module('myModule');

app.factory('myFactory', function(){

  var wordsObj = {}

  return {
    sendWords: function(words) {
      console.log(words)
      wordsObj = words;
    },

    getWords: function() {
     return wordsObj;
   }
  }

});
