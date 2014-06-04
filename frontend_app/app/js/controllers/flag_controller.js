var FlagController = angular.module("app").controller("FlagController", function (flag, $scope, $routeParams, FlagResource) {
  $scope.flag = flag;
});

FlagController.resolve = {
  flag: ['FlagService', '$q', '$route', function(FlagService, $q, $route) {
    var defer = $q.defer();
    FlagService.find($route.current.params.id).$promise.then(function(flag) {
      return defer.resolve(flag); 
    }, function (err) {
      console.log(err);
      return defer.reject({});
    });
    return defer.promise;
  }]
};

