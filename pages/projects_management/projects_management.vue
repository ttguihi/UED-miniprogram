<template>
	<view class="page_top_background">

	</view>
	<CustomNavBar title="项目管理"></CustomNavBar>
	<view class="swiperArea">
		<swiper autoplay="true" circular="true" style="width: 690rpx; margin: 0 auto;">
			<swiper-item v-for="(item, index) in banner" :key="index">
				<navigator :url="item.linkurl" class="link" style="border-radius: 10rpx;">
					<image :src="item.image" mode="widthFix" style="border-radius: 10rpx;"></image>
				</navigator>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import CustomNavBar from '../../components/CustomNavBar/CustomNavBar.vue';
</script>

<style lang="scss" scoped>
	.swiperArea {
		width: 100%;

		display: flex;
		justify-content: center;
		border-radius: 10rpx 10rpx 0 0;
		margin-top: 40rpx;
		overflow: hidden;

		swiper {
			width: 690rpx;
			height: 340rpx;
			border-radius: 10rpx 10rpx 0 0;
			overflow: hidden;

			&-item {
				width: 100%;
				height: 100%;
				border-radius: 10rpx 10rpx 0 0;
				overflow: hidden;

				.link {
					width: 100%;
					height: 100%;
					border-radius: 10rpx 10rpx 0 0;
					overflow: hidden;

					image {
						width: 100%;
						height: 100%;
						border-radius: 10rpx 10rpx 0 0;
					}
				}
			}
		}
	}
</style>