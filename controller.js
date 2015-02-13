var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {

  $scope.getUsers = function() {

  	//using promises to get users
  	/*var promise = mainService.getUsers();

  	promise.then(function(users) {
  		$scope.users = users;
  	});

  	promise.then(function(users) {
  		$scope.users = users;
  	});*/

  	//original function slightly modified to be most useful
  	mainService.getUsers().then(function(response) {
  		$scope.users = response.data.data;
  	});
  }


  $scope.getUsers();

});