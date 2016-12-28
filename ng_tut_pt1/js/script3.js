var app3 = angular.module('app3', []);

app3.controller('gListCtrl', function($scope){
  $scope.groceries = [
    {item: "fish", purchased: false},
    {item: "chips", purchased: true},
    {item: "avacado", purchased: true},
    {item: "sauce", purchased: false},
  ];

  $scope.getList = function(){
    return $scope.showList ? "list1.html" : "list2.html"
  }
});
