

/*
    封装代码的核心思想
        保留公共部分,将每次都不同的内容提取出来

        封装函数
            1.保留重复出现的代码
            2.将不同的内容提取为形参
            3.谁调用谁传入

        封装组件
            1.保留重复出现的部分
            2.将不同的内容提取为props进行传入
            3.谁使用谁传入
*/
import config from './config';
// const baseUrl = 'http://localhost:3000';
export default function(url,data={},method="GET"){
    // let result;

    return new Promise((resolve,reject)=>{
        // 发送请求是同步发送,返回响应是异步返回
        wx.request({
            url:config.mpHost + url,
            data,
            method,
            success: (res) => {
                // console.log('res',res)
                // if(res.statusCode>=200&&res.statusCode<=299){
                    // 由于res是响应报文,其中具有响应头和响应体
                    // 我们开发时,只需要用到响应体数据,所以该出直接返回了res.data

                resolve(res.data)
                // }else{
                //     reject(res)
                // }
            }
        })
    })
    

    // return result;
}