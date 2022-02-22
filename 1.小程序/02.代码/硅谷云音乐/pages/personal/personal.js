// pages/personal/personal.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 用于控制页面上.cover-container组件的移动
        moveDistance:0,

        // 用于控制页面上.cover-container组件的过渡效果
        moveTransition:"",

        // 用于存储用户的个人信息
        userInfo:{}
    },

    // 用于跳转到登录界面
    toLogin(){
        // console.log('toLogin')
        wx.navigateTo({
            url:"/pages/login/login"
        })
    },

    // 用于监视用户手指按下事件
    handleTouchStart(event){
        // console.log('handleTouchStart',event)
        this.startY = event.touches[0].clientY;
        this.setData({
            moveTransition:""
        })
    },

    // 用于监视用户手指移动事件
    handleTouchMove(event){
        let moveY = event.touches[0].clientY;
        let moveDistance = moveY - this.startY
        // console.log('handleTouchMove',moveDistance)

        // 当移动距离大于0小于80才需要移动

        if(moveDistance<0||moveDistance>80)return;

        this.setData({
            moveDistance
        })
    },

    // 用于监视用户手指抬起事件
    handleTouchEnd(event){
        this.setData({
            moveDistance:0,
            moveTransition:"transform 1s"
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
        // 读取Storage中存储的用户信息
        // 如果有用户信息,就更新到data中,并在页面上进行展示
        let userInfo = wx.getStorageSync('userInfo');
        if(userInfo){
            this.setData({
                userInfo
            })
        }
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