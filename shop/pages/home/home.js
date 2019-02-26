// pages/home/home.js
Page({
  goBuy(){wx.navigateTo({
      url: '../../pages/none/none'
    })
  },
  goInfo(event){
    console.log(event)
    // wx.navigateTo({
    //   url:''
    // })
  }, 

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      {id:"1",src:'../img/swiper/01.png'},
      {id:"2",src:'../img/swiper/02.png'},
      {id:"3",src:'../img/swiper/03.png'},
      {id:"4",src:'../img/swiper/04.png'},
    ],
    cardImg:[
      {id:"1",src:'../img/swiper/01.png',title:"很高兴新年有你"},
      {id:"2",src:'../img/swiper/02.png',title:"20岁 喜欢喝咖啡"},
      {id:"3",src:'../img/swiper/03.png',title:"给爱的TA"},
      {id:"4",src:'../img/swiper/04.png',title:"感谢有你"},
    ],
    endSrc:'../img/swiper/end.png',
  
  },
  tapName:function(e) {
    var id=e.target.dataset.id
    wx.navigateTo({
      url:'../../pages/detail/detail?id='+id
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