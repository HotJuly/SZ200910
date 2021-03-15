import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


//通过自定义合并策略可以一次性修改所有组件的配置对象
// Vue.config.optionMergeStrategies.my_option = function (parent, child, vm) {
//   console.log('optionMergeStrategies',parent, child, vm)
//   // return child + 1
// }

// //可以用来关闭或者开启开发者工具
Vue.config.devtools = true

/* 
  上线维护项目
  1.收集错误
    Vue项目之前 window.onerror=function(){} 这个函数内部可以捕获到用户出现的报错
    Vue项目中,两种方法:
      1.全局配置中配置errorHandler()
      2.在组件生命周期errorCaptured
      
      注意:err=>报错信息 vm=>组件实例 info=>提示出错位置
  2.将错误发送给后端服务器
    通过ajax将错误信息发送给服务器
  3.后端将收集的错误,提交给前端,前端解决

*/ 

// Vue.config.errorHandler = function (err, vm, info) {
//   // handle error
//   // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
//   // 只在 2.2.0+ 可用
//   //err=>报错信息 vm=>组件实例 info=>提示出错位置
//   console.log('errorHandler',err, vm, info)
// }

// 全局混合
// Vue.mixin({
//   mounted(){
//     console.log(this.$options.name)
//   }
// })

// vue1.0->插入
// vue2.0->替换
new Vue({
  // el:"#app",
  // template:"<div id='app'>123</div>"
  render: h => h(App),
}).$mount("#app")
