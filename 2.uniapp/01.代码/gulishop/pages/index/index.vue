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
			<view class="navItem active">
				推荐
			</view>
			<view class="navItem" v-for="item in indexData.kingKongModule.kingKongList" :key="item.L1Id">
				{{item.text}}
			</view>
		</scroll-view>
		
		<!-- 推荐区域 -->
		<Recommend :indexData="indexData"/>
	</view>
</template>

<script>
	import Recommend from '../../components/Recommend/Recommend.vue';
	import ajax from '../../utils/ajax.js';
	export default {
		data() {
			return {
				title:'Hello',
				indexData:{}
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
			let indexData = await ajax('/getIndexData');
			this.indexData=indexData;
		},
		methods:{

		},
		components:{
			Recommend
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
				
</style>
