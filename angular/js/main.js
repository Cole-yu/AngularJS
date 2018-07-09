seajs.config({
	base:"./js/"
});

seajs.use('app/app',function(app){
	app.myTab();
})