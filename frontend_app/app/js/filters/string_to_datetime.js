angular.module("app").filter("stringToDatetime", function($filter) {
  return function(input) {
    return $filter('date')(input, 'HH:mm - dd MMM');
  };
});
