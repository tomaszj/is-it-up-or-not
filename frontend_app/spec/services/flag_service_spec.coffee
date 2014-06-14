describe "service: FlagService", ->

  FlagResource = null

  beforeEach -> 
    module "app", ($provide) ->
      FlagResource = {
        query: null,
        get: null,
        save: null,
        update: null,
        delete: null
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

  describe "Updating a flag", ->
    it "should call update function on FlagResource", ->
      flag = {}
      successFn = ->
      spyOn(FlagResource, 'update')

      @FlagService.updateFlag(flag, successFn)

      expect(FlagResource.update).toHaveBeenCalledWith({id: flag.id}, flag, successFn)

  describe "Destroying a flag", ->
    it "should call delete function on FlagResource", ->
      flag = {}
      successFn = ->
      spyOn(FlagResource, 'delete')

      @FlagService.destroyFlag(flag, successFn)

      expect(FlagResource.delete).toHaveBeenCalledWith({id: flag.id}, successFn)

