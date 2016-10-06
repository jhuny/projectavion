(function() {
var app=angular.module("example.app.editor",['prueba1.api']);
app.controller('control', [
    '$scope', 'Proyecto', function($scope, Proyecto) {
    alert("entro");
      $scope.newPost = new Proyecto();
      return $scope.save = function() {
        return $scope.newPost.$save().then(function(result) {
          return $scope.posts.push(result);
        }).then(function() {
          return $scope.newPost = new Proyecto();
        }).then(function() {
          return $scope.errors = null;
        }, function(rejection) {
          return $scope.errors = rejection.data;
        });
      };
    }
  ]);

}).call(this);