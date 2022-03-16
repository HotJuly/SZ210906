function MVVM(options) {

    /*
        看源码一定要分清楚,this是谁,当前接收的参数是什么
        this->Vue组件实例对象this->vm
        options->
                {
                    el: "#app",
                    data: {
                        msg: "hello mvvm",
                        person:{
                            name:"xiaoming",
                            msg:"123"
                        },
                    }
                }
    
    */

    this.$options = options;

    // var data = (this._data = this.$options.data);
    // var data = this.$options.data;
    // 此处的_data其实就是Vue2中的$data
    var data = this._data = this.$options.data;

    var me = this; 

    
    Object.keys(data).forEach(function(key) {
        me._proxy(key);
    });

    /*
        MVVM源码第一部分:数据代理
        语法:this.msg->this._data.msg
        代理:就是自身身上并没有真实的数据,但是可以找源对象获取执行数据结果,并进行返回
        目的:为了方便开发者读取data对象身上的数据,减少._data的书写
            有些类似于axios响应拦截器中的return response.data;
        代理次数:2次(次数与data对象具有多少个直系属性有关,不会代理后代属性)

        其实数据代理在我个人认为,他不能算是响应式原理的一部分,他并不是不可或缺的一部分
    
    */

    // Object.keys是用于获取直系属性组成的数组
    // ["msg","person"].forEach(function(key) {
    //     vm._proxy("msg");
    // });

    /*
        响应式的含义
            当一个属性被修改之后,页面会自动展示出最新的结果

        需求:当一个属性被修改之后,页面会自动展示出最新的结果
        拆解:
            1.如何知道一个属性是否被修改了
                通过Object.defineProperty可以将一个属性变成get和set方法,当有人修改该属性就会触发该属性的set方法

            2.如何控制页面渲染出最新的结果
                肯定涉及到了DOM的CRUD操作
    
    */

    /*
        MVVM源码第二部分:数据劫持
        劫持:将某个人强行带走,限制这个人的人身自由,并且胁迫他做一些原本不想做的事情
        次数:4次(数据劫持的次数与data对象中属性的个数有关)
        目的:就是重写data中的所有属性,将所有属性变为get/set模式,从而监视所有属性的修改
        流程:
            1.执行observe函数,判断当前data属性中是否有值,而且是否是个对象
            2.如果是个对象,就开始进行数据劫持
            3.使用Object.keys获取到data对象所有的直系属性,并执行defineReactive
            4.在执行defineReactive的时候,会生成一个对应的dep对象
                同时对当前属性的属性值进行深度劫持
                如果被劫持的属性值也是一个对象,会继续劫持该对象的所有属性
            5.在defineReactive中会重写data对象身上所有的属性,将其从value值模式修改为get/set模式
                如果有人修改当前属性,就会触发get方法,从而得知该属性被修改了
                注意点:
                    1.属性的value值会被闭包进行缓存,防止原先数据的丢失
                    2.如果更新的新值等于旧值,那么后续代码将不会执行,也就是说页面不会产生任何的变化
                    3.如果更新的新值是一个对象,那么会对该对象中所有的属性进行数据劫持,将其变为响应式属性
    
    */
    observe(data, this);
    // observe(data, vm);
    
    this.$compile = new Compile(options.el || document.body, this)
}

MVVM.prototype = {
    $watch: function(key, cb, options) {
        new Watcher(this, key, cb);
    },

    _proxy: function(key) {
        //     vm._proxy("msg");
        // this->vm , key=>"msg"
        var me = this;

        Object.defineProperty(me, key, {
            configurable: false, //不能重复定义
            enumerable: true, //可以遍历
            get: function proxyGetter() {
                return me._data[key];
            },
            set: function proxySetter(newVal) {
                me._data[key] = newVal;
            }
        });

        // vm身上并没有msg属性,也就是说此处在新增一个属性
        // 属性分为两种,一种具有value值,一种只有get和set方法
        // 具有value值的属性才是真材实料,而具有get,set方法的属性是不存有数据的
        // 如果有人读取一个属性,如果该属性只有get和set方法,那么会触发get,如果修改该属性,就会触发set方法
        // obj.name=123
        // Object.defineProperty(vm, "msg", {
        //     configurable: false, //不能重复定义
        //     enumerable: true, //可以遍历
        //     get: function proxyGetter() {
        //         return vm._data["msg"];
        //     },
        //     set: function proxySetter(newVal) {
        //         vm._data["msg"] = newVal;
        //     }
        // });

    }
};