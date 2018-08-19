var app=angular.module("app",[]);
app.controller('dateSelected',["$scope",function($scope){

	$scope.read=function(startDate,endDate){		
		console.log($scope);
		//console.log($scope.dateSelectedActive,$scope.startDate,$scope.endDate);

		$scope.start1=startDate;
		$scope.end1=endDate;

		console.log($scope.start1,$scope.end1);
	};


	$scope.read2=function(startDate,endDate){
		console.log($scope);
		$scope.start2=startDate;
		$scope.end2=endDate;

		console.log($scope.start2,$scope.end2);
	};

	$scope.read3=function(startDate,endDate){
		console.log($scope);
		$scope.start3=startDate;
		$scope.end3=endDate;

		console.log($scope.start3,$scope.end3);
	};

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

	$scope.$on("dateSelected",function(event,data){

		$scope.startTime=data.startDate;
		$scope.endTime=data.endDate;

		console.log($scope.startTime,$scope.endTime);
	});

}]);

app.run(function($templateCache){
	$templateCache.put('dateSelected.html',
		`<div class="dateSelected">
			<div class="dateHeader" ng-click="toggle()">
				<span ng-if="startDate==''">请选择日期</span>
				<span ng-if="startDate!=''">{{startDate}} ~ {{endDate}}</span>
			</div>
			<div class="datePanel" ng-if="dateSelectedActive">
				<ng-transclude></ng-transclude>
			</div>
		</div>`
	);
});


app.directive('datesSelected',function($templateCache){
	return {
		restrict:"AECM",
		replace:true,
		transclude:true,
		scope:{
		},
		template:$templateCache.get('dateSelected.html'),
		controller:function(){   //调用的是angular中的$scope对象

			//这三个会被定义到指令包含的控制器中,不是在datesSelected中私有的,耦合度很高
			// $scope.dateSelectedActive=false;
			// $scope.startDate="";
			// $scope.endDate="";

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

			// this.changDate=function(startDate,endDate){
			// 	$scope.startDate=startDate;
			// 	$scope.endDate=endDate;
			// };		

			// this.close=function(){
			// 	$scope.dateSelectedActive=false;
			// }

			// $scope.$on("dateSelected",function(event,data){
			// 	console.log(event);
			// 	console.log(data);

			// 	$scope.startDate=data.startDate;
			// 	$scope.endDate=data.endDate;				
			// });
			
		},
		link:function(scope,element,attrs){

			scope.dateSelectedActive=false;
			scope.startDate="";
			scope.endDate="";

			scope.$on("dateSelected",function(event,data){
				// console.log(event);
				// console.log(data);

				scope.startDate=data.startDate;
				scope.endDate=data.endDate;

				scope.dateSelectedActive=false;
			});


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
			 ng-click="dateSelected(startDate,endDate);read({startDate:startDate,endDate:endDate})">
				{{startDate}} ~ {{endDate}}
			</div>
		`,
		link:function(scope,element,attrs,controller){
			scope.dateItemActive=false;
			controller.addItems(scope);
			scope.dateSelected=function(startDate,endDate){
				controller.itemSelected(scope);			
				// controller.changDate(startDate,endDate);				
				// controller.close();

				scope.$emit("dateSelected",{
					startDate:startDate,
					endDate:endDate
				});

				// scope.read();
			}
		}
	}
});