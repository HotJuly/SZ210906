// pages/login/login.js
import myAxios from '../../utils/myAxios';
Page({

    /**
     * 页面的初始数据
     */
    data: {

        // 用于存储用户的手机号码
        phone: "17688197777",

        // 用于存储用户的密码
        password: "",

        form: {
            name: 123
        }
    },

    // 用于监视用户点击登录按钮操作,实现登录帐号功能
    async handleLogin() {
        // console.log('handleLogin')
        /*
            登录流程:
                1.收集数据
                2.处理数据
                3.表单校验
                    -前端校验
                        如果用户输入的数据不满足条件就不发送请求,并弹窗提示用户
                        可以减小服务器的压力,变相的提高代码性能

                    -后端校验
                4.发送登录请求
                5.服务器返回响应
                    根据服务器返回的数据进行不同的操作
                    
                    状态码:
                        400 ->  帐号格式错误
                        501 ->  帐号不存在
                        502 ->  密码错误
                        200 ->  登陆成功
        
        */

        let {
            phone,
            password
        } = this.data;

        phone = phone.trim();
        password = password.trim();

        if (!phone) {
            // 能进入这里,说明用户没有输入手机号
            wx.showToast({
                title: "请输入手机号",
                icon: "error"
            });
            return;
        }

        if (!password) {
            // 能进入这里,说明用户没有输入密码
            wx.showToast({
                title: "请输入密码",
                icon: "error"
            })
            return;
        }

        const result = await myAxios("/login/cellphone", {
            phone,
            password,
            _isLogin:true
        });

        const code = result.code;

        // if (result.code === 200) {
        //     // 能进入这里,就说明用户登录成功
        //     // 那么就弹窗提示用户,并跳转到个人中心页面
        // } else if (result.code === 400) {
        //     // 能进入这里,就说明用户手机号格式错误
        //     wx.showToast({
        //         title: "帐号格式不正确",
        //         icon: "error"
        //     })
        // } else if (result.code === 501) {
        //     // 能进入这里,就说明用户手机号不存在
        //     wx.showToast({
        //         title: "该账号不存在",
        //         icon: "error"
        //     })
        // } else if (result.code === 502) {
        //     // 能进入这里,就说明用户密码错误
        //     wx.showToast({
        //         title: "密码不正确",
        //         icon: "error"
        //     })
        // }

        // 使用策略模式写法(编程设计模式)
        // 策略:根据不同的情况,准备不同的方法解决

        const codeFn = {
            200() {
                wx.showToast({
                    title: "登陆成功,即将跳转",
                    icon:"none"
                });
                wx.switchTab({
                    url:"/pages/personal/personal"
                })
                // console.log('result',result)

                wx.setStorage({
                    key:"userInfo",
                    data:result.profile
                });
            },
            400() {
                // 能进入这里,就说明用户手机号格式错误
                wx.showToast({
                    title: "帐号格式不正确",
                    icon: "error"
                })
            },
            501() {
                // 能进入这里,就说明用户手机号不存在
                wx.showToast({
                    title: "该账号不存在",
                    icon: "error"
                })
            },
            502() {
                // 能进入这里,就说明用户密码错误
                wx.showToast({
                    title: "密码不正确",
                    icon: "error"
                })
            }
        }

        codeFn[code]&&codeFn[code]();

        // console.log(result)
    },

    // 专门用于收集用户输入的手机号码
    handlePhone(event) {
        // 通过event.detail.value可以读取到input框的数据
        // console.log('handlePhone',event)
        let value = event.detail.value;
        this.setData({
            phone: value
        })
    },

    // 专门用于收集用户输入的密码
    handlePassWord(event) {
        // 通过event.detail.value可以读取到input框的数据
        // console.log('handlePhone',event)
        let value = event.detail.value;
        this.setData({
            password: value
        })
    },

    // 专门用于收集用户输入的内容
    handleInput(event) {
        // 小程序中,想要通过标签给事件回调函数传参,需要通过自定义属性实现
        // 通过event.detail.value可以读取到input框的数据
        // console.log('handleInput',event)

        // 通过自定义属性得知,当前是谁触发了该回调函数
        let type = event.target.dataset.type

        // 获取用户输入框中的内容
        let value = event.detail.value;

        // 更新对应的data属性值
        this.setData({
            [type]: value
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