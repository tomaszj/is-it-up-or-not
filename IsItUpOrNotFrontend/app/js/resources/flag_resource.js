angular.module("app").factory("FlagResource", function($q, $resource) {
  return $resource('/api/v1/flags/:id', {}, {
    update: { method: 'PUT', params: { id: '@id' }}, 
    delete: { method: 'DELETE', params: { id: '@id' }}
  });
});

