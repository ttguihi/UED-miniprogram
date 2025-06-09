<template>
	<view class="page_top_background">

	</view>
	<CustomNavBar title="关于我们"></CustomNavBar>
	<view class="page">
		<view class="frame_text">

		</view>
		<view class="content">
			广东友益典文化科技有限公司（以下简称友益典），成立于2024年5月，是一家专注于以创新科技融合文化产业发展的创新型科技企业。友益典致力将先进的互联网信息技术、主流的人工智能（AI）技术、创新的品牌建设模式、优质的营销推广资源，以创新科技为品牌实现价值跃迁为经营理念，让企业享受高新科技带来的品牌红利与发展机遇。
		</view>
		<view class="card">
			<view class="card_title">
				友益典·AI结果优化（AIRO）服务
			</view>

			<view class="card_content">
				<view class="card1">
					<view class="card_main1">
						<view class="icon">

						</view>
					</view>

					<view class="text">
						广泛覆盖
					</view>
				</view>
				<view class="card1">
					<view class="card_main1">
						<view class="icon">

						</view>
					</view>

					<view class="text">
						词包矩阵
					</view>
				</view>
				<view class="card1">
					<view class="card_main1">
						<view class="icon">

						</view>
					</view>

					<view class="text">
						持续展现
					</view>
				</view>
				<view class="card1">
					<view class="card_main1">
						<view class="icon">

						</view>
					</view>

					<view class="text">
						AI拓客
					</view>
				</view>


			</view>
		</view>
	</view>
</template>

<script setup>
	import CustomTabBar from '../../../components/CustomTabBar.vue';
</script>

<style lang="scss" scoped>
	.page {
		.frame_text {
			margin: 0 auto;
			margin-top: 100rpx;
			width: 220rpx;
			height: 220rpx;
			background: url('/common/images/login/frame_text.webp') no-repeat;
			background-size: 100% 100%;
		}

		.content {
			margin-top: 102rpx;
			width: 100%;
			padding: 32rpx;
			font-size: 28rpx;
			line-height: 48rpx;
		}

		.card {
			width: 686rpx;
			height: 282rpx;
			margin: 0 auto;
			margin-top: 46rpx;

			background-color: skyblue;
			border: 1px solid transparent;
			background-image: linear-gradient(#fff, #fff),
				linear-gradient(to bottom left,
					#a55bfc,
					#c598fd,
					#597cf7);
			background-origin: border-box;
			background-clip: content-box, border-box;
			border-radius: 10rpx;

			.card_title {
				width: 548rpx;
				height: 64rpx;
				line-height: 64rpx;
				margin: 0 auto;
				background: linear-gradient(to right, #2653f4, #9039fc);
				border-radius: 0 0 10rpx 10rpx;
				font-size: 30rpx;
				text-align: center;
				color: #fff;
				margin-bottom: 36rpx;

			}

			.card_content {
				width: 100%;
				padding: 0 10rpx;
				height: 50rpx;
				display: flex;
				justify-content: space-around;

				.card1 {
					width: 130rpx;
					height: 125rpx;
					display: flex;
					flex-direction: column;
					align-items: center;

					.card_main1 {
						width: 130rpx;
						height: 100rpx;
						background: linear-gradient(to bottom, #eaf0ff, #ffffff);
						border-top-left-radius: 30rpx 42rpx;
						border-bottom-left-radius: 30rpx 42rpx;
						border-top-right-radius: 30rpx 42rpx;
						border-bottom-right-radius: 30rpx 42rpx;
						border: 2rpx solid #fff;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					}


					.icon {
						width: 42rpx;
						height: 42rpx;
						background-color: skyblue;

					}
				}



			}
		}
	}
</style>