// with $resource
angular.module("app").controller("IndicatorController", function ($scope, $location, FlagResource) {

  var isInEditMode = false;

  $scope.isInEditMode = function() {
    return isInEditMode;
  }

  $scope.turnOnEditMode = function() {
    isInEditMode = true;
  }

  $scope.cancelEditMode = function() {
    isInEditMode = false; 
  }

  $scope.commitEditModeWithFlag = function(flag) {
    flag.$update(); 
    isInEditMode = false; 
  }

  $scope.isFlagUp = function(flag) {
    return flag.state === 'up';
  };

  $scope.isFlagDown = function(flag) {
    return flag.state === 'down';
  };

  $scope.setFlagUp = function(flag) {
    flag.state = 'up';
    FlagResource.update({id: flag.id}, flag);
  };

  $scope.setFlagDown = function(flag) {
    flag.state = 'down';
    FlagResource.update({id: flag.id}, flag);
  };

  $scope.destroyFlag = function(flag) {
    flag.$delete();
    $location.path('/flags');
  };
});

