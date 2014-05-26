angular.module("app").directive("error", function() {
  return {
    restrict: "E",
    replace: true,
    templateUrl:'errors/_error.html'
  };
});
