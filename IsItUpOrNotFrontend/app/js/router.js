angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/', {
    redirectTo: '/flags' 
  });

  $routeProvider.when('/flags', {
    controller: 'FlagsController',
    templateUrl: 'flags/index.html'
  });

  $routeProvider.when('/flags/:id', {
    controller: 'FlagsController',
    templateUrl: 'flags/show.html'
  });

  $routeProvider.otherwise({ redirectTo: '/flags' });
});
