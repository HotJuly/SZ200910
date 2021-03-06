/*
  封装代码,一般暴露出去的东西要么是数据要么是方法
  封装代码的核心思想:
    保留重复出现的部分,提取出每次不同的东西,由外部传入
    封装函数:
      1.保留公共代码(重复出现的部分)
      2.提取每次不同的部分
      3.通过形参+实参实现动态传入,谁调用的谁传入
    封装组件:
      1.保留公共代码(template+style+javascript)
      2.提取每次不同的部分
      3.通过标签属性传递给props,谁使用谁传入

*/

import config from './config.js';

export default function (url, data={}, method="GET"){
  let result;
  return new Promise((resolve,reject)=>{
    wx.request({
      url: config.host + url,
      data,
      method,
      header:{
        cookie:wx.getStorageSync('cookie').toString()
      },
      success: (res) => {
        // 需要将登陆接口的cookies保留到storage中,每次发送请求,手动携带上
        // console.log('res', res , url);
        if(data.isLogin){
          let cookies = res.cookies;
          console.log('cookies', cookies)
          wx.setStorage({
            key:"cookie",
            data: cookies.filter(function(item){
              return item.indexOf('MUSIC_U=') == 0;
            })
          })
        }
        resolve(res.data);
        // result = res.data;
        // this.setData({
        //   banners: res.data.banners
        // })
      }
    })
  })
  // return result;
}
