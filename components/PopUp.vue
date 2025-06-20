<template>
	<view>
		<uni-popup ref="popup" type="center" border-radius="10px 10px 0 0">
			<view class="contact_service">
				<view class="contact_title">
					联系客服
				</view>
				<view class="erweima">
					<view class="weixin">
						<view class="weixin_pic">

						</view>
						<view class="weixin_text">

							微信号

						</view>
					</view>
					<view class="gongzhonghao">
						<view class="gongzhonghao_pic">

						</view>
						<view class="weixin_text">
							友益典公众号
						</view>
					</view>
				</view>
				<view class="service_number_area">
					<view class="area_title">
						客服热线
					</view>
					<view class="number_text">
						<view class="number">
							132-5038-8148
						</view>
						<view class="line">

						</view>
						<view class="dianji">
							<view class="icon">

							</view>
							点击拨打
						</view>
					</view>
					<view class="number_text">
						<view class="number">
							134-1101-0301
						</view>
						<view class="line">

						</view>
						<view class="dianji">
							<view class="icon">

							</view>
							点击拨打
						</view>
					</view>

				</view>

				<view class="last">
					<view class="bline">

					</view>
					<view class="time">
						客服时段：09:00-17:00
					</view>
					<view class="bline">

					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const popup = ref()
	//联系客服弹窗
	const open = () => {
		// console.log(1);
		popup.value.open('center')
	}
	defineExpose({
		open
	})
</script>

<style scoped lang="scss">
	.contact_service {
		width: 650rpx;
		height: 736rpx;
		background: linear-gradient(180deg, #FFFAED 0%, #FFFFFF 30%, #FFFFFF 64%, #FFFAED 100%);
		border-radius: 10rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 60rpx;

		.contact_title {
			color: #FF8418;
			font-size: 30rpx;
			margin-bottom: 32rpx;
			margin-top: 28rpx;
		}

		.erweima {
			width: 100%;

			display: flex;
			justify-content: space-between;

			.weixin {
				display: flex;
				flex-direction: column;
				align-items: center;

				.weixin_pic {
					width: 228rpx;
					height: 228rpx;
					background: url('/common/images/user/weixin.webp') no-repeat;
					background-size: cover;
					border: 2rpx solid #ffc18f;
					border-radius: 10rpx;
					margin-bottom: 20rpx;
				}

				.weixin_text {
					position: relative;

					&::after {
						content: '';
						width: 134rpx;
						height: 29rpx;
						left: 50%;
						transform: translateX(-50%);
						position: absolute;
						background: #FF8418;
						filter: blur(60rpx);
					}
				}
			}

			.gongzhonghao {
				display: flex;
				flex-direction: column;
				align-items: center;

				.gongzhonghao_pic {
					width: 228rpx;
					height: 228rpx;
					background: url('/common/images/user/gongzhonghao.webp') no-repeat;
					background-size: cover;
					border-radius: 10rpx;
					border: 2rpx solid #ffc18f;
					margin-bottom: 20rpx;
				}

				.weixin_text {
					position: relative;

					&::after {
						content: '';
						width: 134rpx;
						height: 29rpx;
						left: 50%;
						transform: translateX(-50%);
						position: absolute;
						background: #FF8418;
						filter: blur(60rpx);
					}
				}
			}
		}


		.service_number_area {
			width: 100%;

			.area_title {
				margin-top: 32rpx;
				margin-right: auto;
				margin-bottom: 22rpx;
			}

			.number_text {
				width: 100%;
				height: 60rpx;
				background-color: #FFF2DA;
				border-radius: 60rpx;
				display: flex;
				align-items: center;
				margin-bottom: 26rpx;

				.number {
					white-space: nowrap;
					margin-left: 62rpx;
					position: relative;
				}

				.line {
					width: 0;
					height: 24rpx;
					border-left: 2rpx solid #ccc4b7;
					margin-left: 44rpx;
					margin-right: 42rpx;

				}

				.dianji {
					display: flex;
					color: #5a5855;
					font-size: 24rpx;
					white-space: nowrap;

					.icon {
						width: 32rpx;
						height: 32rpx;
						margin-right: 10rpx;
						margin-top: 2rpx;
						background: url('/common/images/user/phone_orange.svg') center center;
					}

					margin-right: 34rpx;
				}
			}
		}

		.last {
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 24rpx;

			.time {
				margin-left: 52rpx;
				margin-right: 52rpx;

			}

			.bline {
				width: 80rpx;
				height: 0;
				border-top: 2rpx solid #c8c5be;
			}
		}
	}
</style>