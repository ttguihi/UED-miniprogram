<template>
	<view class="layout">
		<view class="navbar">
			<view class="statusBar" :style="{height:getStatusBarHeight()+'px'}"></view>
			<view class="titleBar" :style="{height:getTitleBarHeight()+'px'}">
				<view class="title">
					<view class="icon" v-if="ifShowIcon"
						style="background: url('/common/images/index/sign.svg') no-repeat center center;background-size: cover;">
					</view>
					<navigator url="/pages/index/index" :open-type="navigateType" v-if="ifShowArrow">
						<view class="left_arrow">

						</view>
					</navigator>
					<view class="">
						{{title}}
					</view>
				</view>
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
		getNavBarHeight
	} from "@/utils/system.js"
	defineProps({
		title: {
			type: String,
			default: "友益典·AI营销管理系统"
		},
		//确定跳转方式
		navigateType: {
			type: String,
			default: "navigateBack"
		},
		ifShowIcon: {
			type: Boolean,
			default: false
		},
		ifShowArrow: {
			type: Boolean,
			default: true
		}

	})
</script>

<style lang="scss" scoped>
	.left_arrow {
		width: 20rpx;
		height: 20rpx;
		border-bottom: 4rpx solid #fff;
		border-left: 4rpx solid #fff;
		transform: rotate(45deg);
	}

	.icon {
		width: 96rpx;
		height: 50rpx;
		margin-right: 18rpx;
	}

	.layout {
		height: 10vh;

		.navbar {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 1000;
			background: url('/common/images/index/header_background.jpg') no-repeat;
			background-size: cover; //确保与背景颜色自然过渡

			.titleBar {
				display: flex;
				padding: 0 30rpx;

				.title {
					font-size: 22px;
					font-weight: 700;
					color: #fff;
					display: flex;
					align-items: center;
					gap: 16rpx;
				}
			}
		}
	}
</style>