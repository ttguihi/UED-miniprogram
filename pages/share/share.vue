<template>
	<view class="page">
		<!-- <CustomNavBar style="background: transparent:  !important;"></CustomNavBar> -->
		<view class="goBack" @click="goBack">
			<uni-icons type="left" color="#fff" size="26"></uni-icons>
		</view>
		<view class="share_card">
			<view class="project_item">
				<view class="avatar">
					<view class="linear_letter">
						苏
					</view>
				</view>
				<view class="info">
					<view class="info_name">
						<view class="target">
							优化目标
						</view>
						<view class="bawofangzaibeisong" style="font-size: 32rpx;">
							苏式饼家
						</view>
					</view>
					<view class="info_date">
						业务线:&nbsp;&nbsp;佛山中秋月饼
					</view>
					<view class="info_date">
						关键词类型:&nbsp;&nbsp;业务长尾词
					</view>
				</view>

			</view>
			<view class="time">
				<view class="time1">
					项目ID
				</view>
				<view class="time2">
					UED00000111
				</view>
			</view>
			<view class="main_area">
				<view class="upper">
					<view class="main_title">
						<view class="border">

						</view>
						<view class="title">
							我的关键词
						</view>
						<view class="border">

						</view>
					</view>
					<view class="main_content">
						<view class="content_item" v-for="item in 5">
							1、佛山中秋月饼哪家好
						</view>

					</view>
				</view>
				<view class="lower">
					<view class="erweima">

					</view>
					<view class="saomiao">
						<view class="text">
							&lt;&lt;扫描 /识别二维码
						</view>
						<view class="queren">
							<view class="linear">
								确认项目进行
							</view>
						</view>
					</view>

				</view>
			</view>
		</view>
		<view class="button_area">
			<button>保存图片</button>
			<button>分享</button>
		</view>
	</view>


	<SharePic></SharePic>
</template>

<script setup>
	import SharePic from '../../components/SharePic.vue';
	import html2canvas from 'html2canvas'
	const goBack = () => {
		uni.navigateBack()
	}
