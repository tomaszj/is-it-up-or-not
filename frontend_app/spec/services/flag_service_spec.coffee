describe "service: FlagService", ->

  FlagResource = null

  beforeEach -> 
    module "app", ($provide) ->
      FlagResource = {
        query: null,
        get: null,
        save: null,
        update: null
      }
      $provide.value("FlagResource", FlagResource)
      undefined

  beforeEach inject (@FlagService) ->

  describe "Resource access", ->
    it "should call FlagResource for all flags", ->
      spyOn(FlagResource, 'query').andReturn({})

      @FlagService.findAll()

      expect(FlagResource.query).toHaveBeenCalled

    it "should call FlagResource for a specific flag", ->
      id = 8
      spyOn(FlagResource, 'get').andReturn({})

      @FlagService.find(id)

      expect(FlagResource.get).toHaveBeenCalledWith({id: id})

  describe "Creating a flag", ->
    it "should call FlagResource", ->
      flag = {}
      successFn = ->
      errorFn = ->
      spyOn(FlagResource, 'save')

      @FlagService.createFlag(flag, successFn, errorFn)

      expect(FlagResource.save).toHaveBeenCalledWith(flag, successFn, errorFn)

  describe "Destroying a flag", ->
    it "should call $delete function on passed flag", ->
      flag = jasmine.createSpyObj('flag', ['$delete'])
      successFn = ->

      @FlagService.destroyFlag(flag, successFn)

      expect(flag.$delete).toHaveBeenCalledWith(successFn)

