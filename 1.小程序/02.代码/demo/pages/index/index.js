// pages/index/index.js
// Page()会生成一个页面实例对象
Page({

    /**
     * 页面的初始数据
     */
    /*
        面试题:如何深拷贝一个对象
        乞丐版:JSON.parse(JSON.stringify(data))
            缺点:
                1.无法拷贝函数
                2.会丢失原型链,因为生成的对象一定是Object的实例对象
                3.特殊数据类型也无法拷贝
                    Map->对象
                    Set->数组
    
    */
    data: {
        msg:"我是初始化的数据",
        userInfo:{}
    },

    // Vue声明回调函数写法
    // methods:{
    //     handleClick(){}
    // }

    // 用于获取用户授权信息(最新版本)
    getUserProfile(){
        // console.log('getUserProfile')
        wx.getUserProfile({
            desc:"用于测试小程序项目",
            success:(detail)=>{
                // console.log(detail)
                this.setData({
                    userInfo:detail.userInfo
                })
            },
            fail(error){
                console.log(error)
            }
        })
    },

    // 用于获取用户授权信息(中期版本)
    getUserInfo(res){
        // 一般框架想要传递参数,两种方法
        // 1.通过this
        // 2.通过形参
        console.log('getUserInfo',res)

        /*
            判断是否获取到了授权信息,如果获取到授权信息就将授权信息展示在页面上
                通过res.detail.userInfo进行判断
        */
       const userInfo = res.detail.userInfo;
       if(userInfo){
            this.setData({
                userInfo
            })
       }
    },

    changeMsg(){
        this.setData({
            msg:"我是修改之后的数据!!!!!"
        })
    },

    handleClick(){
        // console.log(1,'handleClick')

        // wx.navigateTo({
        // //   url: '../log/log',
        //   url: '/pages/log/log',
        // })

        wx.redirectTo({
          url: '../log/log',
        //   url: '/pages/log/log',
        })
    },
    handleParent(){
        console.log(2,'handleParent')
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log('有数据代理',this.msg)
        // console.log('没有数据代理',this.data.msg)

        // console.log(this.data.msg)
        // // this.data.msg="我是修改之后的数据"
        // this.setData({
        //     msg:"我是修改之后的数据"
        // })
        // console.log(this.data.msg)

        // debugger
        // console.log('------ onLoad ------')

        // wx.getUserInfo({
        //     success:(detail)=>{
        //         // console.log(detail)
        //         this.setData({
        //             userInfo:detail.userInfo
        //         })
        //     }
        // })

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // console.log('------ onReady ------')
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // console.log('------ onShow ------')
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log('------ onHide ------')
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        console.log('------ onUnload ------')
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})