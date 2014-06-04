angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/', {
    redirectTo: '/flags' 
  });

  $routeProvider.when('/flags', {
    controller: 'FlagsController',
    templateUrl: 'flags/index.html',
    resolve: FlagsController.resolve
  });

  $routeProvider.when('/flags/new', {
    controller: 'NewFlagController',
    templateUrl: 'flags/new.html'
  });

  $routeProvider.when('/flags/:id', {
    controller: 'FlagController',
    templateUrl: 'flags/show.html',
    resolve: FlagController.resolve
  });

  $routeProvider.otherwise({ redirectTo: '/flags' });
});
