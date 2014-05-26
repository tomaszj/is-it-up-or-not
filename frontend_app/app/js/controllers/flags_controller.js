angular.module("app").controller("FlagsController", function (flags, $scope, $routeParams, FlagResource) {
  $scope.flags = flags;
});

