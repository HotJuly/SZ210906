// app.js
import myAxios from './utils/myAxios';
App({
  onLaunch() {
    // 将原本的Page函数存入PageFn变量中,进行缓存
    const PageFn = Page;

    // 将Page函数进行重写
    Page = function(config){
      // 在每个页面的配置对象上添加一个$myAxios属性,属性值就是myAxios函数
      config.$myAxios = myAxios;

      // 使用原先的Page方法+改动之后的config对象来生成页面的实例对象,并返回
      return PageFn(config)
    }
  }
})
