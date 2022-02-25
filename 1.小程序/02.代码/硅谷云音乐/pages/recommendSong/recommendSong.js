// pages/recommendSong/recommendSong.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

        // 用于存储当前月份
        month:"--",

        // 用于存储当前日期
        day:"--",

        // 用于存储每日推荐的歌曲数据
        recommendList:[]
    },

    // 用于跳转到song页面
    toSong(event){
        const song = event.currentTarget.dataset.song;
        // console.log('song',song)

        // 小程序路由传参只支持query传参
        // 小程序的url具有长度限制,当前的song对象属性过多,无法全部传递过去
        wx.navigateTo({
            url:"/pages/song/song?songId="+song.id
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad:async function (options) {
        // 虽然当前页面有时候离开时,不会卸载当前页面,但是当前页面的数据更新频率缓慢,不需要频繁请求

        const date = new Date();

        // getMonth的返回值范围是0-11,其中的0代表的是1月份
        const month = date.getMonth() + 1;
        // getDay用于获取本周的第几天,getDate用于获取本月第几天
        const day = date.getDate();

        this.setData({
            month,
            day
        })

        const {recommend} = await this.$myAxios('/recommend/songs');
        // console.log('result',result)
        this.setData({
            recommendList:recommend
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