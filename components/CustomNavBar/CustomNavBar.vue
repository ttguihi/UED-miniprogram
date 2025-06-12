<template>
	<view class="layout">
		<view class="navbar">
			<view class="statusBar" :style="{height:getStatusBarHeight()+'px'}"></view>
			<view class="titleBar" :style="{height:getTitleBarHeight()+'px'}">
				<view class="title">
					<navigator url="/pages/index/index" :open-type="navigateType">
						<uni-icons type="left" color="#fff" size="30"></uni-icons>
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
		navigateType: {
			type: String,
			default: "navigateBack"

		}
	})
</script>

<style lang="scss" scoped>
	.layout {
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
				}
			}
		}
	}
</style>