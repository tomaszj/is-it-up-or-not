angular.module("app").factory("FlagService", function(FlagResource) {
  
  this.findAll = function() {
    return FlagResource.query(); 
  };

  this.find = function(id) {
    return FlagResource.get({id: id});
  };

  this.isFlagUp = function(flag) {
    return flag.state === 'up';
  };

  this.isFlagDown = function(flag) {
    return flag.state === 'down';
  };

  this.setFlagUp = function(flag) {
    flag.state = 'up';
  };

  this.commitFlagUp = function(flag) {
    this.setFlagUp(flag);
    FlagResource.update({id: flag.id}, flag);
  };

  this.setFlagDown = function(flag) {
    flag.state = 'down';
  };

  this.commitFlagDown = function(flag) {
    this.setFlagDown(flag);
    FlagResource.update({id: flag.id}, flag);
  };

  this.destroyFlag = function(flag) {
    flag.$delete();
  };

  this.createFlag = function(flag, success, error) {
    FlagResource.save(flag, success, error);
  };

  return this;
});
