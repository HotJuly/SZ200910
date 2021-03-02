const Koa = require('koa');
const KoaRouter = require('koa-router');
const Fly=require("flyio/src/node");
const jwt = require('jsonwebtoken');
const fly=new Fly;

// const app = express();
//1.在内存中生成了一个服务器应用实例
const app = new Koa();

/*
	express->app.get('/homeData',回调函数)
	3.在koa服务器上创建路由
		-1)通过koa-router创建路由器实例
		-2)声明使用中间件->app.use(中间件函数)
			中间件作用:
				1.修改请求头,响应头配置
				2.做静态资源映射
				注意:路由其实也是一个中间件
		-3)注册路由
*/

const router = new KoaRouter();

app.use(router.routes());

router.get('/test',function(ctx,next){
	/*
		express
			形参个数:3个
				1.request->请求报文对象
				2.response->响应报文对象
				3.next->执行下一个中间件的函数
		koa
			形参个数:2个
				1.ctx->上下文(request+response)
					接收参数:ctx.query
					返回响应:ctx.body=想要返回的数据(所有的数据都会转成json)
				2.next->执行下一个中间件的函数
	*/
	console.log('/test',ctx.query)
	ctx.body={
		name:"xiaoming",
		age:38
	}
})

const indexData = require('./datas/index.json');
router.get("/getIndexData",function(ctx,next){
	ctx.body=indexData
})

const categoryDatas = require('./datas/categoryDatas.json');
router.get("/getCategoryDatas",function(ctx,next){
	ctx.body=categoryDatas
})

const indexCateList = require('./datas/indexCateList.json');
router.get("/getIndexCateList",async function(ctx,next){
	let result = await new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(indexCateList)
		},2000)
	})
	ctx.body=result;
})


const goods = require('./datas/goods.json');
router.get("/getGoodDetail",function(ctx,next){
	// 假设获取到商品id,如何找到对应商品并返回
	// console.log('ctx',ctx.query)
	let {goodId} =ctx.query;
	// 数组方法 map forEach find filter reduce
	//	find	找到第一个匹配的就停止,如果找到返回的是匹配的对象,如果没找到undefined
	//	filter 一定会遍历整个数组
	let result = goods.find((item)=>{
		// 位运算符 >>> <<<
		return item.id === goodId >>> 0
	})
	console.log('result',result)
	ctx.body=result
})

// 获取用户唯一标识OpenId
router.get("/getOpenId",async function(ctx,next){
	let {code} = ctx.query;
	let appId = "wxe5931a68ea66cece";
	let appSecret = "8d16a70af5fba9046bfce838b337ac03";
	let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`;
	
	let {data} = await fly.get(url);
	let {openid}=JSON.parse(data);
	// console.log('data',data)
	
	let salt = 'atguigu';
	// 加密->jwt.sign(需要加密的数据, 盐(salt));
	let token = jwt.sign(openid, salt);
	console.log('token',token)
	
	// 解密->jwt.verify(token, 盐(salt))
	let newOpenId = jwt.verify(token,salt);
	console.log(openid,newOpenId)
	ctx.body=token;
})

//2.将服务器应用实例运行在某个端口上,并监听该端口
app.listen('3000',function(error){
	if(error){
		console.log('服务器运行失败,错误信息:' + error);
	}else{
		console.log('服务器运行成功,启动于:http://localhost:3000');
	}
})