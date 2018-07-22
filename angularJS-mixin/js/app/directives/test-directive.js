define('app/directives/test-directive',['app/app'],function(require,exports,module){
	require('app/app');
	var app=angular.module('app');
	app.directive('test',function(){
		return {
			restrict:"AE",
			template:"<h1>大写的TEST</h1>"
		};
	});
});