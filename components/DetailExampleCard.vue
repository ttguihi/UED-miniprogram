<template>
	<view class="enterprise">
		<view class="upper_part">
			<view class="default_pic" :style="{backgroundImage: `url(${data.image})`}">
				<!-- 如果orderIcon为空，显示默认图片 -->
				<image v-if="!data.image" src="/common/images/index/default.svg" mode="aspectFill"></image>
			</view>
			<view class="enterprise_info">
				<view class="info_title">
					<view class="left_small_card">
						业务线
					</view>
					<view class="right_purple_text">
						{{data.orderName}}
					</view>
				</view>
				<view class="info_name small_font">
					{{data.companyName}}
				</view>
				<view class="name">
					{{data.projectName}}
				</view>
			</view>
		</view>


	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		onLoad
	} from '@dcloudio/uni-app'

	const props = defineProps({
		data: {
			type: Object,
			default: () => ({})
		}

	})
	const data = ref()
	const newsData = ref()
	data.value = props.data
	console.log(props.data);
	// console.log(props);

	// 使用ref管理AI列表
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
			}
		}
	}
</style>