angular.module("app").controller("AppController", function ($rootScope) {
  $rootScope.$on("$routeChangeError", function() {
    $rootScope.error = { message: "Something went wrong." };
  });
});

