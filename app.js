( function () {
  'use strict';

angular.module('LunchCheck',[])

.controller('myFirstController', function($scope) {
  $scope.itemname="";
  $scope.itemCount=1;
  $scope.str="";
  $scope.calculateItem = function () {
  var res =
  checkLunch($scope.itemname);
  if($scope.itemname==" ")
  {
    $scope.result="Please enter data first";
  }
  else if(res>0 && res<=3) {
    $scope.result="Enjoy!";
  }
  else if(res>3)
  {
    $scope.result="Too Much!";
  }
};
function checkLunch(string)
{
  var words=[];
  words=string.split(',');
  var len=words.length;
  console.log(len);
  return len;
}
});
}) ();
