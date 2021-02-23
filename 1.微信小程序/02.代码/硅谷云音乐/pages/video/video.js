// pages/video/video.js
import ajax from '../../utils/ajax.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:[],
    navId:null
  },

  async changeId(event){
    // 将data中的navId更新为当前点击的这一项的id
    // 标签属性的数据类型都是字符串,自定义属性的数据类型根据你传递的内容而定
    // console.log(event.currentTarget.dataset.id)
    this.setData({
      // navId: event.currentTarget.dataset.id
      navId: event.currentTarget.id,
      videoList:[]
    })

    wx.showLoading({
      title:"加载中,请稍后"
    })

    await this.getVideoList();
    // console.log('result',result)

    wx.hideLoading();
  },

  // 专门用于请求视频列表最新数据
  async getVideoList(){
    let videoData = await ajax("/video/group", {
      id: this.data.navId
    });
    let videoList = videoData.datas.map((item) => {
      return item.data
    })
    this.setData({
      videoList
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    // 请求导航条的内容
    let navData = await ajax("/video/group/list");
    this.setData({
      navList: navData.data.slice(0,14),
      navId: navData.data[0].id
    })

    // 请求视频列表内容
    this.getVideoList();
    // let videoData = await ajax("/video/group",{
    //   id:this.data.navId
    // });
    // let videoList = videoData.datas.map((item)=>{
    //   return item.data
    // })
    // this.setData({
    //   videoList
    // })
    // console.log('videoList', videoList)
    // this.setData({
    //   navList: navData.data.slice(0, 14),
    //   navId: navData.data[0].id
    // })
    // console.log('navData', navData)
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