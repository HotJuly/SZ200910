# 小程序重点复习day03下午

- 拆分自定义组件
  - 组件具有四个文件,与page相同
  - 注意:组件的js中,调用的Component({})
  - 注意:组件的json中,有明确的组件声明component:true
- 使用自定义组件
  - 相对于Vue来说,小程序将引入和声明组件名称合二为一,只需要在json的usingComponents内部声明即可
    - {"usingComponents":{"NavHeader":"引入地址"}}
  - 最后在wxml中,作为组件使用





- swiper扩展
  - 想要提前看到下一页(下一屏)的内容,可以给swiper加上标签属性next-margin



- 底部导航栏配置
  - 在app.json中配置tabBar属性,tabBar内部必传list
  - list的数据类型Object[],最少**2个**,最多**5个**