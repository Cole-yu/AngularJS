define(function(require,exports,module){	
	var myModule=angular.module('helloAngular',['ngRoute']);//定义一个module,一切从module开始

	myModule.config(['$routeProvider',function($routeProvider){
		$routeProvider
			.when('/',{
				templateUrl:"tpls/myCtrl.html",
				controller:"myCtrl"
			})
			.when('/eventController',{
				templateUrl:"tpls/EventController.html",
				controller:"EventController"
			})
			.when('/myTab',{
				templateUrl:"tpls/myTab.html",
				controller:"myTab"
			})
			.otherwise({redirectTo:'/'});
	}]);

	exports.myTab=function(){		
		myModule.controller('myTab',['$scope',function($scope){
			$scope.tab="tab1";
			$scope.myClick=function($event){				
				this.tab=$event.target.innerText;
			};
		}]);
	}
});