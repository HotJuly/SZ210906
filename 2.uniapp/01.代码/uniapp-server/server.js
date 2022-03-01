const Koa = require('koa');
const KoaRouter = require('koa-router');

// 1.创建服务器应用实例对象
const app = new Koa();


// 3.注册路由相关内容

//3.1 生成路由器实例对象
const router = new KoaRouter();

/*
	3.2使用中间件函数
		中间件是相当于在请求到达路由之前,设置的拦截器
		它可以根据开发者的代码,以及当前请求的实际情况来决定,请求方能否触发对应的路由
		中间件的功能:
			1.可以统一修改请求头或者响应头的内容
			2.根据请求发来的请求报文,实现许多过滤功能
		如果中间件函数调用next方法(中间件函数的形参),就可以执行下一个中间件函数,或者到达路由器
*/

// 告知服务器应用实例,将注册的所有路由统统使用
app.use(router.routes());

//3.3注册路由
/*
	express注册路由
		app.get(路由路径,回调函数)
		回调函数接收参数:
			request	->	请求报文对象	->	内部存放当前请求所有的数据
			response->	响应报文对象	->	内部存放当前请求对应的响应数据
				response.send(数据)	response.end(数据)	response.json(数据)
			next	->	执行下一个中间件函数
		
	koa注册路由
		router.get('/test',()=>{})
		回调函数接收参数:
			ctx	->	request+response	->	请求报文对象+响应报文对象
				ctx.body=需要返回的数据(如果是对象就会被自动转为json对象)
			next	->	执行下一个中间件函数
*/
router.get('/test',(ctx,next)=>{
	console.log('/test success')
	ctx.body='/test success';
})

// 用于请求首页推荐区域数据
const indexData = require('./datas/index.json');
router.get('/getIndexData',(ctx,next)=>{
	console.log('/getIndexData success')
	ctx.body=indexData;
})

// 用于请求分类页面数据
const categoryDatas = require('./datas/categoryDatas.json');
router.get('/getCategoryDatas',(ctx,next)=>{
	console.log('/getCategoryDatas success')
	ctx.body=categoryDatas;
})

// 用于请求首页分类列表数据
const indexCateList = require('./datas/indexCateList.json');
router.get('/getIndexCateList',(ctx,next)=>{
	console.log('/getIndexCateList success')
	ctx.body=indexCateList;
})

// 用于请求详情页面数据
const goods = require('./datas/goods.json');
router.get('/getGoodDetail',(ctx,next)=>{
	// ctx.query可以接收到用户从前端发送过来的query对象
	// 注意:url只能传递字符串类型的数据
	// console.log('/getGoodDetail success',ctx.query)
	const goodId = ctx.query.goodId;
	const result = goods.find(good=>{
		// console.log('1',good.id,goodId)
		return good.id===goodId*1;
	})
	// console.log('result',result)
	ctx.body=result;
})


// 2.将服务器应用实例挂载到电脑的某个端口上,并监听该端口
app.listen('5000',(error)=>{
	if(error){
		console.log('服务器启动失败,' + error);
	}else{
		console.log('服务器成功启动于:http://localhost:5000')
	}
})