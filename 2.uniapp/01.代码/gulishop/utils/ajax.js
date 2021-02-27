import config from './config.js';
export default function(url,data={},method="GET"){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:config.h5Host + url,
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