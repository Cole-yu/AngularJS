define(function(require,exports,module){
	myModule.controller('myCtrl',['$scope',function($scope){
		$scope.name = "Runoob";
	    $scope.sayHello = function() {
	        $scope.greeting = 'Hello ' + $scope.name + '!';
	    };
	}]);
})