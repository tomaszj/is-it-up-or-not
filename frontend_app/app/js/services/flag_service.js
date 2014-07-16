angular.module("app").factory("FlagService", function(FlagResource) {
  
  this.findAll = function() {
    return FlagResource.query().$promise; 
  };

  this.find = function(id) {
    return FlagResource.get({id: id}).$promise;
  };

  this.commitFlagUp = function(flag) {
    this.setFlagUp(flag);
    flag.investigating = false;
    flag.person_investigating = "";
    FlagResource.update({id: flag.id}, flag);
  };

  this.commitFlagDown = function(flag) {
    this.setFlagDown(flag);
    FlagResource.update({id: flag.id}, flag);
  };

  this.updateFlag = function(flag, success) {
    return FlagResource.update({id: flag.id}, flag, success);
  };

  this.destroyFlag = function(flag, success) {
    return FlagResource.delete({id: flag.id}, success);
  };

  this.createFlag = function(flag, success, error) {
    FlagResource.save(flag, success, error);
  };

  // Model functions.
  this.isFlagUp = function(flag) {
    return flag.state === 'up';
  };

  this.isFlagDown = function(flag) {
    return flag.state === 'down';
  };

  this.setFlagUp = function(flag) {
    flag.state = 'up';
  };

  this.setFlagDown = function(flag) {
    flag.state = 'down';
  };

  return this;
});
