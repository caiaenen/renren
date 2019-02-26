//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    //   imgSrc:[
    //   {id:'1',isFavorite:false,src:'../img/详情/01.png'},
    //   {id:'2',isFavorite:false,src:'../img/详情/02.png'},
    //   {id:'3',isFavorite:false,src:'../img/详情/03.png'},
    //   {id:'4',isFavorite:false,src:'../img/详情/04.png'},
    //   {id:'5',isFavorite:false,src:'../img/详情/05.png'},
    // ],
    // userInfo: null,
    //     imgUrls:[
    //   {id:"1",src:'../img/swiper/01.png',isFavorite:false},
    //   {id:"2",src:'../img/swiper/02.png',isFavorite:false},
    //   {id:"3",src:'../img/swiper/03.png',isFavorite:false},
    //   {id:"4",src:'../img/swiper/04.png',isFavorite:false},
    // ],
    favo:[],
  }
})