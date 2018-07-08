var myModule=angular.module('helloAngular',[]);//定义一个module,一切从module开始

myModule.controller('myCtrl',['$scope',function($scope){
	$scope.name = "Runoob";
    $scope.sayHello = function() {
        $scope.greeting = 'Hello ' + $scope.name + '!';
    };
}]);

myModule.controller('EventController',['$scope',function($scope){
	$scope.count=0;
	$scope.$on('MyEvent',function(){
		$scope.count++;
	});
}]);