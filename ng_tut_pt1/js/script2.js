var app2 = angular.module('app2', []);

app2.controller('ctrl1', function($scope){
  $scope.rand1 = Math.floor((Math.random() * 10 + 1));
  $scope.rand2 = Math.floor((Math.random() * 10 + 1));
});

app2.controller('happyCtrl', function($scope){
   var happyMood = ["happy", "funny"]

   $scope.happy = happyMood[Math.floor((Math.random() * 2))];
});


app2.controller('badCtrl', function($scope){
   var badMood = ["sad", "lame"]

   $scope.bad = badMood[Math.floor((Math.random() * 2))];
});
