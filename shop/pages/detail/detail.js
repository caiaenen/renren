// pages/detail/detail.js
var startX, endX;
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
      imgSrc:[
      {id:'1',isSelect:false,isFavorite:false,src:'../img/详情/01.png',selectUrl:"../img/详情/select.png",source:"../img/详情/favorite.png",favorite:'../img/详情/favorite.png',noFavorite:'../img/详情/noFavorite.png'},
      {id:'2',isSelect:false,isFavorite:false,src:'../img/详情/02.png',selectUrl:"../img/详情/select.png",source:"../img/详情/favorite.png",favorite:'../img/详情/favorite.png',noFavorite:'../img/详情/noFavorite.png'},
      {id:'3',isSelect:false,isFavorite:false,src:'../img/详情/03.png',selectUrl:"../img/详情/select.png",source:"../img/详情/favorite.png",favorite:'../img/详情/favorite.png',noFavorite:'../img/详情/noFavorite.png'},
      {id:'4',isSelect:false,isFavorite:false,src:'../img/详情/04.png',selectUrl:"../img/详情/select.png",source:"../img/详情/favorite.png",favorite:'../img/详情/favorite.png',noFavorite:'../img/详情/noFavorite.png'},
      {id:'5',isSelect:false,isFavorite:false,src:'../img/详情/05.png',selectUrl:"../img/详情/select.png",source:"../img/详情/favorite.png",favorite:'../img/详情/favorite.png',noFavorite:'../img/详情/noFavorite.png'},
    ],
        imgUrls:[
      {id:"1",src:'../img/swiper/01.png',isSelect:false,isFavorite:false,selectUrl:"../img/详情/select.png",source:"../img/详情/favorite.png",favorite:'../img/详情/favorite.png',noFavorite:'../img/详情/noFavorite.png'},
      {id:"2",src:'../img/swiper/02.png',isSelect:false,isFavorite:false,selectUrl:"../img/详情/select.png",source:"../img/详情/favorite.png",favorite:'../img/详情/favorite.png',noFavorite:'../img/详情/noFavorite.png'},
      {id:"3",src:'../img/swiper/03.png',isSelect:false,isFavorite:false,selectUrl:"../img/详情/select.png",source:"../img/详情/favorite.png",favorite:'../img/详情/favorite.png',noFavorite:'../img/详情/noFavorite.png'},
      {id:"4",src:'../img/swiper/04.png',isSelect:false,isFavorite:false,selectUrl:"../img/详情/select.png",source:"../img/详情/favorite.png",favorite:'../img/详情/favorite.png',noFavorite:'../img/详情/noFavorite.png'},
    ],
    
    left:0,
    topImg:'',
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

      for(let i=0;i<s.length;i++){
        sum+=s[i].count*s[i].price
      }
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
        if (this.data.left-move>350)
        {
            this.setData({
                left:"350"
            })
        }else if(this.data.left-move<0){
            this.setData({
                left:"0"
            })
        }else{
            this.setData({
                    left:move
                })
        }
    },
    end:function(e){
      
    },
    changeSlt:function(e){
      var s=this.data.imgSrc
      var id=e.target.dataset.id
      for(var i=0;i<s.length;i++){
        if(i==id){
          s[i].isSelect=true;
        }else{
          s[i].isSelect=false
        }
      }
      this.setData({
        imgSrc:s
      })
    },
    changeFavo:function(e){
      var s=this.data.imgSrc
      console.log(app.globalData.favo)
      for(var i=0;i<s.length;i++){
         var sr=s[i].src
        if(s[i].isSelect){
          if(s[i].isFavorite==true){
             s[i].isFavorite=false;
             for( var j=0;j<app.globalData.favo.length;j++){
              if(app.globalData.favo[j].src==sr){
                app.globalData.favo.pop(s[i])
              }
            }
          }
        else{
          s[i].isFavorite=true
          if(app.globalData.favo.length>0){
            for( j=0;j<app.globalData.favo.length;j++){
              console.log(app.globalData.favo[j].src)
              if(app.globalData.favo[j].src==sr){
                break;
              }
              app.globalData.favo.push(s[i])
              break;
            }
          }
          else if(app.globalData.favo.length==0){
            app.globalData.favo.push(s[i])
            break;
          }
        }}
      }
      this.setData({
        imgSrc:s
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var img=this.data.imgUrls[options.id-1]
    img.id='0';
    img.isSelect="true"
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