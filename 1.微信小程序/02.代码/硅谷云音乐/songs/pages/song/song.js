// pages/song/song.js
import ajax from '../../../utils/ajax.js';
import PubSub from 'pubsub-js'
import moment from 'moment'

// 调用该方法,可以获得小程序全局唯一的实例
let appInstance = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songObj:{},
    songUrl:"",
    songId:null,
    isPlay:false,
    currentWidth:0,
    currentTime:"00:00",
    durationTime:"--:--"
  },

  // 用于处理用户点击播放按钮
  async handlePlay(){
    this.setData({
      isPlay:!this.data.isPlay
    })

    if(!this.data.songUrl){
      await this.getSongUrl();
    }

    // 获取全局唯一的背景音频管理器
    // let backgroundAudioManager = wx.getBackgroundAudioManager();
    if(this.data.isPlay){

      // 给背景音频管理器设置src可以实现自动播放
      // 注意:说是说只要src,但是其实还要title
      this.backgroundAudioManager.src = this.data.songUrl;
      this.backgroundAudioManager.title = this.data.songObj.name;

      // 用于测试自动切歌功能,让歌曲开始时间调到260s
      // this.backgroundAudioManager.startTime=260;

      appInstance.globalData.audioId = this.data.songId;
      appInstance.globalData.playState = true;

    }else{
      this.backgroundAudioManager.pause();

      appInstance.globalData.playState = false;
    }
  },

  // 用来处理用户切换歌曲的操作
  switchType(event){
    let { id } = event.currentTarget;
    // console.log('switchType', id)

    // 发布消息,告知recommendSong页面,用户点击了上一首,需要上一首的id
    PubSub.publish('switchType',id);
  },

  // 用于请求歌曲详细信息
  async getSongDetail(){
    let songDetail = await ajax('/song/detail', { ids: this.data.songId });

    // console.log('songDetail', songDetail);

    let songObj = songDetail.songs[0];

    // 动态更新导航栏标题
    wx.setNavigationBarTitle({
      title: songObj.name
    })

    this.setData({
      songObj,
      durationTime: moment(songObj.dt).format("mm:ss")
    })
  },

  // 用于请求歌曲音频地址
  async getSongUrl(){
    let songUrl = await ajax('/song/url', { id: this.data.songId });
    songUrl = songUrl.data[0].url;
    // console.log('songUrl', songUrl)

    this.setData({
      songUrl
    })
  },

  // 用于绑定背景音频管理器的事件监听
  addEvent(){
    // 1.绑定背景音频管理器进度更新事件
    this.backgroundAudioManager.onTimeUpdate(() => {
      // console.log('onTimeUpdate', this.backgroundAudioManager.currentTime)
      let currentWidth = this.backgroundAudioManager.currentTime * 1000 * 100 / this.data.songObj.dt;
      if (this.data.songId === appInstance.globalData.audioId){
        this.setData({
          currentWidth,
          currentTime: moment(this.backgroundAudioManager.currentTime * 1000).format('mm:ss')
        })
      }
    })

    //2.绑定背景音频管理器播放事件
    this.backgroundAudioManager.onPlay(()=>{
      // console.log('onPlay')
      if (this.data.songId === appInstance.globalData.audioId){
        this.setData({
          isPlay: true
        })
      }
      appInstance.globalData.playState=true;
    })

    //3.绑定背景音频管理器暂停事件
    this.backgroundAudioManager.onPause(() => {
      // console.log('onPause')
      if (this.data.songId === appInstance.globalData.audioId) {
        this.setData({
          isPlay: false
        })
      }
      appInstance.globalData.playState = false;
    })

    //4.监听背景音频自然播放结束
    this.backgroundAudioManager.onEnded(()=>{
      PubSub.publish('switchType', 'next');
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // console.log('appInstance1', appInstance)
    // console.log('appInstance1', appInstance.globalData.msg)
    // appInstance.globalData.msg = "我是修改之后的数据"
    // console.log('appInstance2', appInstance.globalData.msg)
    // 路径传参,可以再onLoad的options中获取到query参数
    // console.log('options', options)
    let {songId} = options;

    this.backgroundAudioManager = wx.getBackgroundAudioManager();

    this.setData({
      songId
    })

    this.getSongDetail();

    // let songDetail = await ajax('/song/detail', { ids: songId});

    // // console.log('songDetail', songDetail);

    // let songObj = songDetail.songs[0];

    // // 动态更新导航栏标题
    // wx.setNavigationBarTitle({
    //   title:songObj.name
    // })

    // this.setData({
    //   songObj
    // })

    if (appInstance.globalData.playState&&this.data.songId===appInstance.globalData.audioId){
      this.setData({
        isPlay:true
      })
    }


    // 订阅消息,等待recommendSong告知对应歌曲的id
    this.token = PubSub.subscribe('sendSongId',async (msg, songId) => {
      console.log('sendSongId', msg, songId)
      // 用最新的id发送请求

      this.setData({
        songId
      })

      this.getSongDetail();
      await this.getSongUrl();

      this.backgroundAudioManager.src = this.data.songUrl;
      this.backgroundAudioManager.title = this.data.songObj.name;
      appInstance.globalData.audioId = this.data.songId+"";
      appInstance.globalData.playState = true;
    })

    // 绑定背景音频管理器所有的事件监听
    this.addEvent();

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
    PubSub.unsubscribe(this.token);
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