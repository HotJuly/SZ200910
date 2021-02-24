// pages/recommendSong/recommendSong.js
import ajax from '../../utils/ajax.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    month:"--",
    day:"--",
    recommendList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    let date = new Date();
    // let date = Date.now();
    // console.log(date)
    let month = date.getMonth()+1;
    // console.log(month)
    let day = date.getDate()
    // console.log(day)
    this.setData({
      month,
      day
    })


    // 对用户的登录状态进行判断
    if (wx.getStorageSync("cookie")) {
      let recommendData = await ajax('/recommend/songs');
      // console.log(recommendData.recommend)
      this.setData({
        recommendList: recommendData.recommend.slice(0, 14)
      })
    }else{
      // 弹出模态对话框引导用户
      wx.showModal({
        title: "请先登录",
        content: "该功能需要登录账号",
        confirmText: "去登陆",
        cancelText: "回到首页",
        success: ({ confirm, cancel }) => {
          // console.log('success', confirm, cancel )
          if (confirm) {
            wx.redirectTo({
              url: '/pages/login/login'
            })
          } else {
            wx.switchTab({
              url: '/pages/index/index'
            })
          }
        }
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