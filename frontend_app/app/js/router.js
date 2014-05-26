angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/', {
    redirectTo: '/flags' 
  });

  $routeProvider.when('/flags', {
    controller: 'FlagsController',
    templateUrl: 'flags/index.html',
    resolve: {
      flags: function(FlagService, $q) {
        var defer = $q.defer();
        FlagService.findAll().$promise.then(function (flags) {
          return defer.resolve(flags);
        }, function(err) {
          console.log(err);
          return defer.reject({});
        });
        return defer.promise;
      }
    }
  });

  $routeProvider.when('/flags/new', {
    controller: 'NewFlagController',
    templateUrl: 'flags/new.html'
  });

  $routeProvider.when('/flags/:id', {
    controller: 'FlagController',
    templateUrl: 'flags/show.html',
    resolve: {
      flag: function(FlagService, $q, $route) {
        var defer = $q.defer();
        FlagService.find($route.current.params.id).$promise.then(function(flag) {
          return defer.resolve(flag); 
        }, function (err) {
          console.log(err);
          return defer.reject({});
        });
        return defer.promise;
      }
    }
  });

  $routeProvider.otherwise({ redirectTo: '/flags' });
});
