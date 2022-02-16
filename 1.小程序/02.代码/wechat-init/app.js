// app.js
// App()是用于注册小程序实例对象的
// 必须在 app.js 中调用，必须调用且只能调用一次
// 如果多次调用App函数,很可能导致当前项目显示错误
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
