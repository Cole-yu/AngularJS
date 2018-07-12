seajs.config({
	base:"./js/",
	alias: {
		'jquery':'jquery-3.3.1'             //使用顶级标识进行设置
	}
});

seajs.use(['app/app'],function(app){
	app.showList();
	app.init();	
});