define('controller/myTab',['app/app'],function(require,exports,module){	
	var myMoudle=require('app/app');	
	exports.initMyTab=function(){
		var app=angular.module('helloAngular');      			//获取模块
		app.controller('myTab',['$scope',function($scope){			
			$scope.tab="tab1";
			$scope.myClick=function($event){				
				this.tab=$event.target.innerText;
			};
		}]);
	}
});