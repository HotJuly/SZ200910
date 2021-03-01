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
		
		<!-- kingKongList区域 -->
		<view class="kingKongListContainer" v-if="indexData.kingKongModule">
			<view class="kingKongItem" v-for="kingKongItem in indexData.kingKongModule.kingKongList" :key="kingKongItem.L1Id">
				<image class="smallImg" :src="kingKongItem.picUrl" mode=""></image>
				<text class="smallText">{{kingKongItem.text}}</text>
			</view>
		</view>
		
		<Categorys :categoryObj="categoryObj" v-for="(categoryObj,index) in indexData.categoryModule" :key="index"/>
	</view>
</template>

<script>
	import Categorys from '../Categorys/Categorys.vue'
	export default{
		data(){
			return{}
		},
		props:["indexData"],
		components:{
			Categorys
		}
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
		.kingKongListContainer
			display flex
			flex-wrap wrap
			.kingKongItem
				display flex
				flex-direction column
				align-items center
				width 20%
				.smallImg
					width 110upx
					height 110upx
				.smallText
					font-size 24upx
</style>
