angular.module("app").controller("FlagController", function ($scope, $routeParams, FlagService) {
  $scope.flag = null;

  FlagService.find($routeParams.id).then(function(flag) {
    $scope.flag = flag;
  }, function (err) {
    $scope.error = "Something went wrong";
  });
});

