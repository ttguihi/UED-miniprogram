<template>
	<view class="page_top_background">

	</view>
	<CustomNavBar title="AIRO查询"></CustomNavBar>
	<view class="page">
		<view class="swiperArea">
			<swiper autoplay="true" circular="true" style="width: 690rpx; margin: 0 auto;">
				<swiper-item v-for="(item, index) in banner" :key="index">
					<navigator :url="item.linkurl" class="link" style="border-radius: 10rpx;">
						<image :src="item.image" mode="widthFix" style="border-radius: 10rpx;"></image>
					</navigator>
				</swiper-item>
			</swiper>
		</view>
		<view class="searchArea">
			<view class="serach">
				<uni-search-bar placeholder="请输入关键词" style=""></uni-search-bar>
			</view>
		</view>
	</view>

</template>

<script setup>
	import CustomNavBar from '../../components/CustomNavBar/CustomNavBar.vue';
	const banner = uni.getStorageSync('bannerList')
</script>

<style lang="scss" scoped>
	.page {
		display: flex;
		flex-direction: column;

		.swiperArea {
			width: 100%;
			display: flex;
			flex: 1;
			justify-content: center;
			border-radius: 10rpx !important;
			margin-top: 40rpx;
			overflow: hidden;

			swiper {
				width: 690rpx;
				height: 340rpx;
				border-radius: 10rpx;
				overflow: hidden;

				&-item {
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
					overflow: hidden;

					.link {
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
						overflow: hidden;

						image {
							width: 100%;
							height: 100%;
							border-radius: 10rpx;
						}
					}
				}
			}
		}

		.searchArea {
			width: 100%;
			height: 1500rpx;
			border-top-right-radius: 30rpx;
			border-top-left-radius: 30rpx;
			background-color: #fff;
			border-top: 2rpx solid #ffffff;
			padding: 30rpx 30rpx 0 30rpx;

			.searchBar {}

		}
	}
</style>