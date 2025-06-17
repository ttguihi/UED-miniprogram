<template>
	<view class="page_top_background"></view>
	<CustomNavBar title=""></CustomNavBar>
	<view class="page">
		<view class="news_title">
			{{params.title}}
		</view>
		<view class="date_transition">
			<view class="date">
				<view class="font">
					{{params.updateTime}}
				</view>
			</view>
			<view class="transition">
				转发
				<uni-icons type="redo-filled" color="#FF7700"></uni-icons>
			</view>
		</view>
		<view class="mainArea">
			<view class="content">
				{{params.texts}}
				<view class="img">
				</view>
			</view>
			<view class="recommend">
				<view class="recommend_title">
					相关推荐
				</view>
				<view class="newsArea">
					<NewsCard v-for="item in newsData" :newsCard="item"></NewsCard>

				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import CustomNavBar from '../../components/CustomNavBar/CustomNavBar.vue';
	import NewsCard from '../../components/NewsCard.vue';
	import {
		onLoad
	} from '@dcloudio/uni-app';
	import {
		apiGetNewsDetail
	} from '../../api/news/api';
	import {
		ref
	} from 'vue';
	import {
		useInformationStore
	} from '../../store/news';
	const informationStore = useInformationStore()

	// const swiperStore = useSwiperStore()
	// onLoad(() => {
	// 	swiperStore.fetchSwiperData()
	// })
	const newsData = ref([])
	newsData.value = informationStore.informationData
	// newsData.value = uni.getStorageSync('informationList')
	// const newsData = ref([])
	// newsData.value = swiperStore.newsData
	// console.log(newsData.value);
	const InformationId = ref()
	const params = ref()
	onLoad(async (e) => {
		InformationId.value = e.id
		let res = await apiGetNewsDetail({
			InformationId: InformationId.value
		})
		params.value = res
		// console.log(params.value);
	})
</script>

<style lang="scss" scoped>
	.page {
		.news_title {
			width: 690rpx;
			margin: 0 auto;
			font-size: 32rpx;
			font-weight: bold;
			color: #fff;
			margin-top: 40rpx;

			line-height: 40rpx;
			letter-spacing: 1rpx;
		}

		.date_transition {
			width: 690rpx;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 20rpx;

			.date {

				width: 190rpx;
				height: 50rpx;
				border-radius: 10rpx;
				background: rgba(255, 255, 255, 0.3);
				/* 使用rgba设置背景透明度 */
				display: flex;
				justify-content: center;
				align-items: center;

				.font {
					color: #fff;
					font-size: 28rpx;
				}
			}

			.transition {
				font-size: 26rpx;
				width: 146rpx;
				height: 50rpx;
				border-radius: 10rpx 10rpx 10rpx 10rpx;
				color: #FF7700;
				text-align: center;
				line-height: 50rpx;
				align-items: center;
				gap: 10rpx;
				background-color: #fff3b9;
				font-weight: 700;
			}
		}

		.mainArea {
			margin-top: 20rpx;
			border-radius: 20rpx 20rpx 0rpx 0rpx;
			width: 100%;
			/* 用 rgba 控制背景透明度，不影响子元素 */
			background: rgba(245, 245, 255, 0.7);
			//设置mainArea内部空间
			padding: 30rpx;
			padding-top: 40rpx;
			padding-bottom: 0;

			.content {
				color: #333333;
				font-size: 28rpx;
				line-height: 48rpx;
				letter-spacing: 1rpx;
				margin-bottom: 66rpx;

				.img {
					width: 678rpx;
					height: 504rpx;
					background-color: pink;
					margin: 0 auto;
					margin-top: 30rpx;
					margin-bottom: 20rpx;

					border-radius: 10rpx;
				}
			}

			.recommend {
				.recommend_title {
					background: linear-gradient(to right, #923cfc, #6c82fa);
					color: transparent;
					-webkit-background-clip: text;
					font-size: 30rpx;
					font-weight: bold;
					line-height: 48rpx;
					margin-bottom: 32rpx;
				}

				.newsArea {
					width: 100%;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
				}
			}
		}
	}
</style>