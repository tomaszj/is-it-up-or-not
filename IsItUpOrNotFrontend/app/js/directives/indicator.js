angular.module("app").directive("indicator", function() {
  return {
    restrict: "E",
    replace: true,
    controller: "IndicatorController",
    scope: '=flag',
    templateUrl:'indicators/_indicator.html'
  };
});
