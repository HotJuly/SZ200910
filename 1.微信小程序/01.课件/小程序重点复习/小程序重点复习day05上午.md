# 小程序重点复习day05上午

- 控制video组件的播放暂停
  - 获取到对应video的上下文对象
    - wx.createVideoContext(对应的videoId)
  - VideoContext对象身上,具有许多操控video组件播放状态的方法
    - videoContext.play();
    - videoContext.pause();



- 小程序分享功能
  - 1.通过页面右上角转发按钮
  - 2.通过button组件触发转发效果
  - 当用户触发分享功能,会调用onShareAppMessage回调函数
    - 该回调函数接受一个实参(Object)
    - 该实参内部,具有from和target
    - from会告诉你,用户触发分享的位置
    - target相当于tap事件中的event.currentTarget(在这里可以得到需要的自定属性和标签属性)