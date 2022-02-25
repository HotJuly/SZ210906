// pages/song/song.js
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
        musicUrl:null
    },

    // 用于监视用户点击播放按钮,并实现歌曲的播放功能
    handlePlay(){

        // 1.获取到全局唯一的背景音频管理器对象
        const backgroundAudioManager = wx.getBackgroundAudioManager();

        if(this.data.isPlay){
            // 能进入这里,说明当前背景音频正在播放

            backgroundAudioManager.pause();
            
        }else{
    
            // 2.通过背景音频管理器实例对象的API接口,实现自动播放音频
            backgroundAudioManager.src = this.data.musicUrl;
            backgroundAudioManager.title = this.data.songObj.name;
    
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

        const {songs} = await this.$myAxios('/song/detail',{ids:songId});
        // console.log('result',result)
        this.setData({
            songObj:songs[0]
        })

        // 动态设置当前页面的导航栏标题
        wx.setNavigationBarTitle({
            title:this.data.songObj.name
        })

        
        const {data} = await this.$myAxios('/song/url',{id:songId});
        // console.log('result',result)
        this.setData({
            musicUrl:data[0].url
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