# 小程序重点复习day04上午

- 向事件回调函数内部传参
  - 通过自定义属性设置属性值(标签属性也可以)
  - 获取值通过event.target.dataset(自定义属性)可以读取
  - event.currentTarget和event.target的区别
    - 事件源	->	this在小程序中是页面实例,所以使用event.currentTarget传递给我们
    - 触发者    ->    event.target,最内层的元素
- 提示框
  - wx.showToast({title:"必传"})
  - 注意:如果是成功图标,只能显示7个汉字,如果没有图标可以显示两行
- 登录成功之后跳转回个人中心页面
  - wx.redirectTo和wx.navigateTo都无法跳转tabBar页面
  - wx.switchTab()实现往tab页面的跳转
  - 问题:个人信息显示状态不对
  - 原因:因为从个人中心页面跳转到login页面的时候,使用的是wx.navigateTo(会保留当前页面实例,所以与onLoad冲突)
  - 解决方法:
    - 1.使用onShow替代onLoad(推荐)
    - 2.使用wx.redirectTo跳转login页面
- 小程序本地存储重点
  - API分为两种:带Sync,不带Sync
  - 单个 key 允许存储的最大数据长度为 **1MB**，所有数据存储上限为 **10MB**

