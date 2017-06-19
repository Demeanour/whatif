var app = angular.module("app", [])

app.controller('appCtrl', ['$scope', function ($scope){
  $scope.data = {
    Products: [{pname: "Tshirts"},{pname: "Shirts"},{},{},{}],
    Categories: [{},{},{},{}]
  };
}]);
