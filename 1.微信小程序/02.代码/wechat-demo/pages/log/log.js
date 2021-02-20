// pages/log/log.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg2:"123"
  },

  toIndex(){
    wx.navigateTo({
      url: '/pages/index/index'
    })


    // wx.redirectTo({
    //   url: '/pages/index/index'
    // })
  },

  /**
   * 生命周期函数--监听页面加载->相当于Vue的created
   */
  onLoad: function (options) {
    this.setData({
      msg2:234
    })
    debugger
    console.log('------onLoad------')
  },

  /**
   * 生命周期函数--监听页面显示 -> 相当于Vue的activated
   */
  onShow: function () {
    console.log('------onShow------')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成->相当于Vue的mounted
   * mounted是挂载结束,不代表渲染结束
   */
  onReady: function () {
    console.log('------onReady------')
  },

  /**
   * 生命周期函数--监听页面隐藏 -> 相当于Vue的deactivated
   */
  onHide: function () {
    console.log('------onHide------')
  },

  /**
   * 生命周期函数--监听页面卸载 ->  想当于Vue的destroyed
   */
  onUnload: function () {
    console.log('------onUnload------')
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