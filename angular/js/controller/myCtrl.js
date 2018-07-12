define('controller/myCtrl',['app/app'],function(require,exports,module){
	var app=angular.module('helloAngular'); 
	app.controller('myCtrl',['$scope',function($scope){     //只能在未bootstrap之前使用
		$scope.name = "Runoob";
	    $scope.sayHello = function() {
	        $scope.greeting = 'Hello ' + $scope.name + '!';
	    };
		 console.log('myCtrl controller');
	}]);
});