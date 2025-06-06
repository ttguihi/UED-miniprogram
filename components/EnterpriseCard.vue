<template>
	<view class="enterprise_card">
		<view class="enterprise_card_title">
			<view class="recognise">
				企业认证
			</view>
			<view class="enterprise_name">
				请先绑定信息
			</view>
		</view>

		<view class="enterprise_info">
			<view class="info_details">
				<view class="range" style="margin-right: 52rpx;">
					<view class="range_title">
						业务范围
					</view>
					<view class="range_content">
						暂无内容
					</view>
				</view>
				<view class="range">
					<view class="range_title">
						对公账户
					</view>
					<view class="range_content">
						暂无内容
					</view>
				</view>
				<view class="range">
					<view class="range_title">
						对公账户地址
					</view>
					<view class="range_content">
						暂无内容
					</view>
				</view>
			</view>
			<view class="license">
				<image src="/common/images/user/not_recognise.svg" mode=""></image>
			</view>
		</view>

	</view>
</template>

<script setup>

</script>

<style scoped lang="scss">
	.enterprise_card {
		width: 100%;
		height: 392rpx;
		background: #fefeff;
		backdrop-filter: blur(80rpx);
		border-radius: 20rpx;

		position: relative;
		overflow: hidden;



		.enterprise_card_title {
			width: 100%;
			height: 132rpx;
			background: linear-gradient(to right, #ecf4fa, #f7f6f2);

			.recognise {
				position: absolute;
				left: 0;
				top: 0;
				border-bottom-right-radius: 20rpx;
				width: 192rpx;
				height: 56rpx;
				background: linear-gradient(to right, #FFCF4A, #FFEBB5);
				color: #654f14;
				text-align: center;
				line-height: 56rpx;
				font-size: 26rpx;
				font-weight: 700;
			}

			.enterprise_name {
				position: absolute;
				left: 32rpx;
				top: 72rpx;
				background: linear-gradient(to right, #2d5bf4, #a55cfc);
				font-size: 30rpx;
				font-weight: bold;
				color: transparent;
				-webkit-background-clip: text;
			}
		}

		.enterprise_info {
			margin-top: 32rpx;
			padding: 0 22rpx 0 30rpx;
			width: 100%;
			display: flex;
			align-items: center;


			.info_details {

				display: flex;
				flex-wrap: wrap;
				width: 420rpx;

				.range {
					display: flex;
					flex-direction: column;
					margin-bottom: 32rpx;


					.range_title {
						font-size: 22rpx;
						font-weight: bold;
						margin-bottom: 10rpx;
					}

					.range_content {
						font-size: 24rpx;
					}
				}
			}

			.license {
				width: 206rpx;
				height: 152rpx;
				background-color: pink;
				margin-bottom: 46rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		// -webkit-backdrop-filter: blur(80rpx);


	}
</style>