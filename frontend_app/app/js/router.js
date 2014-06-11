angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/', {
    redirectTo: '/flags' 
  });
  var flagsRouteConfig = {
    controller: 'FlagsController',
    templateUrl: 'flags/index.html'
  };

  $routeProvider.when('/flags', flagsRouteConfig);
  $routeProvider.when('/flegs', flagsRouteConfig);

  $routeProvider.when('/flags/new', {
    controller: 'NewFlagController',
    templateUrl: 'flags/new.html'
  });

  $routeProvider.when('/flags/:id', {
    controller: 'FlagController',
    templateUrl: 'flags/show.html'
  });

  $routeProvider.otherwise({ redirectTo: '/flags' });
});
