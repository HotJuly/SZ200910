import Vue from 'vue'
import App from './App'

// 关闭Vue开发者工具提示
Vue.config.productionTip = false

/*
	在小程序中
		app.js ->App({})->注册小程序
		index.js->Page({})->注册页面
		在uniapp中,没有App和Page函数,无法区分app实例和页面实例
		mpType ->	mp->mini program
			type->类型声明
*/
App.mpType = 'app'


//App({})
const app = new Vue({
    ...App
	// onLaunch: function() {
	// 	console.log('App Launch')
	// },
	// onShow: function() {
	// 	console.log('App Show')
	// },
	// onHide: function() {
	// 	console.log('App Hide')
	// }
})
app.$mount()
