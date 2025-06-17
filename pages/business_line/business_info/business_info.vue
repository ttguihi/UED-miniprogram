<template>
	<view class="page_top_background"></view>
	<CustomNavBar title=""></CustomNavBar>
	<view class="page">
		<view class="business_card">
			<view class="title">
				<view class="title_title" style="font-size: 30rpx;color: #454545;">
					业务线
					<view class="title_status ">
						进行中
					</view>
				</view>
				<view class="title_name">
					佛山中秋月饼
				</view>
			</view>

			<view class="time">
				<view class="time1">
					启动时间
				</view>
				<view class="time2">
					2025-05-22
				</view>
			</view>

			<view class="projectId">
				项目ID:&nbsp;&nbsp;&nbsp;UED00000111
			</view>
			<view class="phase">
				<view class="phase_title">
					第一期启动时间：2025-05-22
					<view class="bottom_arrow">

					</view>
				</view>
				<view class="phase_main">

					<view class="phase_item">
						<view class="item_name">
							佛山中秋月饼哪家好
						</view>
						<view class="item_status">
							<view class="linear">
								进行中
							</view>

						</view>
					</view>
					<view class="phase_item">
						<view class="item_name">
							佛山中秋月饼哪家好
						</view>
						<view class="item_status">
							<view class="linear">
								进行中
							</view>

						</view>
					</view>
					<view class="phase_item">
						<view class="item_name">
							佛山中秋月饼哪家好
						</view>
						<view class="item_status" @click="gotoView">
							<view class="linear">
								进行中
							</view>

						</view>
					</view>

				</view>
			</view>

		</view>
	</view>

</template>


<script setup>
	const gotoView = () => {
		uni.navigateTo({
			url: '/pages/business_line/view_info/view_info'
		})
	}
</script>

<style lang="scss" scoped>
	.bg-green {
		background: linear-gradient(90deg, #EFFFF2 0%, #FFFFFF 100%);
		box-shadow: 0rpx 4rpx 10rpx 0rpx rgba(0, 0, 0, 0.05);
	}

	.bg-orange {
		background: linear-gradient(90deg, #FFFBEF 0%, #FFFFFF 100%);
		box-shadow: 0rpx 4rpx 10rpx 0rpx rgba(0, 0, 0, 0.05);
	}

	.bg-white {
		background: #FFFFFF;
		box-shadow: 0rpx 4rpx 10rpx 0rpx rgba(0, 0, 0, 0.05);
	}






	.page_top_background {
		z-index: 0;
		mix-blend-mode: multiply;
	}

	.page {
		width: 100%;
		background-color: #f5f5ff;
		padding: 0 30rpx;

		.business_card {
			width: 100%;
			height: 1476rpx;
			padding: 32rpx;
			border-radius: 20rpx;
			background: rgba(255, 255, 255, 0.7);
			margin-top: 20rpx;
			position: relative;

			.title {
				.title_title {

					display: flex;

					.title_status {
						width: 110rpx;
						height: 40rpx;
						margin-left: 16rpx;
						border-top-right-radius: 10rpx;
						border-bottom-left-radius: 10rpx;
						color: #fff;
						background: linear-gradient(to right, #ffb375, #ff7b11);

						font-size: 24rpx !important;
						display: flex;
						align-items: center;
						justify-content: center;
					}
				}

				.title_name {
					display: flex;
					align-items: center;
					font-weight: bold;
					font-size: 36rpx;
					text-align: left;
					font-style: normal;
					text-transform: none;
					background: linear-gradient(0deg, #2254F4 0%, #9438FC 100%);
					color: transparent;
					-webkit-background-clip: text;
					width: 216rpx;
					height: 52rpx;
					margin-bottom: 16rpx;
				}


			}

			.time {
				width: 100%;
				height: 80rpx;
				background: linear-gradient(90deg, #FFFFFF 52%, #EFE1FF 100%);
				box-shadow: 0rpx 4rpx 10rpx 0rpx rgba(0, 0, 0, 0.05);
				border-radius: 10rpx 10rpx 10rpx 10rpx;
				padding: 0 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 16rpx;

				.time1 {
					position: relative;
					font-size: 28rpx;
				}

				.time2 {
					font-size: 28rpx;
					color: #9438FC;
					font-weight: bold;
				}

				.time1::after {
					content: '';
					position: absolute;
					right: -54rpx;
					width: 0;
					height: 40rpx;
					border: 1rpx solid #909090;
					transform: scaleX(0.5);
				}
			}

			.projectId {
				font-size: 28rpx;
				width: 100%;
				margin-bottom: 30rpx;
			}

			.phase {
				.phase_title {
					padding: 0 20rpx;
					display: flex;
					align-items: center;
					height: 72rpx;
					background: #FFFFFF;
					box-shadow: 0rpx 4rpx 10rpx 0rpx rgba(0, 0, 0, 0.05);
					border-radius: 10rpx 10rpx 10rpx 10rpx;
					justify-content: space-between;
					margin-bottom: 32rpx;

					.bottom_arrow {
						width: 16rpx;
						height: 16rpx;
						transform: rotate(45deg);
						border-bottom: 4rpx solid #000000;
						border-right: 4rpx solid #000000;
					}
				}

				.phase_main {
					width: 100%;

					.phase_item {
						width: 100%;
						height: 66rpx;
						background: #F2EDFF;
						box-shadow: 0rpx 4rpx 10rpx 0rpx rgba(0, 0, 0, 0.05);
						border-radius: 10rpx 10rpx 10rpx 10rpx;
						margin-bottom: 32rpx;
						padding-left: 20rpx;
						display: flex;
						align-items: center;
						justify-content: space-between;

						.item_name {
							font-size: 26rpx;
						}

						.item_status {
							width: 134rpx;
							height: 100%;
							display: flex;
							align-items: center;
							justify-content: center;
							background-color: #ffffff;
							position: relative;
							border-radius: 10rpx;

							.linear {
								width: 80%;
								height: 100%;
								background: linear-gradient(to right, #9443fc, #778ffa);
								color: transparent;
								-webkit-background-clip: text;
								display: flex;
								justify-content: center;
								align-items: center;
								font-size: 24rpx;
							}

							/* 可选圆角 */
						}

						.item_status::before {
							content: '';
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							border: 2rpx solid transparent;
							border-radius: inherit;
							background: linear-gradient(90deg, rgba(148, 56, 252, 1), rgba(105, 136, 250, 1)) border-box;
							-webkit-mask: linear-gradient(#fff, #fff) padding-box, linear-gradient(#fff, #fff);
							-webkit-mask-composite: xor;
							// mask-composite: exclude;

						}
					}

				}


			}
		}
	}
</style>