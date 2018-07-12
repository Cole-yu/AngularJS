define('app/app',function(require,exports,module){
	var jquery=require('jquery');	

	var controllerProvider=null;

	var myModule=angular.module('helloAngular',['ngRoute'],function($controllerProvider){
		controllerProvider=$controllerProvider;
		console.log(controllerProvider);
	});

	function registerControllerProvider($controllerProvider){
		$controllerProvider.register('myCtrl',function($scope){		//在bootstrap之后使用注册使用控制器
			console.log('myCtrl init()');
			$scope.name = "Runoob";
		    $scope.sayHello = function() {
		        $scope.greeting = 'Hello ' + $scope.name + '!';
		    };
		});
	}	

	exports.showList=function(){
			//定义一个module,一切从module开始

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
	}	
		

	exports.init=function(){
		$(function(){
			getMyTab(myModule);
			initNavi(myModule);

			// getEventController(myModule);

			// getMyCtrl(myModule);

			angular.bootstrap(document.body,['helloAngular']);

		});
	}

	function initNavi(app){
		app.controller('navi',['$scope',function($scope){
			$scope.myCtrlClick=function(){
				console.log(controllerProvider);
				registerControllerProvider(controllerProvider);
			}
		}]);
	}

	function getMyTab(app){
		app.controller('myTab',['$scope',function($scope){			
			$scope.tab="tab1";
			$scope.myClick=function($event){				
				this.tab=$event.target.innerText;
			};
		}]);	
	}

	function getEventController(app){
		app.controller('EventController',['$scope',function($scope){
			$scope.count=0;
			$scope.$on('MyEvent',function(){
				$scope.count++;
			});
		}]);
	}

	function getMyCtrl(app){
		app.controller('myCtrl',['$scope',function($scope){
			$scope.name = "Runoob";
		    $scope.sayHello = function() {
		        $scope.greeting = 'Hello ' + $scope.name + '!';
		    };
		}]);
	}
	
});