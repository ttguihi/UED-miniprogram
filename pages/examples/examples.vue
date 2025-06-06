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
			<view v-else class="news_page">
				<view class="news_card">
					<view class="news_item">

					</view>
					<view class="news_info">

						<view class="hot">
							<view class="hot_text">
								<text class="niceColor">
									[AI行业今天热点 快来看看吧!]
								</text>
								<text class="normalText"> 深圳大学近期发布关于AI+前端融合最新消息 世人震惊</text>
							</view>
						</view>
						<view class="hot_time">
							2025-05-27
						</view>
					</view>
				</view>

				<view class="news_card">
					<view class="news_item">

					</view>
					<view class="news_info">

						<view class="hot">
							<view class="hot_text">
								<text class="niceColor">
									[AI行业今天热点 快来看看吧!]
								</text>
								<text class="normalText"> 深圳大学近期发布关于AI+前端融合最新消息 世人震惊</text>
							</view>
						</view>
						<view class="hot_time">
							2025-05-27
						</view>
					</view>
				</view>
				<NewsCard></NewsCard>
				<NewsCard></NewsCard>
				<NewsCard></NewsCard>
				<NewsCard></NewsCard>

			</view>


		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import ExampleCard from '../../components/ExampleCard.vue';
	import SmartText from '../../components/SmartText/SmartText.vue'
	import NewsCard from '../../components/NewsCard.vue';
	const items = ref(['精选案例', '最新资讯'])

	const current = ref(1)

	//事件冒泡 携带id值 进行菜单切换
</script>

<style lang="scss" scoped>
	.news_page {
		padding: 0 32rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.news_card {
			width: 336rpx;
			height: 434rpx;
			background-color: white;
			margin-bottom: 12rpx;
			border-radius: 10rpx;
			box-sizing: border-box;

			.news_item {
				width: 100%;
				height: 288rpx;
				border-radius: 10rpx;
				background-color: pink;
			}

			.news_info {
				width: 100%;
				height: 146rpx;
				background-color: pink;
				border-radius: 10rpx;
				margin-bottom: 16rpx;
				padding: 16rpx;
				background-color: #fff;

				.hot {



					width: 100%;
					font-size: 24rpx;
					font-weight: 600;

					.hot_text {
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						overflow: hidden;
						text-overflow: ellipsis;

						.niceColor {
							background: linear-gradient(to right, #9949fc, #6a89fa);
							color: transparent;
							-webkit-background-clip: text;
						}
					}
				}

				.hot_time {
					font-size: 20rpx;
					color: #888888;
					margin-top: 16rpx;
				}
			}
		}

	}

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