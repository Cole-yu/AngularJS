define('app/controllers/main',['app/app'],function(require,exports,module){
	require('app/app');
	var app=angular.module('app');
	app.controller("mainCtrl",['$scope',
		function($scope) {
	   		$scope.value = "Hello World";
		}
	]);
});