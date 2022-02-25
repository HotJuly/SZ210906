// pages/song/song.js
// import PubSub from 'pubsub-js';
const appInstance = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {

        // 用于控制当前页面C3效果
        isPlay:false,

        // 用于存储当前歌曲详细信息
        songObj:{},

        // 用于存储当前歌曲的音频链接
        musicUrl:null,

        // 用于存储当前歌曲的id
        songId:null
    },

    // 用于请求歌曲的音频链接
    async getMusicUrl(){
        const {data} = await this.$myAxios('/song/url',{id:this.data.songId});
        // console.log('result',result)
        this.setData({
            musicUrl:data[0].url
        })
    },

    // 用于请求歌曲的详细信息
    async getMusicDetail(){
        const {songs} = await this.$myAxios('/song/detail',{ids:this.data.songId});
        // console.log('result',result)
        this.setData({
            songObj:songs[0]
        })

        // 动态设置当前页面的导航栏标题
        wx.setNavigationBarTitle({
            title:this.data.songObj.name
        })
    },

    // 用于监视用户点击上一首/下一首按钮操作,自动切换对应歌曲
    switchType(event){
        // console.log('switchType')

        const id = event.currentTarget.id;

        this.$PubSub.subscribe('sendId',async (msg,songId)=>{
            // console.log('subscibe sendId',msg,songId)

            this.setData({
                songId
            })

            const promise1 = this.getMusicDetail();

            const promise2 = this.getMusicUrl();

            await Promise.all([promise1,promise2]);

            this.backgroundAudioManager.src = this.data.musicUrl;
            this.backgroundAudioManager.title = this.data.songObj.name;

            this.setData({
                isPlay:true
            })
        })

        // 发布消息,触发切换歌曲的流程1
        this.$PubSub.publish('switchType',id);
    },

    // 用于监视用户点击播放按钮,并实现歌曲的播放功能
    handlePlay(){

        // 1.获取到全局唯一的背景音频管理器对象
        // const backgroundAudioManager = wx.getBackgroundAudioManager();

        if(this.data.isPlay){
            // 能进入这里,说明当前背景音频正在播放

            this.backgroundAudioManager.pause();
    
            // 将当前歌曲的播放状态都记录在app实例对象上
            appInstance.globalData.playState = false;
            
        }else{
    
            // 2.通过背景音频管理器实例对象的API接口,实现自动播放音频
            this.backgroundAudioManager.src = this.data.musicUrl;
            this.backgroundAudioManager.title = this.data.songObj.name;
    
            // 将当前歌曲的播放状态和歌曲id都记录在app实例对象上
            appInstance.globalData.audioId = this.data.songId;
            appInstance.globalData.playState = true;
        }

        // 更新isPlay状态,控制页面C3效果切换
        this.setData({
            isPlay:!this.data.isPlay
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad:async function (options) {
        // console.log('options',options)
        // const song = JSON.parse(options.song)
        // console.log('songId',options.song)

        // 通过query实现路由传参,将歌曲id传递给当前song页面
        const songId = options.songId;

        this.backgroundAudioManager = wx.getBackgroundAudioManager();

        this.setData({
            songId
        })

        this.getMusicDetail();

        this.getMusicUrl();


        // 以下代码用于测试app实例对象的使用
        // console.log('appInstance1',appInstance.globalData.msg)
        // appInstance.globalData.msg = "我是修改之后的数据"
        // console.log('appInstance2',appInstance.globalData.msg)

        // 如果正在播放的背景音频与当前页面显示的是同一首歌,那么页面的C3效果自动进入播放状态
        const {audioId,playState} = appInstance.globalData;
        if(playState&&songId === audioId){
            this.setData({
                isPlay:true
            })
        }

        // console.log('PubSub',PubSub)
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