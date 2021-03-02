<script>
	import ajax from './utils/ajax.js'
	export default {
		onLaunch: function() {
			// console.log('App Launch')
			uni.login({
				async success({code}){
					console.log('login',code)
					let result = await ajax("/getOpenId",{code});
					uni.setStorage({
						key:"token",
						data:result
					})
					// console.log('result',result)
				}
			})
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="stylus">
	/*每个页面公共css */
	@import url('/static/iconfont/iconfont.styl');
	page
		height 100%
</style>
