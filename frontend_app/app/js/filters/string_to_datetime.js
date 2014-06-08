angular.module("app").filter("stringToDatetime", function() {
  return function(input) {
    var parsedDate = new Date(input);
    return parsedDate.toLocaleTimeString() + " " + parsedDate.toLocaleDateString();
  };
});
