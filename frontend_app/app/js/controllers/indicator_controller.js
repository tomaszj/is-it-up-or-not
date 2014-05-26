// with $resource
angular.module("app").controller("IndicatorController", function ($scope, $location, FlagService) {

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
    $scope.editedFlag.$update(); 
    angular.extend(flag, $scope.editedFlag);
    $scope.editedFlag = null;
    isInEditMode = false; 
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
    FlagService.destroyFlag(flag);
    $location.path("/flags");
  };
});

