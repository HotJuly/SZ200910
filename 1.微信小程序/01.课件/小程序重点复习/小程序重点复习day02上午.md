# 小程序重点复习day02上午

- 事件绑定

  - 冒泡阶段
    - 冒泡事件
      - 绑定语法:bind + 事件名 = "事件回调函数"
        - 例如:bindtap->完整写法bind:tap
    - 非冒泡事件
      - 绑定语法:catch+ 事件名 = "事件回调函数"
  - 捕获阶段
    - 捕获事件
      - 绑定语法:capture-bind: + 事件名 = "事件回调函数"
    - 非捕获事件
      - 绑定语法:capture-catch: + 事件名 = "事件回调函数"

  原生DOM事件:

  ​	div.addEventListener('click',事件回调函数,{capture:true,passive:false})

  ​	阻止冒泡,捕获:event.stopPropagation();->event.stopImmediatePropagation();

  ​	阻止默认行为:event.preventDefault();

  ​		扩展:在Chorme36版本以上,event.preventDefault()代码默认无视(写了等于没写),如果真的需要用到,在addEventListener的第三个参数,传入对象,并且带上属性passive

  

- 路由跳转

  - wx.navigateTo()
    - 保留当前页面实例(keep-alive)
    - 小程序页面栈最多十层,早期是五层
  - wx.redirectTo()
    - 关闭当前页面实例

- 生命周期

  - onLoad
    - 页面开始加载
    - Vue中created,因为已经可以使用this更新data数据,说明当前页面实例已经创建
  - onShow
    - 页面开始显示
    - Vue中activated,当组件显示的时候会触发
  - onReady
    - 页面初次渲染完毕
    - Vue中的mounted,当组件首次渲染完毕之后会触发
  - onHide
    - 页面隐藏触发(保留了当前页面的实例)
    - wx.navigateTo跳转出去,会触发当前生命周期
  - onUnload
    - 页面实例卸载(相当于销毁了当前页面实例)
    - wx.redirectTo跳转出去,会触发当前生命周期
    - 点击返回按钮也会触发