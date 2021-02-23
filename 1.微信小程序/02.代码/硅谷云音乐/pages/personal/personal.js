// pages/personal/personal.js
import ajax from '../../utils/ajax.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    moveDistance:0,
    userInfo:{},
    playList:[]
  },
  handleTouchStart(event){
    /*
      changedTouches
        记录当前屏幕上正在发生变化的手指
      touches
        记录当前屏幕上所有的手指
    */
    this.startY = event.touches[0].clientY;
    this.setData({
     moveTransition:"none" 
    })
    // console.log('handleTouchStart', event.touches[0].clientY)
  },

  handleTouchMove(event) {
    let moveY = event.touches[0].clientY;
    // console.log('handleTouchMove', event.touches[0].clientY)
    let moveDistance = moveY-this.startY;
    if(moveDistance>0&&moveDistance<80){
      this.setData({
        moveDistance
      })
    }
    // console.log(moveDistance)
  },

  handleTouchEnd(){
    this.setData({
      moveDistance:0,
      moveTransition: "transform 400ms" 
    })
  },

  toLogin(){
    if(this.data.userInfo.nickname)return;
    wx.navigateTo({
      url: '/pages/login/login'
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
  onShow: async function () {
    let userInfoStr = wx.getStorageSync("userInfo");
    // console.log(1, userInfoStr)
    if (userInfoStr) {
      let userInfo = JSON.parse(userInfoStr);
      // console.log(userInfo)
      this.setData({
        userInfo
      })
      let result  = await ajax('/user/record',{
        uid: userInfo.userId,
        type:1
      });
      result = result.weekData.map(function(item,index){
        return item.song.al.picUrl
      })
      // console.log(result)
      this.setData({
        playList: result
      })
      // console.log(result)
    }
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