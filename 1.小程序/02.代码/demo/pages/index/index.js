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
        msg:"我是初始化的数据"
    },

    // Vue声明回调函数写法
    // methods:{
    //     handleClick(){}
    // }

    changeMsg(){
        this.setData({
            msg:"我是修改之后的数据!!!!!"
        })
    },

    handleClick(){
        // console.log(1,'handleClick')

        wx.navigateTo({
        //   url: '../log/log',
          url: '/pages/log/log',
        })

        // wx.redirectTo({
        //   url: '../log/log',
        // //   url: '/pages/log/log',
        // })
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
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

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