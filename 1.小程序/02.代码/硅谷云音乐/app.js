// app.js
import myAxios from './utils/myAxios';
import hasPermission from './utils/hasPermission';
import utilConfig from './utils/config';
App({
  onLaunch() {
    // 将原本的Page函数存入PageFn变量中,进行缓存
    const PageFn = Page;

    // 将Page函数进行重写
    Page = function(config){
      // 在每个页面的配置对象上添加一个$myAxios属性,属性值就是myAxios函数
      config.$myAxios = myAxios;

      // 在每个页面的配置对象上添加一个$myAxios属性,属性值就是myAxios函数
      config.$hasPermission = hasPermission;



      // 将每个页面的配置对象中的onShow方法,缓存在onShow变量中
      const onShow = config.onShow;

      // 重写每个页面的onShow方法
      config.onShow = function(){

        // 只有是config中checkPermission数组中有记录的页面,才进行权限检查,如果数组中没有,就不做检查
        // 通过页面实例this.route属性,可以知道当前执行onShow生命周期的是哪一个页面
        // console.log(utilConfig.checkPermission)

        // 旧版本:checkPermission数据类型为数组,需要遍历查找
        // if(utilConfig.checkPermission.includes(this.route)){

        // 新版本:checkPermission2数据类型为对象,可以直接使用当前页面路径作为属性名读取结果
        if(utilConfig.checkPermission2[this.route]){

          // 在执行onShow生命周期的时候,第一件事情就是先检测有没有登录
          // 如果没有登录就不执行后续代码,如果有登录才执行后续代码
          // 也就是在此处,对所有的页面的onShow生命周期做出了统一处理,都会执行权限检测
          if(!hasPermission())return;
        }

        // 虽然我们重写了onShow生命周期的代码,但是开发者写的onShow生命周期也要执行,所以此处将this和arguments都传给开发者写的onShow
        // onShow();
        onShow.apply(this,arguments);
      }



      // 使用原先的Page方法+改动之后的config对象来生成页面的实例对象,并返回
      return PageFn(config)
    }
  },
  globalData:{
    // msg:"我是app的初始化数据"
    audioId:null,
    playState:false
  }
})
