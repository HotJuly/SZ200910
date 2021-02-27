<template>
	<view class="recommendContainer">
		<!-- banner区域 -->
		<swiper class="bannerSwiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/images/index/1.webp" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/images/index/2.webp" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/images/index/3.webp" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		
		<!-- policyDescList区域 -->
		<view class="policyDescList">
			<view class="policyDescItem" v-for="policyDescItem in indexData.policyDescList" :key="policyDescItem.desc">
				<image :src="policyDescItem.icon" mode=""></image>
				<text>{{policyDescItem.desc}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{}
		},
		props:["indexData"]
	}
</script>

<style lang="stylus">
	.recommendContainer
		.bannerSwiper
			.swiper-item
				height 100%
				image
					width 100%
					height 100%
		.policyDescList
			display flex
			justify-content space-around
			.policyDescItem
				image
					width 32upx
					height 32upx
					vertical-align middle
				text
					font-size 24upx
					vertical-align middle
</style>
