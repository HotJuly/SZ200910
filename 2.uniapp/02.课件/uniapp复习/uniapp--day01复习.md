# uniapp--day01复习

- 文件结构
  - 项目说明书
    - uniapp->manifest.json(appID是uniapp的,如果想要修改小程序的appId,需要到mp-weixin)
    - 小程序->project.config.json
  - pages.json
    - 对应小程序中app.json+页面.json
    - 内部主要是在注册页面路径,以及导航栏设置(globalStyle->window)
    - 注意:小程序中pages属性数据类型String[],uniapp中数据类型是Object[]
  - 入口文件
    - uniapp->main.js+App.vue
      - main.js是在注册项目(new Vue(配置对象))
        - App.mpType="app"是在声明App组件代表整个项目
      - App.vue主要是提供配置对象,全局样式
    - 小程序->app.js+app.wxss
  - 静态资源文件夹(static)
  - pages文件夹
    - uniapp页面组成文件一个:页面.vue
      - template标签->wxml
      - script标签->js
      - style标签->wxss
    - 小程序页面组成文件四个:.js,.json,wxss,wxml
      - .json已经由pages.json集成,所以这里没有.json文件
  - unpackage
    - 只有在作为小程序运行的时候,才会出现
    - 内部实际上就是真正编译完的小程序代码
    - 模拟小程序运行,实际上运行的是该文件夹,每次修改HBuilderX的代码,会重新编译该文件夹
    - 注意:千万不再这个文件夹内进行修改

