<template>
	<view class="indexContainer">
		
		<!-- 头部区域 -->
		<view class="header">
			<image class="logo" src="../../static/images/logo.png" mode=""></image>
			<view class="search">
				<view class="iconfont icon-sousuo"></view>
				<input type="text" value="" placeholder="搜索商品" placeholder-class="placeholder"/>
			</view>
			<button class="username">七月</button>
		</view>
		
		<!-- 导航条区域 -->
		<scroll-view class="navScroll" scroll-x v-if="indexData.kingKongModule">
			<view class="navItem" :class="currentIndex===-1?'active':''" @click="changeIndex(-1)">
				推荐
			</view>
			<view class="navItem"
			 :class="currentIndex===index?'active':''"
			 v-for="(item,index) in indexData.kingKongModule.kingKongList"
			 :key="item.L1Id"
			 @click="changeIndex(index)"
			  >
				{{item.text}}
			</view>
		</scroll-view>
		
		<!-- 推荐区域 -->
		<scroll-view scroll-y="true" class="contentScroll">
			<Recommend :indexData="indexData" v-if="currentIndex===-1"/>
			<CateList :navIndex="currentIndex" v-else/>
		</scroll-view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	import Recommend from '../../components/Recommend/Recommend.vue';
	import CateList from '../../components/cateList/cateList.vue';
	import ajax from '../../utils/ajax.js';
	export default {
		data() {
			return {
				title:'Hello',
				currentIndex:-1
			}
		},
		// onLoad->页面开始加载->created
		// mpvue和uniapp都推荐使用Vue的生命周期
		// onLoad() {
		// 	console.log('onLoad')
		// },
		//mounted->页面挂载结束
		async mounted(){
			console.log('mounted')
			// uni.request({
			// 	url:'http://localhost:3000/getIndexData',
			// 	success:(res)=>{
			// 		// console.log('res',res)
			// 		this.indexData = res.data;
			// 	}
			// })
			// let indexData = await ajax('/getIndexData');
			// this.indexData=indexData;
			this.$store.dispatch('getIndexData');
		},
		computed:{
			// indexData(){
			// 	return this.$store.state.home.indexData;
			// },
			...mapState({
				indexData:(state)=>state.home.indexData
			})
		},
		methods:{
			changeIndex(currentIndex){
				this.currentIndex=currentIndex;
				// if(currentIndex!==-1){
				// 	let result = await ajax('/getIndexCateList');
				// }
			}
		},
		components:{
			Recommend,
			CateList
		}
	}
</script>

<style lang="stylus">
	// shift+tab 可以向前缩进
	.indexContainer
		.header
			display flex
			align-items center
			padding-top 20upx
			.logo
				width 116upx
				height 40upx
				flex-shrink  0
				margin 0 20upx
			.search
				position relative
				background pink
				width 100%
				height 60upx
				border-radius  10upx
				.iconfont
					position absolute
					top 50%
					left 20upx
					transform translateY(-50%)
				input
					height 60upx
					padding-left 60upx
					.placeholder
						text-align center
						font-size 24upx
						line-height 60upx
						text-indent -50upx
			.username
				width 129upx
				height 60upx
				font-size 26upx
				line-height  60upx
				flex-shrink  0
				margin 0 20upx
				border-radius  10upx
				color red
		.navScroll
			// display flex
			white-space nowrap
			height 80upx
			.navItem
				position relative
				display inline-block
				width 140upx
				height 80upx
				text-align center
				line-height 80upx
				font-size 28upx
				&.active::after
					content ""
					height 4upx
					width 100%
					background red
					position absolute
					bottom 0
					left 0
		.contentScroll
			// 小程序端 100vh不包含导航栏和tabBar
			// height= 100vh - header高度 - nav高度
			// h5端	100vh包含导航栏和tabBar
			// heigh= 100vh - header高度 - nav高度 - 导航栏高度 - tabBar高度
			// 使用级联变量	--window-top可以获取导航栏高度 --window-bottom可以获取tabBar高度
			height calc(100vh - 80upx - 80upx - var(--window-top) - var(--window-bottom))
</style>
