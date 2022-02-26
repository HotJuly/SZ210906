// pages/song/song.js
// import PubSub from 'pubsub-js';
const appInstance = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {

        // 用于控制当前页面C3效果
        isPlay: false,

        // 用于存储当前歌曲详细信息
        songObj: {},

        // 用于存储当前歌曲的音频链接
        musicUrl: null,

        // 用于存储当前歌曲的id
        songId: null,

        // 用于存储当前歌曲时间
        currentTime:"00:00",

        // 用于存储当前歌曲总时长
        durationTime:"--:--",

        // 用于控制当前进度条的长度比例
        currentWidth:0
    },

    // 用于执行绑定与背景音频管理器实例对象相关的事件
    addEvent() {
        // 用于监视背景音频是否开始播放
        this.backgroundAudioManager.onPlay(() => {
            // console.log('onPlay')

            // 如果当前正在播放的是A歌曲,但是进入了B歌曲界面,会影响到当前页面的播放状态

            // 判断背景音频和当前页面是否是同一首歌曲,才决定是否需要控制当前页面的播放状态
            if (String(this.data.songId) === String(appInstance.globalData.audioId)) {
                this.setData({
                    isPlay: true
                })
            }

            // 将当前歌曲的播放状态记录在app实例对象上
            appInstance.globalData.playState = true;
        })

        // 用于监视背景音频是否暂停播放
        this.backgroundAudioManager.onPause(() => {
            // console.log('onPause')

            // 将当前歌曲的播放状态都记录在app实例对象上
            appInstance.globalData.playState = false;

            if (String(this.data.songId) === String(appInstance.globalData.audioId)) {
                this.setData({
                    isPlay: false
                })
            }
        })

        // 用于监视背景音频是否有进度更新
        this.backgroundAudioManager.onTimeUpdate(()=>{
            // console.log('onTimeUpdate',this.backgroundAudioManager.currentTime)

            // 获取到当前背景音频的播放进度时间(注意:单位是秒)
            let currentTime = this.backgroundAudioManager.currentTime;

            // 获取到当前背景音频的播放进度时间(注意:单位是秒)
            let durationTime = this.backgroundAudioManager.duration;

            let currentWidth = currentTime/durationTime*100;

            this.setData({
                currentTime:this.$moment(currentTime*1000).format('mm:ss'),
                currentWidth
            })
        })
    },

    // 用于请求歌曲的音频链接
    async getMusicUrl() {
        const {
            data
        } = await this.$myAxios('/song/url', {
            id: this.data.songId
        });
        // console.log('result',result)
        this.setData({
            musicUrl: data[0].url
        })
    },

    // 用于请求歌曲的详细信息
    async getMusicDetail() {
        const {
            songs
        } = await this.$myAxios('/song/detail', {
            ids: this.data.songId
        });
        // console.log('result',result)
        this.setData({
            songObj: songs[0],
            durationTime:this.$moment(songs[0].dt).format("mm:ss")
        })


        // 动态设置当前页面的导航栏标题
        wx.setNavigationBarTitle({
            title: this.data.songObj.name
        })
    },

    // 用于监视用户点击上一首/下一首按钮操作,自动切换对应歌曲
    switchType(event) {
        // console.log('switchType')

        const id = event.currentTarget.id;

        // 发布消息,触发切换歌曲的流程1
        this.$PubSub.publish('switchType', id);
    },

    // 用于监视用户点击播放按钮,并实现歌曲的播放功能
    async handlePlay() {

        // 1.获取到全局唯一的背景音频管理器对象
        // const backgroundAudioManager = wx.getBackgroundAudioManager();

        if (!this.data.musicUrl) {
            await this.getMusicUrl();
        }

        if (this.data.isPlay) {
            // 能进入这里,说明当前背景音频正在播放

            this.backgroundAudioManager.pause();

            // 将当前歌曲的播放状态都记录在app实例对象上
            // appInstance.globalData.playState = false;

        } else {

            // 2.通过背景音频管理器实例对象的API接口,实现自动播放音频
            this.backgroundAudioManager.src = this.data.musicUrl;
            this.backgroundAudioManager.title = this.data.songObj.name;

            // 将当前歌曲的播放状态和歌曲id都记录在app实例对象上
            appInstance.globalData.audioId = this.data.songId;
            // appInstance.globalData.playState = true;
        }

        // 更新isPlay状态,控制页面C3效果切换
        // this.setData({
        //     isPlay:!this.data.isPlay
        // })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
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

        // 由于用户很可能出现进如song页面,但是不听歌,又退出,反复进入的情况
        // 所以此处的请求我们放到开始播放歌曲再发送
        // this.getMusicUrl();


        // 以下代码用于测试app实例对象的使用
        // console.log('appInstance1',appInstance.globalData.msg)
        // appInstance.globalData.msg = "我是修改之后的数据"
        // console.log('appInstance2',appInstance.globalData.msg)

        // 如果正在播放的背景音频与当前页面显示的是同一首歌,那么页面的C3效果自动进入播放状态
        const {
            audioId,
            playState
        } = appInstance.globalData;
        // console.log(1,songId,audioId)
        if (playState && String(songId) === String(audioId)) {
            this.setData({
                isPlay: true
            })
        }


        // 将消息订阅放在onLoad中,那么每次挂载页面才会订阅一次
        this.token = this.$PubSub.subscribe('sendId', async (msg, songId) => {
            // console.log('subscibe sendId',msg,songId)

            this.setData({
                songId
            })

            const promise1 = this.getMusicDetail();

            const promise2 = this.getMusicUrl();

            await Promise.all([promise1, promise2]);

            this.backgroundAudioManager.src = this.data.musicUrl;
            this.backgroundAudioManager.title = this.data.songObj.name;

            // 将当前歌曲的播放状态和歌曲id都记录在app实例对象上
            appInstance.globalData.audioId = this.data.songId;
            appInstance.globalData.playState = true;

            this.setData({
                isPlay: true
            })
        })

        this.addEvent();

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
        this.$PubSub.unsubscribe(this.token);
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