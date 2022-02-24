export default function(){
    // 获取到Storage中存储的cookie数据
    const cookie = wx.getStorageSync('cookie');
    if(!cookie){
        // 能进入该判断,就说明用户没有cookie数据,也就是没有登录

        wx.showModal({
            title:"请先登录",
            content:"该功能需要登录账号",
            confirmText:"去登陆",
            cancelText:"回到首页",
            success({confirm,cancel}){
                // console.log('success',data)
                // 无论用户点击确定还是取消,都会触发成功的回调函数
                // 成功回调的形参中可以得到confirm,cancel属性用于判断用户点击的按钮是确定还是取消
                if(confirm){
                    wx.redirectTo({
                      url: '/pages/login/login',
                    })
                }else{
                    wx.switchTab({
                      url: '/pages/index/index',
                    })
                }
            },
            fail(){
                console.log('fail')
            }
        })

        return false;
    }

    return true;
}