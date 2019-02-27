// pages/collect/collect.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isF:false,
    it:app.globalData.favo

  },
  toColllect:function(){
    var id=1
    wx.navigateTo({
       url:'../../pages/detail/detail?id='+id
    })
  },
  change:function(e){
    var s=this.data.it
    console.log(e.target.dataset.id,s)
    for(var i=0;i<this.data.it.length;i++){
      if(s[i].id==e.target.dataset.id)
      {
        s[i].isFavorite=false
        this.setData({
          it:s
        })
        app.globalData.favo.pop(app.globalData.favo[i])
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.globalData.favo.length){
      this.setData({
        isF:true,
        it:app.globalData.favo
      })
    }
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