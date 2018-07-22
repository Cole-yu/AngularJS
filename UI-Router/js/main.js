(function(angular){
  console.log(angular);
    var app=angular.module('sunday',['ui.router']);
    app.config(function($stateProvider){
        $stateProvider
            .state('hello-world',{
              url:'/hello',
              template:'<h3>hello world!</h3>'
            })
            .state('world',{
              url:'/world',
              templateUrl:'tpls/world.html'
            })
            .state('world.world1',{  // 父路由与子路由通过”.“连接就形成了子路由
              url:'/world/world-1',
              template:'<h3>This is a World 1</h3>'
            })
            .state('world2',{
              url:'/world/world-2',
              template:'<h3>world2并不依赖于world，在我们点击它的时候，他会替换掉index.html中的<div ui-view></div></h3>'
            })
    });
})(angular);