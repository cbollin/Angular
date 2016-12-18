function TestCtrl(){
  var self = this;
  self.showButtonOne = false;
  self.showButtonTwo = false;

  self.people = [
    { name: "Mike"},
    { name: "Jay"}
  ];
}

angular.module('app', ['ngAnimate'])
.controller('TestCtrl', TestCtrl)
