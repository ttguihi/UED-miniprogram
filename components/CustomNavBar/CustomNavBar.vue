<template>
	<view class="layout">
		<view class="navbar">
			<view class="statusBar" :style="{height:getStatusBarHeight()+'px'}"></view>
			<view class="titleBar" :style="{height:getTitleBarHeight()+'px'}">
				<view class="title">
					<navigator url="/pages/index/index" open-type="switchTab">
						<uni-icons type="left" color="#fff" size="30"></uni-icons>
					</navigator>
					<view class="">
						公司动态
					</view>

				</view>
				<!-- <navigator url="/pages/search/search" class="search">
					<uni-icons class="icon" type="search" color="#888" size="18"></uni-icons>

				</navigator> -->
			</view>
		</view>

		<!-- 头部导航栏布局设置了fixed 悬浮在最上面 会盖住banner区域 加一个fill盒子把banner撑下去 -->
		<view class="fill" :style="{height:getNavBarHeight()+'px'}">

		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		getStatusBarHeight,
		getTitleBarHeight,
		getNavBarHeight,

	} from "@/utils/system.js"

	// let system = uni.getSystemInfo()
	// console.log(system);
	//父传子
	// defineProps({
	// 	title: {
	// 		type: String,
	// 		default: "壁纸"
	// 	}
	// })
</script>

<style lang="scss" scoped>
	.layout {
		.navbar {
			//固定定位
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 10; //提高覆盖层级
			background: url('/common/images/index/header_background.jpg') no-repeat;
			background-size: cover;

			.statusBar {}

			.titleBar {
				display: flex;
				align-items: center;
				padding: 0 30rpx;

				.title {
					font-size: 22px;
					font-weight: 700;
					color: #fff;
					display: flex;
					align-items: center;
				}

				.search {
					width: 220rpx;
					height: 50rpx;
					border-radius: 60rpx;
					background: rgba(255, 255, 255, 0.4);
					border: 1px solid #fff;
					margin-left: 30rpx;
					color: #999;
					font-size: 28rpx;
					display: flex;
					align-items: center;

					.icon {
						margin-left: 5rpx;
					}

					.text {
						padding-left: 10rpx;
					}
				}
			}
		}

		.fill {}
	}
</style>