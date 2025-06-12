<template>
	<view class="enterprise">
		<view class="upper_part">
			<view class="default_pic" :style="{backgroundImage: `url(${props.orderIcon})`}">
				<!-- 如果orderIcon为空，显示默认图片 -->
				<image v-if="!props.orderIcon" src="/common/images/index/default.svg" mode="aspectFill"></image>
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
					佛山市顺德区苏式荣华食品有限公司
				</view>
				<view class="name">
					苏氏融化月饼
				</view>
			</view>
		</view>


	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const props = defineProps({
		companyName: String,
		orderIcon: String,
		orderName: String,
		id: Number,
		ifDetail: Boolean
	})
	console.log(props);

	// 使用ref管理AI列表
	const aiList = ref(['DeepSeek', '通义千问', 'KIMI', 'KIMI']);
</script>

<style scoped lang="scss">
	.name {
		width: 100%;
		height: 56rpx;
		background: linear-gradient(to right, #f4ebff, #f0f3fe);
		padding: 10rpx;
		border-radius: 10rpx;
		display: flex;
		align-items: center;
		margin-top: auto;
		font-size: 24rpx;
		color: #333333;
	}

	.enterprise {
		height: 210rpx;
		width: 690rpx;
		background: linear-gradient(to bottom, #ebdaff, #ffffff 35%);
		border-radius: 20rpx;
		padding: 20rpx;
		padding-bottom: 32rpx;
		margin: 0 auto;
		margin-top: 16rpx;
		box-shadow: 2rpx 2rpx 2rpx #d9d9d9;

		.upper_part {
			display: flex;
			margin-bottom: 14rpx;

			.default_pic {
				height: 158rpx;
				aspect-ratio: 1;
				background-size: cover;
				background-position: center;
				background-repeat: no-repeat;
				margin-right: 24rpx;
				position: relative;
				overflow: hidden;
				border-radius: 12rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.enterprise_info {
				height: 158rpx;
				flex: 1;
				display: flex;
				flex-direction: column;


				.info_title {
					display: flex;
					align-items: center;

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
						background-clip: text;
					}
				}

				.info_name {
					margin-top: 8rpx;
					margin-bottom: 8rpx;
					color: #666;
					font-size: 24rpx;
				}

				.info_AIs {
					.AI_text {
						width: 98rpx;
						height: 28rpx;
						background: linear-gradient(to right, #bc85fd, #95a7fb);
						font-size: 20rpx;
						color: transparent;
						-webkit-background-clip: text;
						background-clip: text;
						margin-bottom: 8rpx;
					}

					.AI_categorys {
						display: flex;
						flex-wrap: wrap;
						gap: 8rpx;

						.AI_category {
							min-width: 126rpx;
							height: 40rpx;
							font-size: 20rpx;
							box-sizing: border-box;
							border: 1px solid transparent;
							background-image: linear-gradient(#fff, #fff),
								linear-gradient(to bottom left, #5587fb, #a456fc, #a456fc);
							background-origin: border-box;
							background-clip: content-box, border-box;
							border-radius: 8rpx;
							display: flex;
							align-items: center;
							justify-content: center;

							.category_name {
								font-size: 20rpx;
								font-weight: 600;
								background: linear-gradient(to right, #bc85fd, #95a7fb);
								color: transparent;
								-webkit-background-clip: text;
								background-clip: text;
							}
						}
					}
				}
			}
		}

		.lower_part {
			width: 100%;
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
				color: #333;
			}

			.right_part {
				font-size: 24rpx;
				color: #9c49fc;
				display: flex;
				align-items: center;
			}
		}
	}
</style>