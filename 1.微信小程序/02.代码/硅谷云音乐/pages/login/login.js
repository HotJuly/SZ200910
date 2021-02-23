// pages/login/login.js
import ajax from '../../utils/ajax.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"17688197777",
    password:""
  },

  handlePhone(event){
    // this.msg=event.target.value
    let {value} =event.detail;
    this.setData({
      phone: value
    })
    // console.log('handlePhone', event)
  },

  handlePassword(event) {
    let { value } = event.detail;
    this.setData({
      password: value
    })
    // console.log('handlePassword', event)
  },

  handleChange(event) {
    let { value } = event.detail;
    let { type } =event.target.dataset;
    this.setData({
      [type]: value
    })
    // console.log('handleChange', event.target.dataset.type)
  },

  async handleLogin(){
    let { phone,password } =this.data;
    /*
      登陆成功  200
      账号错误  400
      密码错误  502
    */
    if(phone.trim()&&password.trim()){
      let result = await ajax('/login/cellphone', {
        phone,
        password,
        isLogin:true
      })
      console.log('result', result)
      if (result.code === 200) {
        wx.setStorage({
          key:"userInfo",
          data: JSON.stringify(result.profile)
        })
        wx.showToast({
          title: "登陆成功",
          success:()=>{
            wx.switchTab({
              url: '/pages/personal/personal'
            })
          }
        })

      } else if (result.code === 400) {
        wx.showToast({
          icon: "none",
          title: "手机号错误,请确认手机号"
        })
      } else if (result.code === 502) {
        wx.showToast({
          icon: "none",
          title: "密码错误,请确认密码"
        })
      }
    }
    
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