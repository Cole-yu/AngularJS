var app=angular.module('app',[]);

app.directive('appSelect',function(){
	return {
		restrict:"AECM",
		scope:{},
		transclude:true,		
		template:"<div ng-transclude></div>",
		controller:function(){
			var versions=[];
			this.expanded=function(selectedVer){
				angular.forEach(versions,function(version){
					if(selectedVer != version){
						version.versionSelected=false;
					}
				});
			}
			this.addVersions=function(version){
				versions.push(version);
			}
		}
	}
});

app.directive('version',function(){
	return {
		restrict:"AECM",
		require:"^?appSelect",
		scope:{
			version:"@ver"
		},
		transclude:true,
		template:`<div ng-click="versionToggle()">
			<p>版本：{{version}}</p>
			<ul ng-if="versionSelected">
				<ng-transclude></ng-transclude>
			</ul>
		</div>`,
		link:function(scope,element,attr,appController){
			scope.versionSelected=false;
			appController.addVersions(scope);
			scope.versionToggle=function(){
				scope.versionSelected=!scope.versionSelected;
				appController.expanded(scope);
			}
		}
	}
});

app.directive('product',function(){
	return {
		restrict:"AECM",		
		scope:{
			product:"@pro"
		},
		transclude:true,
		template:`<li>
			<p>产品:{{product}}</p>
			<ul>
				<ng-transclude></ng-transclude>
			</ul>
		</li>`		
	}
});

app.directive('device',function(){
	return {
		restrict:"AECM",	
		scopde:{
			device:"@dev"
		},
		transclude:true,
		template:"<li>{{device}}</li>"
	}
});

app.controller("phone",["$scope",function($scope){
	$scope.versions=['2.0','3.0','4.0'];
	$scope.products=['P1','P2','P3'];
	$scope.devices=['HAIWEI 荣耀7','HAIWEI 荣耀8','HAIWEI 荣耀9'];
}]);