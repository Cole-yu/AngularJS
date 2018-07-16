seajs.config({
	base:"./js/",
	alias: {
		'jquery':'../../script/jquery/jquery-3.3.1'             //使用顶级标识进行设置
	}
});

seajs.use(['app/app','app/controllers/main','app/controllers/adminUser'],function(app,main,admin){

	console.log('main.js启动成功');	
});