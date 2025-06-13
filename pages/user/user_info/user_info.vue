<template>
	<view class="page_top_background">

	</view>
	<CustomNavBar title="个人信息"></CustomNavBar>
	<view class="layout">
		<view class="settings">
			<uni-forms>
				<uni-forms-item label="客户头像">
					<view class="logo">
						<view class="logo_pic">

						</view>
						<view class="right_arrow">

						</view>
					</view>
				</uni-forms-item>
				<uni-forms-item label="会员名称">
					<uni-easyinput placeholder="" />
				</uni-forms-item>
				<uni-forms-item label="选择地区">
					<uni-data-select v-model="value" :localdata="range" @change="change"></uni-data-select>
				</uni-forms-item>

				<uni-forms-item label="所属行业">
					<uni-data-select v-model="value" :localdata="range" @change="change"></uni-data-select>
				</uni-forms-item>

			</uni-forms>


		</view>
		<view class="button_area">
			<button>取消</button>
			<button>确认</button>
		</view>

	</view>
</template>

<script setup>
	import CustomNavBar from '../../../components/CustomNavBar/CustomNavBar.vue';
</script>

<style lang="scss" scoped>
	.zhizhao,
	.logo {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 16rpx;

		.certificate {
			width: 80rpx;
			height: 60rpx;
			background-color: pink;
		}

		.logo_pic {
			width: 68rpx;
			height: 68rpx;
			border-radius: 10rpx;
			background-color: skyblue;
		}
	}

	.right_arrow {
		width: 16rpx;
		height: 16rpx;
		border-bottom: 4rpx solid #000;
		border-right: 4rpx solid #000;
		transform: rotate(-45deg);

	}

	:deep() .uniui-bottom {
		font-size: 24rpx !important;
		font-weight: 700;
	}

	.layout {



		.settings {
			margin: 0 auto;
			margin-top: 32rpx;
			width: 688rpx;
			padding: 0 32rpx;
			padding-top: 40rpx;
			height: 1160rpx;
			border-radius: 20rpx;
			background: rgba(255, 255, 255, 0.7);
			height: 1240rpx;
			color: #000 !important;

			.enterprise_recognise {
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				width: 100%;
				height: 120rpx;
				border-bottom: 2rpx solid #818183;

				.settings_content {
					font-size: 28rpx;
					position: relative;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.right {
						width: 16rpx;
						height: 16rpx;
						border-bottom: solid 4rpx #000;
						border-right: solid 4rpx #000;
						transform: rotate(-45deg);
					}

				}
			}

			.last {
				border-bottom: none;
			}
		}

		.button_area {
			margin: 0 auto;
			margin-top: 66rpx;
			display: flex;

			button {
				width: 300rpx;
				height: 72rpx;
				border-radius: 60rpx;
				box-shadow: 4rpx 2rpx 8rpx #eceefe;

				&:first-child {
					background-color: #fff;
				}

				&:nth-child(2) {
					color: #fff;
					background: linear-gradient(to right, #3051f5, #893afb);
				}
			}
		}
	}
</style>