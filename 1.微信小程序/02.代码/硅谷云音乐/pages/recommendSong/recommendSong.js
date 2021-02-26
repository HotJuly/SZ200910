// pages/recommendSong/recommendSong.js
import ajax from '../../utils/ajax.js'
import PubSub from 'pubsub-js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    month:"--",
    day:"--",
    recommendList:[],
    // currentId:null
    currentIndex:null
  },

  // 用户点击歌曲列表之后,触发的回调函数
  toSong(event){
    // console.log(event.currentTarget.dataset.song)
    // item整个对象太大了,url有长度限制,没办法完整传递,最终只传递id
    let songId = event.currentTarget.dataset.songid;
    let songIndex = event.currentTarget.dataset.songindex;

    this.setData({
      currentIndex: songIndex
    })

    wx.navigateTo({
      url: '/pages/song/song?songId=' + songId,
    })
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

    // 订阅消息,接受用户在song页面的操作(上一首或者下一首)
    PubSub.subscribe('switchType',(msg,type)=>{
      // console.log('switchType', msg, data)
      let {currentIndex,recommendList} = this.data;
      /*
        判断用户要的是上一首还是下一首
          1.如果是上一首,currentIndex-1
          1.如果是下一首,currentIndex+1
      */
      if (type === "pre") {
        // 1.如果是上一首, currentIndex - 1
        if (currentIndex===0){
          currentIndex = recommendList.length-1;
        }else{
          currentIndex -= 1;
        }
      } else {
        // 2.如果是下一首首, currentIndex + 1
        // currentIndex += 1;
        if (currentIndex === recommendList.length - 1) {
          currentIndex = 0;
        } else {
          currentIndex += 1;
        }
      }

      this.setData({
        currentIndex
      })

      let preSongId = recommendList[currentIndex].id;
      // console.log('preSongId', preSongId)
      PubSub.publish('sendSongId', preSongId)
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