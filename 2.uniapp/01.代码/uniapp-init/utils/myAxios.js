import config from './config.js';
// 需求:根据不同的运行环境,控制请求的基础路径的变化
// 难点:如何得知当前代码的运行环境
// 解决:通过uni.getSystemInfoSync方法可以获取到当前设备的系统信息,返回一个对象
// 如果是小程序,那么platform属性值就是devtools
// 如果是web,那么platform属性值就是ios或者android

// 如果当前是小程序运行环境,那么请求路径就要是完整的服务器地址(http://localhost:5000)
// 如果当前是web运行环境,那么请求路径就要是代理标识前缀(/api)

// 用于存储基础路径
let baseUrl = "";

// const {platform} = uni.getSystemInfoSync();

// if(platform === "ios"||platform === "android"){
// 	// 能进入这里就说明当前的运行环境是web
// 	baseUrl = "/api"
// }else if(platform === "devtools"){
// 	// 能进入这里就说明当前的运行环境是小程序
// 	baseUrl = "http://localhost:5000"
// }

// console.log('info',info);

// #ifdef H5
// 如果当前运行环境是h5,那么内部的代码就会生效
	baseUrl = config.h5Host
// #endif

// #ifndef H5
// 如果当前运行环境不是h5,那么内部的代码就会生效
// #endif

// #ifdef MP
// 如果当前运行环境是小程序,那么内部的代码就会生效
	baseUrl = config.mpHost
// #endif

export default function(url,data={},method="GET"){
	return new Promise((resolve,reject)=>{
		uni.request({
			//小程序 url:'http://localhost:5000/getIndexData',
			//h5 url:'/api/getIndexData',
			url:baseUrl + url,
			data,
			method,
			success:(res)=>{
				// console.log('success',res)
				resolve(res.data)
			}
		})
	})
}