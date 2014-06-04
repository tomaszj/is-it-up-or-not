var FlagsController = angular.module("app").controller("FlagsController", function (flags, $scope, $routeParams, FlagResource) {
  $scope.flags = flags;
});

FlagsController.resolve = {
  flags: ['FlagService', '$q', function(FlagService, $q) {
    var defer = $q.defer();
    FlagService.findAll().$promise.then(function (flags) {
      return defer.resolve(flags);
    }, function(err) {
      console.log(err);
      return defer.reject({});
    });
    return defer.promise;
  }]
};

