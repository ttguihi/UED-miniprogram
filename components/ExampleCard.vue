<template>
	<view class="enterprise">
		<view class="upper_part">
			<view class="default_pic">

			</view>
			<view class="enterprise_info">
				<view class="info_title">
					<view class="left_small_card">
						业务线
					</view>
					<view class="right_purple_text">
						佛山中秋月饼
					</view>
				</view>
				<view class="info_name small_font">
					佛山市顺德区苏氏荣华食品有限公司
				</view>
				<view class="info_AIs">
					<view class="AI_text">
						已覆盖的AI
					</view>
					<view class="AI_categorys">
						<view class="AI_category">
							<view class="category_name">
								DeepSeek
							</view>
						</view>
						<view class="AI_category">
							<view class="category_name">
								通义千问
							</view>
						</view>
						<view class="AI_category">
							<view class="category_name">
								KIMI
							</view>
						</view>
						<view class="AI_category">
							<view class="category_name">
								KIMI
							</view>
						</view>
					</view>

				</view>
			</view>
		</view>
		<view class="lower_part">
			<view class="left_part">
				苏式荣华月饼
			</view>
			<view class="right_part">
				查看详情&nbsp;&nbsp;>
			</view>
		</view>


	</view>
</template>

<script setup>

</script>

<style scoped lang="scss">
	.enterprise {

		height: 320rpx;
		width: 690rpx;
		background: linear-gradient(to bottom, #ebdaff, #ffffff 35%);
		border-radius: 20rpx;
		padding: 20rpx;
		margin: 0 auto;
		margin-top: 16rpx;
		box-shadow: 2rpx 2rpx 2rpx #d9d9d9;

		.upper_part {
			display: flex;
			margin-bottom: 14rpx;

			.default_pic {

				height: 208rpx;
				aspect-ratio: 1;
				background: url('/common/images/index/default.svg') no-repeat;
				background-size: 100% 100%;
				margin-right: 24rpx;
			}

			.enterprise_info {
				height: 208rpx;

				.info_title {
					display: flex;

					.left_small_card {
						width: 82rpx;
						height: 40rpx;
						text-align: center;
						line-height: 40rpx;
						font-size: 22rpx;
						font-weight: 500;
						background-color: #e2ccff;
						color: #8566fd;
						margin-right: 12rpx;
						border-radius: 12rpx;
					}

					.right_purple_text {
						background: linear-gradient(to right, #5c7af7, #994afc);
						color: transparent;
						font-weight: 700;
						-webkit-background-clip: text;
						// background-clip: text;
						/*以文字的范围对背景进行裁剪*/
						// background-clip: text;
					}


				}

				.info_name {
					margin-top: 8rpx;
					margin-bottom: 8rpx;
				}

				.info_AIs {
					.AI_text {
						width: 98rpx;
						height: 28rpx;
						background: linear-gradient(to right, #bc85fd, #95a7fb);
						font-size: 20rpx;
						color: transparent;
						-webkit-background-clip: text;
						margin-bottom: 8rpx;
					}

					.AI_categorys {
						display: flex;
						flex-wrap: wrap;

						.AI_category {
							width: 126rpx;
							height: 40rpx;
							font-size: 20rpx;
							box-sizing: border-box;
							border: 1px solid transparent;
							background-image: linear-gradient(#fff, #fff),
								linear-gradient(to bottom left,
									#5587fb,
									#a456fc,
									#a456fc);
							-webkit-background-origin: border-box;
							-webkit-background-clip: content-box, border-box;
							border-radius: 8rpx;
							display: flex;
							align-items: center;
							justify-content: center;
							margin-right: 8rpx;
							margin-bottom: 6rpx;

							.category_name {
								font-size: 20rpx;
								font-weight: 600;

								background: linear-gradient(to right, #bc85fd, #95a7fb);
								color: transparent;
								-webkit-background-clip: text;
							}

						}
					}

				}


			}
		}

		.lower_part {
			width: 650rpx;
			height: 56rpx;
			background: linear-gradient(to right, #f4ecff, #f0f3fe);
			display: flex;
			align-items: center;
			padding: 0 20rpx;
			justify-content: space-between;
			border-radius: 12rpx;

			.left_part {
				font-weight: 500;
				font-size: 26rpx;
			}

			.right_part {
				font-size: 24rpx;
				color: #9c49fc;
			}
		}


	}
</style>