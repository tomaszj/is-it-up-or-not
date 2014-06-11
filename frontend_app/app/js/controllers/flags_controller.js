angular.module("app").controller("FlagsController", function ($scope, $routeParams, FlagService) {
  $scope.flags = [];

  FlagService.findAll().then(function (flags) {
    $scope.flags = flags;
  }, function(err) {
    $scope.error = "Something went wrong";
  });
});

