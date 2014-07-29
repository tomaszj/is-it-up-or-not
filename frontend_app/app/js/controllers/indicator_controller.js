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
    FlagService.updateFlag($scope.editedFlag, function() {
      angular.extend(flag, $scope.editedFlag);
      $scope.editedFlag = null;
      isInEditMode = false; 
    });
  };

  $scope.isFlagUp = FlagService.isFlagUp;
  $scope.isFlagDown = FlagService.isFlagDown;
  $scope.setFlagUp = FlagService.setFlagUp;
  $scope.commitFlagUp = FlagService.commitFlagUp;
  $scope.setFlagDown = FlagService.setFlagDown;
  $scope.commitFlagDown = FlagService.commitFlagDown;

  $scope.isFlagDownAndNoOneInvestigating = function(flag) {
    return FlagService.isFlagDown(flag) && !flag.investigating;
  };

  $scope.isSomeOneInvestigating = function(flag) {
    return FlagService.isFlagDown(flag) && flag.investigating;
  };

  $scope.destroyFlag = function(flag) {
    if ($window.confirm("Do you want to delete " + flag.title + " environment?")) {
      FlagService.destroyFlag(flag, function() {
        $location.path("/flags");
      });
    }
  };
});

