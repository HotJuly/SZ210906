import axios from 'axios';
import store from '../store';

const request = axios.create({
    baseURL:"/api",
    timeout:20000
})

const CancelToken = axios.CancelToken;

request.interceptors.request.use((config)=>{
    // 所有的请求都会经过该函数
    // 所以可以在此处记录所有发送的请求
    // console.log(config)

    // 通过CancelToken构造函数创建一个唯一标识,放在当前请求的配置对象中
    // CancelToken函数接收一个回调函数,该回调函数会得到一个实参callback
    // 如果callback函数被调用,当前请求就会取消

    let cb;
    config.cancelToken = new CancelToken((callback)=>{
        cb = callback;
    })

    const url = config.url;

    store.commit('ADDCANCELFNMUTATION',{url,cb});

    return config
})

request.interceptors.response.use((response)=>{
    // console.log(response)

    const url = response.config.url;

    store.commit('DELETECANCELFNMUTATION',{url})
    return response.data;
})

export default request