</script>
<style lang="scss" scoped>
	.page {
		// position: fixed;
		position: relative;
		padding-top: 200rpx;
		height: 100vh;
		background:
			/* 左上角：蓝紫色 (#5571ff → transparent) */
			radial-gradient(circle at left top, #5571ff, transparent 70%),

			/* 右上角：紫红色 (#8545fd → transparent) */
			radial-gradient(circle at right top, #7653fd, transparent 70%),
			radial-gradient(circle at right 30%, #8842fc, transparent 80%),

			/* 左下角：浅蓝色 (#4ecbf5 → transparent) */
			radial-gradient(circle at left bottom, #4ecbf5, transparent 70%),

			/* 右下角：淡紫色 (#b4c1ff → transparent) */
			radial-gradient(circle at right bottom, #8188fe, transparent 70%),

			/* 可选：添加一个基础背景色（如白色）确保渐变融合自然 */
			linear-gradient(white, white);
		// linear-gradient(to bottom, transparent 60%, white 90%);
		/* 让多个渐变混合叠加 */
		// background-blend-mode: overlay, overlay, overlay, overlay, normal;

		/* 可选：调整整体亮度/对比度 */
		filter: brightness(1.1) contrast(1.05);

		//可能是孤独让情绪变得脆弱
		.goBack {
			left: 30rpx;
			top: 52rpx;
			position: absolute;
			width: 40rpx;
			height: 40rpx;
		}

		.share_card {
			display: flex;
			flex-direction: column;
			margin: 0 auto;
			padding: 20rpx 30rpx;
			width: 650rpx;
			// height: 1196rpx;
			background: rgba(255, 255, 255, 0.6);
			border-radius: 20rpx 20rpx 20rpx 20rpx;
			// opacity: 0.6;

			.project_item {
				display: flex;
				width: 100%;
				height: 150rpx;
				padding: 16rpx;
				margin-bottom: 16rpx;
				// background-color: transparent;
				border-radius: 10rpx;
				position: relative;

				.avatar {
					height: 100%;
					aspect-ratio: 1;
					background: linear-gradient(180deg, #D9E3FF 0%, #F1ECFF 100%);
					border-radius: 10rpx 10rpx 10rpx 10rpx;
					margin-right: 22rpx;
					display: flex;
					justify-content: center;
					align-items: center;

					.linear_letter {

						width: fit-content;
						background: linear-gradient(to right, $theme-blue, $theme-purple);
						color: transparent;
						-webkit-background-clip: text;
						font-size: 56rpx;
						font-weight: 700;
					}
				}

				.info {
					display: flex;
					flex-direction: column;
					justify-content: space-around;


					.info_name {
						display: flex;
						align-items: center;
						white-space: nowrap;

						.target {
							display: flex;
							align-items: center;
							justify-content: center;
							width: 100rpx;
							margin-right: 12rpx;
							height: 40rpx;
							background: #E2CCFF;
							border-radius: 6rpx 6rpx 6rpx 6rpx;
							color: #9438FC;
							text-align: center;
							font-size: 20rpx;

						}

						.bawofangzaibeisong {
							display: flex;
							align-items: center;
							justify-content: center;
						}

						font-weight: bold;

						color: #000000;
					}

					.info_line {
						font-weight: 400;
						font-size: 22rpx;
						color: #9438FC;
					}

					.info_date {
						font-size: 24rpx;
						color: #333333;
					}
				}

				.query {
					display: flex;
					align-items: center;
					align-self: flex-end;
					margin-left: auto;
					font-size: 24rpx;
					gap: 10rpx;
					color: #2254F4;
				}


			}

			.time {
				width: 100%;
				height: 80rpx;
				background: linear-gradient(90deg, #FFFFFF 52%, #EFE1FF 100%);
				// box-shadow: 0rpx 4rpx 10rpx 0rpx rgba(0, 0, 0, 0.05);
				border-radius: 10rpx;
				padding: 0 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 16rpx;

				.time1 {
					position: relative;
					font-size: 28rpx;

					&::after {
						content: '';
						position: absolute;
						right: -54rpx;
						width: 0;
						height: 40rpx;
						border: 1rpx solid #909090;
						transform: scaleX(0.5) scaleY(0.7);
					}
				}

				.time2 {
					font-size: 28rpx;
					color: #9438FC;
					font-weight: bold;
				}
			}

			.main_area {
				flex: 1;
				width: 100%;
				background: #FFFFFF;
				border-radius: 10rpx 10rpx 10rpx 10rpx;
				overflow: hidden;

				.upper {
					width: 100%;
					padding: 0 48rpx;
					padding-top: 32rpx;
					padding-bottom: 36rpx;
					border-bottom: 10rpx dashed #DFDFDF;
					// margin-bottom: 16rpx;

					.main_title {
						display: flex;
						align-items: center;
						gap: 46rpx;
						margin-bottom: 16rpx;

						.border {
							width: 130rpx;
							height: 0rpx;
							border: 1rpx solid;
							border-image: linear-gradient(90deg, rgba(148, 56, 252, 1), rgba(105, 136, 250, 1)) 1 1;
							transform: scaleY(0.5);
						}

						.title {
							font-weight: 500;
							font-size: 28rpx;
							// height: fit-content;
							line-height: 48rpx;
							// display: flex;
							// align-items: center;
							// justify-content: center;
							background: linear-gradient(0deg, #9438FC 0%, #6988FA 100%);
							color: transparent;
							-webkit-background-clip: text;
							// margin-bottom: 16rpx;
						}

					}

					.main_content {
						font-size: 28rpx;
						color: #000000;
						line-height: 52rpx;
					}
				}

				.lower {
					width: 100%;
					height: 250rpx;
					// background-color: pink;
					position: relative;
					padding: 32rpx;
					border-radius: 10rpx 10rpx 10rpx 10rpx;
					display: flex;
					gap: 16rpx;

					&::after {
						content: '';
						position: absolute;
						width: 40rpx;
						height: 40rpx;
						border-radius: 20rpx;
						background: #c1f2fb;
						top: 0;
						right: 0;

						transform: translateY(-50%) translateX(50%);
					}

					&::before {
						content: '';
						position: absolute;
						width: 40rpx;
						height: 40rpx;
						border-radius: 20rpx;
						background: #c1f2fb;
						// background: rgba(232, 237, 255, 0.6);
						top: 0;
						left: 0;

						transform: translateY(-50%) translateX(-50%);
					}

					.erweima {
						height: 100%;
						aspect-ratio: 1;
						border: 2rpx solid #9438FC;
						border-radius: 10rpx;
						background: url('/common/images/user/gongzhonghao.svg') no-repeat center center;
						background-size: cover;
					}

					.saomiao {
						flex: auto;
						display: flex;
						flex-direction: column;
						justify-content: space-around;

						.text {
							font-size: 28rpx;
							color: #333333;
							line-height: 48rpx;
						}

						.queren {
							font-family: 'youshebiaoti';
							font-weight: 500;
							height: 75rpx;
							background: url('/common/images/index/querenxiangmu.svg') no-repeat center center;
							background-size: cover;
							display: flex;
							padding-left: 18rpx;
							align-items: center;

							.linear {
								width: fit-content;
								// height: fit-content;
								font-size: 40rpx !important;
								// height: fit-content;
								background: linear-gradient(0deg, #9438FC 0%, #6988FA 100%);
								line-height: 48rpx;
								// display: flex;
								// align-items: center;
								// justify-content: center;
								color: transparent;
								-webkit-background-clip: text;
							}
						}

						// flex-wrap: nowrap;
						// flex-wrap: wrap;
					}

				}

			}
		}

		.button_area {
			margin: 0 auto;
			width: fit-content !important;
			margin-top: 66rpx;
			display: flex;
			gap: 14rpx;
			width: 100%;

			button {
				width: 300rpx;
				height: 72rpx;
				margin: 0;
				line-height: 72rpx;
				border-radius: 60rpx;
				box-shadow: 2rpx 0rpx 2rpx #eceefe;

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