// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 该数组用于存储首页轮播图数据
        banners: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        /*
            1.在哪发
                如果是Vue的话,一般就是created或者mounted
                进入阶段的生命周期都可以发送,onLoad

            2.怎么发
                由于小程序并没有遵守W3C的规范,所以没有BOM和DOM
                所以此处无法使用ajax发送请求

                API:wx.request(Object object)

            3.往哪发
                看接口文档
                请求三要素
                    -请求方式
                    -请求地址
                    -请求参数
        */

        // console.log('wx', wx)
        wx.request({
            url: "http://localhost:3000/banner",
            data: {
                type: 2
            },
            success: (res) => {
                //    此处返回的res是响应报文对象,其中包括了响应头和响应体数据
                // 我们只需要响应体数据
                // console.log(res.data)
                this.setData({
                    banners: res.data.banners
                })
            }
        })
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