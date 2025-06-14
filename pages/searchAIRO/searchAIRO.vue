<template>
	<view class="page_top_background">

	</view>
	<CustomNavBar title="AIRO查询"></CustomNavBar>
	<view class="page">
		<view class="swiperArea">
			<swiper autoplay="true" circular="true" style="width: 690rpx; margin: 0 auto;">
				<swiper-item v-for="(item, index) in swiperStore.swiperData" :key="index">
					<navigator :url="item.linkurl" class="link" style="border-radius: 10rpx;">
						<image :src="item.image" mode="widthFix" style="border-radius: 10rpx;"></image>
					</navigator>
				</swiper-item>
			</swiper>
		</view>
		<view class="searchArea">
			<view class="serach_part">
				<view class="serach" style="width: 500rpx;">
					<uni-easyinput placeholder="请输入关键词"
						placeholderStyle="fontSize:24rpx; margin-left:14rpx;"></uni-easyinput>
				</view>
				<button class="wajue">
					<uni-icons type="search" color="#fff" size="30"></uni-icons>
					挖掘</button>
			</view>
			<view class="table_part">
				<view class="table_head ">
					<view class="column1" style="text-shadow: none;">
						关键词
					</view>
					<view class="column2" style="color: #000;">
						成功率
					</view>
					<view class="column3" style="color: #000;">
						周期
					</view>
				</view>
				<view class="table_body" v-for="item in 8">
					<view class="column1">
						1.关键词001
					</view>
					<view class="column2 ">
						<view class="rate">
							90%
						</view>


					</view>
					<view class="column3 ">
						<view class="time">
							90%
						</view>
					</view>
				</view>

			</view>


			<button class="share">分享</button>

		</view>


	</view>

</template>

<script setup>
	import CustomNavBar from '../../components/CustomNavBar/CustomNavBar.vue';
	import {
		useSwiperStore
	} from '../../store/swiper';
	const swiperStore = useSwiperStore()
</script>

<style lang="scss" scoped>
	//设置input框高度
	:deep() .uni-easyinput__content-input {
		height: 62rpx !important;
	}

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
			background-color: #fcfcff;

			border-top: 2rpx solid #ffffff;
			padding: 30rpx 30rpx 0 30rpx;

			.serach_part {
				display: flex;
				align-items: center;
				margin-bottom: 16rpx;

				.search {
					// width: 460rpx !important;
				}

				.wajue {
					color: #fff;
					height: 68rpx;
					background: linear-gradient(to right, #2c51f5, #8a3afb);
					display: flex;
					align-items: center;
					gap: 5rpx;
					margin-right: 0;
				}

			}

			.table_part {
				width: 100%;
				border-radius: 10rpx;
				overflow: hidden;

				.column1 {
					flex: 4;
					padding-left: 34rpx;
					font-size: 30rpx;
					font-weight: 500;
					text-shadow: 0 0 0.5rpx currentColor; //微妙的字体加粗效果
				}

				.column2 {
					text-align: center;
					flex: 1.3;
					color: #08A500;
				}

				.column3 {
					text-align: center;
					flex: 1.3;
					color: #2254f4;
				}

				.rate,
				.time {
					width: 124rpx;
					height: 56rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					background-size: cover;

				}

				.rate {
					background: url('/common/images/search/rate.svg') no-repeat center center;

				}

				.time {
					background: url('/common/images/search/time.svg') no-repeat center center;
				}

				.table_head {
					display: flex;
					align-items: center;
					height: 88rpx;
					background: linear-gradient(to right, #f4ebff, #f0f3fe);
					border-radius: 10rpx;

				}

				.table_body {
					display: flex;
					height: 88rpx;
					align-items: center;

					&:nth-child(even) {
						background-color: #ffffff;
					}

					&:nth-child(odd) {
						background-color: #f8f8f8;
					}
				}
			}




			/* 确保这些类在小程序中生效 */

			.share {
				width: 400rpx;
				height: 72rpx;
				line-height: 72rpx;
				margin-top: 96rpx;
				color: #fff;
				border-radius: 60rpx;
				background: linear-gradient(to right, #2753f4, #9038fb);
			}



		}
	}
</style>