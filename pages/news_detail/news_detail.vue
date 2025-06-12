<template>
	<view class="page_top_background"></view>
	<CustomNavBar title=""></CustomNavBar>
	<view class="page">
		<view class="news_title">
			友益典签约江门新会互惠互盈（国资） 以AI营销助力崖门乡村振兴百千万工程高质量发展
		</view>
		<view class="date_transition">
			<view class="date">
				<view class="font">
					2025-05-27
				</view>
			</view>
			<view class="transition">
				转发
				<uni-icons type="redo-filled" color="#FF7700"></uni-icons>
			</view>
		</view>
		<view class="mainArea">
			<view class="content">
				为了解与交流AI营销创新技术、带动江门新会区崖门乡村振兴项目的有效发展，2025年5月12日，江门市新会区互惠互盈采购有限公司（以下简称：互惠互盈公司）总经理余进东带队到广东友益典文化科技有限公司（以下简称：友益典）进行交流考察。双方就AI与延伸的新质营销技术进行了交流，并达成通过AI结果优化（AIRO）技术推动崖门乡村振兴的合作项目。
				<view class="img">

				</view>
				关于江门市新会区互惠互盈采购有限公司
			</view>
			<view class="recommend">
				<view class="recommend_title">
					相关推荐
				</view>
				<view class="newsArea">
					<NewsCard v-for="item in 10"></NewsCard>

				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import CustomNavBar from '../../components/CustomNavBar/CustomNavBar.vue';
	import NewsCard from '../../components/NewsCard.vue';
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
					font-size: 24rpx;
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