describe "controller: FlagController($scope, $routeParams, FlagService)", ->

  beforeEach -> module("app")

  beforeEach inject ($controller, @$rootScope, @$routeParams, @FlagService, @$q, @$httpBackend) ->
    @scope = {}
    @createController = -> $controller('FlagController', {
      '$scope': @scope,
      '$routeParams': @$routeParams,
      'FlagService': @FlagService
    })

  describe "When controller is created", ->
    it "should call FlagService for a flag", ->
      mockFlag = {}
      @$routeParams.id = 1

      deferred = @$q.defer()
      deferred.resolve(mockFlag)
      spyOn(@FlagService, 'find').andReturn(deferred.promise)
      
      @createController()

      @$rootScope.$apply() # Resolve promises, etc.
      expect(@FlagService.find).toHaveBeenCalledWith(@$routeParams.id)
      expect(@scope.flag).toBe(mockFlag)

