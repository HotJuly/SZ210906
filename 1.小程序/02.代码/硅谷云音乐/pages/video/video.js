// pages/video/video.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 用于存储当前页面的导航栏数据
        navList:[],

        // 用于控制下划线的显示
        navId:null,

        // 用于存储视频列表相关数据
        videoList:[]
    },

    // 专门用于请求视频列表数据
    async getVideoList(){

        // 每次请求新的列表之前,先清空旧的数据,实现页面白屏效果,优化用户体验
        this.setData({
            videoList:[]
        })

        const result2 = await this.$myAxios('/video/group',{
            id:this.data.navId
        })
        // console.log(2);

        this.setData({
            videoList:result2.datas.map((item)=>{
                return item.data
            })
        })
    },

    // 用于修改navId,从而控制下划线的显示
    async changeNavId(event){
        this.setData({
            navId:event.currentTarget.dataset.id
            // navId:event.target.dataset.id
        })

        // 弹出loading,优化用户体验
        wx.showLoading({
            title:"加载中...",
            mask:true
        });

        // console.log(1);


        await this.getVideoList();

        // 隐藏loading
        wx.hideLoading();
        
        // console.log(3);
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
    onShow:async function () {
        const result = await this.$myAxios("/video/group/list");
        // console.log('result',result)
        this.setData({
            navList:result.data.slice(0,13),
            navId:result.data[0].id
        })

        this.getVideoList();
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