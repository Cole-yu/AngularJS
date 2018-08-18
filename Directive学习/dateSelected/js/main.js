var app=angular.module("app",[]);
app.controller('dateSelected',["$scope",function($scope){

	// //日期选项面板
	// $scope.dateSelectedActive=false;

	// //选中的日期选项索引
	// $scope.dateItemActiveIndex=-1;

		

	// $scope.dateSelected=function($index){
	// 	//选中的日期选项索引
	// 	$scope.dateItemActiveIndex=$index;

	// 	//关闭日期选项面板
	// 	$scope.dateSelectedActive=false;

	// 	//选中的开始日期和结束日期
	// 	$scope.startDate=$scope.dateList[$index].startDate;
	// 	$scope.endDate=$scope.dateList[$index].endDate;

	// }

	$scope.read=function(){
		console.log($scope.dateSelectedActive,$scope.startDate,$scope.endDate);
	}

	$scope.dateList=[
		{
			startDate:"2018-07-30",
			endDate:"2018-08-05"
		},
		{
			startDate:"2018-08-06",
			endDate:"2018-08-12"
		},
		{
			startDate:"2018-08-13",
			endDate:"2018-08-19"
		},
		{
			startDate:"2018-08-20",
			endDate:"2018-08-26"
		},
		{
			startDate:"2018-08-27",
			endDate:"2018-09-02"
		},
		{
			startDate:"2018-09-02",
			endDate:"2018-09-08"
		}
	];
}]);


app.directive('datesSelected',function(){
	return {
		restrict:"AECM",
		replace:true,
		transclude:true,
		template:`
			<div class="dateSelected">
				<div class="dateHeader" ng-click="toggle()">
					<span ng-if="startDate==''">请选择日期</span>
					<span ng-if="startDate!=''">{{startDate}} ~ {{endDate}}</span>
				</div>
				<div class="datePanel" ng-if="dateSelectedActive">
					<ng-transclude></ng-transclude>
				</div>
			</div>
		`,
		controller:function($scope){   //调用的是angular中的$scope对象

			//这三个会被定义到指令包含的控制器中,不是在datesSelected中私有的,耦合度很高
			$scope.dateSelectedActive=false;
			$scope.startDate="";
			$scope.endDate="";
			var items=[];

			this.itemSelected=function(selectItem){
				selectItem.dateItemActive=true;

				angular.forEach(items,function(item){
					if(selectItem!=item){
						item.dateItemActive=false;
					}
				});
			};

			this.addItems=function(item){
				items.push(item);
			};			

			this.changDate=function(startDate,endDate){
				$scope.startDate=startDate;
				$scope.endDate=endDate;
			};		

			this.close=function(){
				$scope.dateSelectedActive=false;
			}
			
		},
		link:function(scope,element,attrs){
			scope.toggle=function(){
				scope.dateSelectedActive=!scope.dateSelectedActive;
			};
		}
	}
});

app.directive("datesItem",function(){
	return {
		restrict:"AECM",
		require:"^datesSelected",
		replace:true,
		transclude:true,
		scope:{
			startDate:"@startdate",
			endDate:"@enddate",
			read:"&"
		},
		template:`
			<div class="dateItem" ng-class="{'dateItemActive':dateItemActive}"
			 ng-click="dateSelected(startDate,endDate);">
				{{startDate}} ~ {{endDate}}
			</div>
		`,
		link:function(scope,element,attrs,controller){
			scope.dateItemActive=false;
			controller.addItems(scope);
			scope.dateSelected=function(startDate,endDate){
				controller.itemSelected(scope);					
				controller.changDate(startDate,endDate);
				scope.read();
				controller.close();
			}
		}
	}
});