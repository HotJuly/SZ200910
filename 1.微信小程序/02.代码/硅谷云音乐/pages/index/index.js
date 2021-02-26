// index.js
// 获取应用实例
import ajax from '../../utils/ajax.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommendList:[],
    topList:[]
  },

  toRecommendSong(){
    wx.navigateTo({
      url: '/songs/pages/recommendSong/recommendSong',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function (options) {
    /*
      1.在哪发
        onLoad
      2.往哪发
        查阅API文档
          1.url
          2.method
          3.参数
      3.怎么发
        wx.request
    */
    // wx.request({
    //   url:"http://localhost:3000/banner",
    //   data:{
    //     type:2
    //   },
    //   success:(res)=>{
    //     console.log('res',res.data)
    //     this.setData({
    //       banners:res.data.banners
    //     })
    //   }
    // })
    // wx.request({
    //   url: "http://localhost:3000/personalized",
    //   success: (res) => {
    //     console.log('res', res.data)
    //     // this.setData({
    //     //   banners: res.data.banners
    //     // })
    //   }
    // })
    let result = ajax('/banner',{type:2},"GET");
    result.then(({banners}) => {
      // console.log('res2', res)
      this.setData({
        banners
      })
    })

    let result2 = ajax('/personalized');
    result2.then(({ result }) => {
      // console.log('res2', res)
      this.setData({
        recommendList: result
      })
    })

    let topListArr=[6,8,12,30];
    let index=0;
    let topList = [];

    while(index<topListArr.length){
      let topData = ajax('/top/list', { idx: topListArr[index++] });
      topData.then(({ playlist: { name, tracks } }) => {
        let data = {
          name,
          tracks
        };
        topList.push(data)
        this.setData({
          topList
        })
        // console.log('res', data)
        // this.setData({
        //   recommendList: result
        // })
      })
    }
    // Proimse.all([])

    // let { banners} =await ajax('/banner', { type: 2 }, "GET");
    // this.setData({
    //   banners
    // })

    // let { result} =await ajax('/personalized');
    // this.setData({
    //   recommendList: result
    // })
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