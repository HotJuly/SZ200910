import config from './config.js';

/*
	当前的请求基础路径应该根据打包环境不同去生成不同的基础路径
	小程序端	->	http:localhost:3000
	web端	->	/api
	uni.getSystemInfoSync()返回值中有一个platform,如果是ios,代表是h5移动端,如果是devtools,代表是小程序端
*/
let baseUrl;
let {platform} = uni.getSystemInfoSync();
// console.log('systemInfo',systemInfo)


if(platform==="devtools"){
	// 如果是devtools,代表是小程序端
	baseUrl = config.mpHost;
}else if(platform==="ios"){
	baseUrl = config.h5Host;
}

export default function(url,data={},method="GET"){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseUrl + url,
			data,
			method,
			success:(res)=>{
				// console.log('res',res)
				resolve(res.data);
			},
			fail: (error) => {
				reject(error)
			}
		})
	})
}