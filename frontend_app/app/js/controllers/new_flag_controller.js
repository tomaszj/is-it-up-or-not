angular.module("app").controller("NewFlagController", function ($scope, $location, FlagService) {
  
  $scope.newFlag = {};
  FlagService.setFlagUp($scope.newFlag);

  $scope.createFlag = function() {
    FlagService.createFlag($scope.newFlag, function(createdFlag) { 
      $location.path("/flags/" + createdFlag.id);
    }, function(err) {
      console.log("Error has occured: " + err);
    });
  };

});

