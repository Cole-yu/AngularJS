define('app/controllers/adminUser',['app/app'],function(require,exports,module){
	require('app/app');
	var app=angular.module('app');
	app.controller('adminUserCtrl',['$scope',
		function($scope) {
	    	$scope.value = "welcome to admin user";
		}
	]);
});