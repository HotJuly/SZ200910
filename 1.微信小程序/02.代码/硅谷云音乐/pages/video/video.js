// pages/video/video.js
import ajax from '../../utils/ajax.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:[],
    navId:null,
    triggered:false,
    videoId:null
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

  // 用于处理scroll-view组件下拉刷新操作
  async handlePullDown(){
    console.log('handlePullDown')

    wx.showLoading({
      title: "加载中,请稍后"
    })

    await this.getVideoList();

    this.setData({
      triggered:false
    })

    wx.hideLoading();
  },

  // 用于处理scroll-view组件上拉触底操作
  handleScrollToLower(){
    if(this.flag)return;
    this.flag=true;
    console.log('handleScrollToLower');
    setTimeout(()=>{
      this.setData({
        videoList: [...this.data.videoList, ...this.data.videoList]
      });
      this.flag=false;
    },5000)
  },

  // 用于测试学习视频组件的控制
  testApi(){
    // id:E802AB5DDB7544F8CECED6D4BED92CF0
    console.log('testApi')

    // 获取对应video组件的video上下文对象
    let videoContext = wx.createVideoContext("E802AB5DDB7544F8CECED6D4BED92CF0");

    // 使用上下文对象的api控制视频暂停
    videoContext.pause();
  },

  // 用于监视视频播放状态
  handlePlay(event){
    // console.log('handlePlay',this.oldVId)
    let {id}  = event.currentTarget;
    // console.log(id)

    // 通过oldVId关闭上一个视频
    if (this.oldVId && id !== this.oldVId) {
      setTimeout(() => {
        let videoContext = wx.createVideoContext(this.oldVId);
        videoContext.pause();
      },300);
    }
    // 保留当前视频vid
    this.oldVId = id;
  },

  switchComponent(event){
    // console.log('switchComponent', event.currentTarget.id)
    let { id } = event.currentTarget;
    this.setData({
      videoId: id
    })

    // let videoContext = wx.createVideoContext(id);
    // videoContext.play();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    // 请求导航条的内容
    // let navData = await ajax("/video/group/list");
    // this.setData({
    //   navList: navData.data.slice(0,14),
    //   navId: navData.data[0].id
    // })

    // // 请求视频列表内容
    // this.getVideoList();
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
  onShow:async function () {
    // 对用户的登录状态进行判断
    if(wx.getStorageSync("cookie")){
      // 请求导航条的内容
      let navData = await ajax("/video/group/list");
      this.setData({
        navList: navData.data.slice(0, 14),
        navId: navData.data[0].id
      })

      // 请求视频列表内容
      this.getVideoList();
    }else{
      // 弹出模态对话框引导用户
      wx.showModal({
        title:"请先登录",
        content:"该功能需要登录账号",
        confirmText:"去登陆",
        cancelText:"回到首页",
        success: ({ confirm , cancel })=>{
          // console.log('success', confirm, cancel )
          if(confirm){
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
    console.log('onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function ({from,target}) {
    /* 区分用户触发转发的操作,对他的操作进行不同的处理
      1.用户如果点击右上角转发,是想把整个小程序转发
      2.用户如果点击button转发,是想转发当前页面

      回调函数:
        1.我们定义的函数
        2.函数执行了
        3.我们没有调用过

        同步
          forEach的参数是一个回调函数
          Promise的参数是一个回调函数
        异步
          定时器,事件回调函数
    */
    // console.log('onShareAppMessage', data)
    if (from === "button") {
      // 2.用户如果点击button转发, 是想转发当前页面
      let { dataset: { title, imageurl } } = target;
      console.log('button', target)
      return {
        title,
        path: "/pages/index/index",
        imageUrl: imageurl
      }
    } else {
      // 1.用户如果点击右上角转发, 是想把整个小程序转发
      return {
        title:"硅谷云音乐",
        path:"/pages/index/index",
        imageUrl:"/static/images/nvsheng.jpg"
      }
    }
  }
})