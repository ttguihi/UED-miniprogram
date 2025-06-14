<template>
	<navigator :url="`/pages/news_detail/news_detail?id=${data.id}`">
		<view class="news_card">
			<view class="news_item" :style="{backgroundImage: `url(${data.image})`}">
			</view>
			<view class="news_info">
				<view class="hot">
					<view class="hot_text">
						<text class="niceColor">
							[AI行业今天热点 快来看看吧!]
						</text>
						<text class="normalText"> {{data.title}}</text>
					</view>
				</view>
				<view class="hot_time">
					{{data.create_time}}
				</view>
			</view>
		</view>
	</navigator>
</template>

<script setup>
	// const props = defineProps({
	// 	createTime: String,
	// 	imageUrl: String,
	// 	title: String
	// })
	const props = defineProps({
		newsCard: {
			type: Object,
			default: () => ({})
		}
	})
	//解构出newsCard并重命名为data
	const {
		newsCard: data
	} = props
	// console.log(data);
</script>

<style lang="scss" scoped>
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
</style>