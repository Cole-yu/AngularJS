seajs.config({
	base:"./js/",
	alias: {
		'jquery':'../../script/jquery/jquery-3.3.1'             //使用顶级标识进行设置
	}
});

seajs.use(['app/app','app/controllers/main','app/controllers/adminUser','app/directives/test-directive'],function(app,main,admin){	
	console.log(app);
	console.log('main.js启动成功');
});

// seajs.use(['app/app'],function(app){
// 	console.log('main.js启动成功');	
// });