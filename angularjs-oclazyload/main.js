var app = angular.module('app', ["ui.router", "oc.lazyLoad"]);

app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider",
    function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.constant = $provide.constant;
    }
]);

app.config(["$stateProvider","$urlRouterProvider","$ocLazyLoadProvider",
    function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider){
        $urlRouterProvider.otherwise("/main");
        $ocLazyLoadProvider.config({
            debug:false,
            events:false        
        }); 
        $stateProvider
            .state("main",{
                url:"/main",
                templateUrl:"views/main.html",
                controller:"mainCtrl",                
                resolve:{
                    deps:["$ocLazyLoad",function($ocLazyLoad){
                        return $ocLazyLoad.load("controllers/main.js");
                    }]
                }
            })
            .state("adminUser",{
                url:"/adminUser",
                templateUrl:"views/adminUser.html",
                controller:"adminUserCtrl",                
                resolve:{
                    deps:["$ocLazyLoad",function($ocLazyLoad){
                        return $ocLazyLoad.load("controllers/adminUser.js");
                    }]
                }
            })        
    }    
]);