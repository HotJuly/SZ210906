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

    // 用于监视视频开发播放或者继续播放
    handlePlay(event){
        // console.log('handlePlay',event)
        // console.log(this.oldVId)

        // 1.通过event.currentTarget.id可以获取到当前触发播放事件的video组件id
        let vid = event.currentTarget.id;

        // this.oldVId的判断是为了防止没有上一个视频(第一次播放的情况)
        // this.oldVId!==vid的判断是为了防止上一个视频和当前视频是同一个视频(用户重复播放同一个视频的情况)
        if(this.oldVId&&this.oldVId!==vid){
            // 3.先使用API获取到video的上下文对象
            let videoContext = wx.createVideoContext(this.oldVId);
    
            // 4.使用上下文对象的API停止某个视频的播放
            videoContext.pause();
        }



        // 2.在页面实例对象身上添加一个oldVId属性,用于记录上一个视频的id
        this.oldVId = vid;
    },

    // 用于测试video组件相关API
    testApi(){
        // console.log('testApi')

		// 1.先使用API获取到video的上下文对象
        let videoContext = wx.createVideoContext("62CBA2172DF33DA3273A3BBFC7094902");

        // 2.使用上下文对象的API停止某个视频的播放
        videoContext.pause();
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