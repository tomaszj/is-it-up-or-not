angular.module("app").filter("booleanToString", function() {
  return function(input) {
    if (!!input) {
      return "Yes";
    } else {
      return "No";
    } 
  };
});

