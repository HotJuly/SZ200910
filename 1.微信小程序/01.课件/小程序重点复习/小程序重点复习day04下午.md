# 小程序重点复习day04下午

- 小程序特点
  - 注意:在浏览器中,浏览器会自动帮我们保存和携带cookie
    - 小程序中不会,需要我们自己手动存储



1. 下拉刷新
   1. 整个页面下拉刷新(刷新整个页面)
      1. 开启下拉刷新动画:app.json->window->enablePullDownRefresh:true
      2. 监视用户下拉操作:每个页面都有onPullDownRefresh
   2. scroll-view组件下拉刷新
      1. 开启下拉刷新动画:设置标签属性refresher-enabled:true
         1. 问题:动画永久存在
         2. 解决:设置标签属性refresher-triggered:false可以关闭动画
      2. 监视用户下拉操作:事件名:refresherrefresh
2. 上拉加载更多
   1. 整个页面上拉加载更多(刷新整个页面)
      1. 监视用户上拉触底操作:每个页面都有onReachBottom
   2. scroll-view组件上拉触底操作
      1. 监视用户上拉触底操作:事件名:scrolltolower