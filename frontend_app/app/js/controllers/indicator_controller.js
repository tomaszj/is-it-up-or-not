// with $resource
angular.module("app").controller("IndicatorController", function ($scope, $location, FlagResource) {

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
    return flag.state === 'up';
  };

  $scope.isFlagDown = function(flag) {
    return flag.state === 'down';
  };

  $scope.setFlagUp = function(flag) {
    flag.state = 'up';
  };

  $scope.commitFlagUp = function(flag) {
    $scope.setFlagUp(flag);
    FlagResource.update({id: flag.id}, flag);
  };

  $scope.setFlagDown = function(flag) {
    flag.state = 'down';
  };

  $scope.commitFlagDown = function(flag) {
    $scope.setFlagDown(flag);
    FlagResource.update({id: flag.id}, flag);
  };

  $scope.destroyFlag = function(flag) {
    flag.$delete();
    $location.path('/flags');
  };
});

