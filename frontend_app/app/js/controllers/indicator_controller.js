// with $resource
angular.module("app").controller("IndicatorController", function ($scope, $location, $window, FlagService) {

  var isInEditMode = false;
  $scope.editedFlag = null;

  $scope.isInEditMode = function() {
    return isInEditMode;
  };

  $scope.turnOnEditModeWithFlag = function(flag) {
    $scope.editedFlag = angular.copy(flag);
    isInEditMode = true;
  };

  $scope.cancelEditMode = function() {
    $scope.editedFlag = null;
    isInEditMode = false; 
  };

  $scope.commitEditModeWithFlag = function(flag) {
    FlagService.updateFlag(editedFlag, function() {
      angular.extend(flag, $scope.editedFlag);
      $scope.editedFlag = null;
      isInEditMode = false; 
    });
  };

  $scope.isFlagUp = function(flag) {
    return FlagService.isFlagUp(flag);
  };

  $scope.isFlagDown = function(flag) {
    return FlagService.isFlagDown(flag);
  };

  $scope.setFlagUp = function(flag) {
    FlagService.setFlagUp(flag);
  };

  $scope.commitFlagUp = function(flag) {
    FlagService.commitFlagUp(flag);
  };

  $scope.setFlagDown = function(flag) {
    FlagService.setFlagDown(flag);
  };

  $scope.commitFlagDown = function(flag) {
    FlagService.commitFlagDown(flag);
  };

  $scope.destroyFlag = function(flag) {
    if ($window.confirm("Do you want to delete " + flag.title + " environment?")) {
      FlagService.destroyFlag(flag, function() {
        $location.path("/flags");
      });
    }
  };
});

