<template>
	<view class="">
		<view class="headerBackground">


		</view>
		<view class="fill_box">

		</view>
		<view class="search">
			<uni-search-bar focus placeholder="输入要搜索的关键词" :radius="50" cancelText="" clearButton="none"
				cancelButton="none">

				<button>搜索</button>
			</uni-search-bar>

		</view>
		<view class="menu">


			<view class="select_part">
				<view class="select" :class="{ active: current === 1 }" @click="current = 1">
					<view class="text">
						精选案例
					</view>
				</view>
				<view class="select" :class="{ active: current === 2 }" @click="current = 2">
					<view class="text">
						最新资讯
					</view>
				</view>
			</view>
			<view v-if="current == 1">
				<ExampleCard></ExampleCard>
				<ExampleCard></ExampleCard>
				<ExampleCard></ExampleCard>
				<ExampleCard></ExampleCard>
				<ExampleCard></ExampleCard>
				<ExampleCard></ExampleCard>
			</view>
			<view v-else>
				<ExampleCard></ExampleCard>
			</view>


		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import ExampleCard from '../../components/ExampleCard.vue';
	const items = ref(['精选案例', '最新资讯'])

	const current = ref(1)

	//事件冒泡 携带id值 进行菜单切换
</script>

<style lang="scss" scoped>
	.search {
		padding: 0 10rpx;
	}

	.headerBackground {
		position: absolute;
		z-index: -100;
		width: 100%;
		box-sizing: border-box;
		height: 494rpx;
		background: url("/common/images/index/header_background.jpg");
		background-size: 100% 100%;
	}

	.fill_box {
		width: 100%;
		height: 180rpx;
	}

	.menu {
		width: 100%;
		height: 100%;
		background: linear-gradient(to bottom, #ffffff, #f5f5ff 200rpx);
		border-radius: 20rpx 20rpx 0 0;
		overflow: hidden;
		margin-top: 12rpx;

		.select_part {

			background-color: #fff;
			height: 84rpx;
			margin-bottom: 32rpx;
			display: flex;

			.select {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #f5f5ff;
				transition: all 0.3s;

				.text {
					width: 104rpx;
					height: 38rpx;
					font-size: 24rpx;
					color: #979799;
				}
			}

			.active {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #fff;

				.text {
					width: 104rpx;
					height: 38rpx;
					font-size: 26rpx;
					background: linear-gradient(to right, #943ffc, #6f86fb);
					color: transparent;
					font-weight: bold;
					-webkit-background-clip: text;
				}
			}


		}
	}
</style>