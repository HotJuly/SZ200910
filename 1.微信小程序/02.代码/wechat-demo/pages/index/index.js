// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"我是初始化数据",
    className:"a1",
    userInfo:{}
  },

  handleChildren(){
    console.log('handleChildren')
    wx.navigateTo({
      url: '/pages/log/log'
    })

    // wx.redirectTo({
    //   url: '/pages/log/log'
    // })
  },

  handleParent() {
    console.log('handleParent')
  },

  changeData(){
    this.setData({
      msg:"我是修改之后的数据"
    })
  },

  getuserinfo(event){
    // console.log('getuserinfo', event.detail);
    let { rawData, userInfo } = event.detail;
    if(rawData){
      this.setData({
        userInfo
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('msg',this.data.msg);
    // console.log('this',this)
    // this.data.msg="我是修改之后的数据"
    // this.setData({
    //   msg:"我是修改之后的数据1"
    // })
    // console.log('1', this.data.msg)
    // this.setData({
    //   msg: "我是修改之后的数据2"
    // })
    // console.log('2', this.data.msg)
    // console.log('window', window)
    // console.log('wx', wx)
    wx.getUserInfo({
      success:({userInfo})=>{
        // console.log('success', userInfo)
        this.setData({
          userInfo
        })
      }
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