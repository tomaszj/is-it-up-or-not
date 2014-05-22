// with $resource
angular.module("app").controller("FlagsController", function ($scope, $routeParams, FlagResource) {

  if (angular.isDefined($routeParams.id)) {
    $scope.flag = FlagResource.get({id: $routeParams.id});
  } else {
    // because the stubbed endpoint returns an array of results, .query() is used
    // if the endpoint returned an object, you would use .get()
    $scope.flags = FlagResource.query();
  }
});

