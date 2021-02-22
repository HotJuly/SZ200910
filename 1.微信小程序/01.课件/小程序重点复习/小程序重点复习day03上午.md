# 小程序重点复习day03上午

- 小程序scroll-view组件使用
  - 使内部子元素横向排列
    - 1.display:flex
    - 2.添加标签属性enable-flex
  - 实现横向滚动
    - 添加标签属性scroll-x
  - **注意**:scroll-view会按照原先垂直排列的布局进行布局计算,自带overflow:hidden效果
- 面试题:如何实现多行文本溢出隐藏,并显示省略号
  - 1.display:-webkit-box
  - 2.-webkit-line-clamp:2
  - 3.-webkit-box-orient:vertical



- 小程序网络请求
  - 语法:wx.request({})
  - 1.最大超时和默认超时时间都是60s
  - 2.最大并发数:10个
  - 3.必须是https
  - 4.如果项目上线之后还需要请求的地址,必须去开发->开发管理->开发设置->服务器域名进行配置
    - 如果在开发阶段,只需要将详情->本地设置->不校验合法域名