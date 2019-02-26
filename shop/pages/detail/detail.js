// pages/detail/detail.js
var startX, endX;
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    left:0,
    imgUrls:[
      {id:"1",src:'../img/swiper/01.png'},
      {id:"2",src:'../img/swiper/02.png'},
      {id:"3",src:'../img/swiper/03.png'},
      {id:"4",src:'../img/swiper/04.png'},
    ],
    topImg:'',
    imgSrc:[
      {id:'1',src:'../img/详情/01.png'},
      {id:'2',src:'../img/详情/02.png'},
      {id:'3',src:'../img/详情/03.png'},
      {id:'4',src:'../img/详情/04.png'}, 
      {id:'5',src:'../img/详情/05.png'},
    ],
    itemSrc:[
      {id:'1',src:'../img/详情/cup.png',title:'当季特饮',price:'30',count:'0', addIcon:'../img/详情/add.png',subIcon:'../img/详情/sub.png'},
      {id:'2',src:'../img/详情/cup.png',title:'焦糖玛奇朵',price:'24',count:'0', addIcon:'../img/详情/add.png',subIcon:'../img/详情/sub.png'},
      {id:'3',src:'../img/详情/cup.png',title:'美式咖啡',price:'35',count:'0', addIcon:'../img/详情/add.png',subIcon:'../img/详情/sub.png'},
      {id:'4',src:'../img/详情/cup.png',title:'摩卡',price:'40',count:'0', addIcon:'../img/详情/add.png',subIcon:'../img/详情/sub.png'},
      {id:'5',src:'../img/详情/cup.png',title:'拿铁',price:'33',count:'0', addIcon:'../img/详情/add.png',subIcon:'../img/详情/sub.png'},
      {id:'6',src:'../img/详情/cup.png',title:'星礼卡1',price:'50',count:'0', addIcon:'../img/详情/add.png',subIcon:'../img/详情/sub.png'},
      {id:'7',src:'../img/详情/cup.png',title:'星礼卡2',price:'100',count:'0', addIcon:'../img/详情/add.png',subIcon:'../img/详情/sub.png'},
      {id:'8',src:'../img/详情/cup.png',title:'星礼卡3',price:'150',count:'0', addIcon:'../img/详情/add.png',subIcon:'../img/详情/sub.png'},
      {id:'9',src:'../img/详情/cup.png',title:'星礼卡4',price:'200',count:'0', addIcon:'../img/详情/add.png',subIcon:'../img/详情/sub.png'},
    ],
   
    selectN:"0",
    sumPrice:'0'
    
  },
  addItem:function(e){
      var sum=0
      var id=e.target.dataset.info.id-1;
      this.data.itemSrc[id].count++
      var nowItem=this.data.itemSrc
      var s=this.data.itemSrc
      this.setData({
        itemSrc:nowItem
      })
      console.log(s.length)

      for(let i=0;i<s.length;i++){
        console.log(s[i].count)
        sum+=s[i].count*s[i].price
      }
      console.log(sum)
     this.setData({
        sumPrice:sum
     })
    },
     subItem:function(e){
      var id=e.target.dataset.info.id-1;
      this.data.itemSrc[id].count--
      var nowItem=this.data.itemSrc
      var sum =0
      var s=this.data.itemSrc
      for(let i=0;i<s.length;i++){
        sum+=s[i].count*s[i].price
      }
     this.setData({
        itemSrc:nowItem,
        sumPrice:sum
     })
    },
    start:function(e){
      startX = e.touches[0].pageX; // 获取触摸时的原点
    },
    move:function(e){
      endX = e.touches[0].pageX; // 获取触摸时的原点
      var move=endX-startX;
     var query = wx.createSelectorQuery();
    //选择id
    // var that=this
    // query.select('.sImg').boundingClientRect(function (rect) {
    //   console.log(rect)
    //   if(rect.right>390){
    //     rect.right=390
    //   }else if(rect<100){
    //     rect.right=100
    //   }
    //   else {
    //     that.setData({
    //       left:move
    //     })
    //   }
    // }).exec();

      
      
    },

    end:function(e){
      
    },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var img=this.data.imgUrls[options.id-1]
    img.id='0'
    this.data.imgSrc.unshift(img)
    var nowImg=this.data.imgSrc
    this.setData({
      topImg:img,
      imgSrc:nowImg
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