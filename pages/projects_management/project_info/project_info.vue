<template>
	<view class="page_top_background"></view>
	<CustomNavBar title="项目信息"></CustomNavBar>
	<view class="page">
		<view class="business_card">

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
							我又怎么可能只会复制
						</view>
					</view>
					<view class="info_date">
						业务线:&nbsp;&nbsp;佛山中秋月饼
					</view>
					<view class="info_date">
						关键词类型:&nbsp;&nbsp;业务长尾词
					</view>
				</view>

				<view class="status status_yishengxiao">
					已生效
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

			<!-- 第一个折叠区域 -->
			<view class="show_info" v-if="status==0">
				<view class="phase">
					<view class="phase_title" @click="toggleFold(1)">
						第一期
						<view class="bottom_arrow" :class="{ 'rotate-arrow': foldStates[1]}">

						</view>
					</view>
					<view class="phase_main" :class="{ 'show': foldStates[1] }">
						<view class="phase_item">
							<view class="item_name">
								1.佛山中秋月饼哪家好
							</view>
						</view>
						<view class="phase_item">
							<view class="item_name">
								1.佛山中秋月饼哪家好
							</view>
						</view>
						<view class="phase_item">
							<view class="item_name">
								1.佛山中秋月饼哪家好
							</view>
						</view>
						<view class="phase_item">
							<view class="item_name">
								1.佛山中秋月饼哪家好
							</view>
						</view>
					</view>
				</view>
				<view class="phase">
					<view class="phase_title" @click="toggleFold(2)">
						第一期
						<view class="bottom_arrow" :class="{ 'rotate-arrow': foldStates[2]}">

						</view>
					</view>
					<view class="phase_main" :class="{ 'show': foldStates[2] }">
						<view class="phase_item">
							<view class="item_name">
								1.佛山中秋月饼哪家好
							</view>
						</view>
						<view class="phase_item">
							<view class="item_name">
								1.佛山中秋月饼哪家好
							</view>
						</view>
						<view class="phase_item">
							<view class="item_name">
								1.佛山中秋月饼哪家好
							</view>
						</view>
						<view class="phase_item">
							<view class="item_name">
								1.佛山中秋月饼哪家好
							</view>
						</view>
					</view>
				</view>

				<view class="shengcheng" v-if="status==1">
					一键生成
					<view class="zhuanfa">
						<uni-icons style="font-size: 50rpx;" type="redo-filled" color="#8d3afc"></uni-icons>
					</view>
				</view>
				<view class="button_area" v-if="status==0" style="margin-top: 206rpx;">
					<button>取消</button>
					<button @click="open">确认</button>
				</view>
			</view>


			<view class="waiting" v-if="status==1">
				<view class="creating">
					<view class="waiting_title">

					</view>
					<view class="default_pic">

					</view>
					<view class="text">
						关键词生成中......
					</view>
				</view>
				<view class="button_area" v-if="status==1">
					<button>取消</button>
					<button>刷新</button>
				</view>
			</view>

		</view>
		<uni-popup ref="popup" type="center" :is-mask-click="false">
			<view class="success">
				<view class="pic">

				</view>
				<view class="title">
					已成功提交
				</view>
				<view class="tip">
					业务线:&nbsp;&nbsp;佛山中秋月饼
				</view>
				<view class="button_area">
					<button @click="close">取消</button>
					<button>查看</button>
				</view>

			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import ProjectCard from '../../../components/ProjectCard.vue'

	const status = ref(0)
	const foldStates = ref({
		1: true,
		2: false,
		3: false
	})

	const toggleFold = (index) => {
		foldStates.value[index] = !foldStates.value[index]
	}
	const popup = ref()

	// Open and close popup
	const open = () => {
		// Validate form before submitting
		// form.value.validate().then(res => {
		// console.log('Form data:', formData.value)
		popup.value.open('center')
		// }).catch(err => {
		// 	console.log('Form validation failed:', err)
		// })
	}

	const close = () => {
		popup.value.close()
	}

	const gotoView = () => {
		uni.navigateTo({
			url: '/pages/business_line/view_info/view_info'
		})
	}
</script>

<style lang="scss" scoped>
	.success {
		width: 512rpx;
		height: 402rpx;
		background-color: #fff;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.pic {

			width: 160rpx;
			height: 160rpx;
			background: url('/common/images/index/chenggongtijiao.webp') no-repeat center center;
			background-size: cover;
			position: absolute;
			left: 50%;
			top: -56rpx;
			transform: translateX(-50%);

		}

		.title {
			margin-top: 110rpx;
			font-size: 30rpx;
			line-height: 48rpx;
			margin-bottom: 16rpx;
		}

		.tip {
			position: relative;
			/* 确保伪元素定位正确 */
			text-align: center;
			letter-spacing: 1rpx;
			font-size: 26rpx;
			color: #888888;
			margin-bottom: 32rpx;
			width: 356rpx;
			height: 62rpx;
			line-height: 62rpx;
			color: #9438FC;
			text-shadow: 0 0 1rpx #9438FC;
			font-size: 24rpx;
			z-index: 1;
			/* 确保内容在伪元素之上 */
			background: transparent;

			/* 移除原背景，改用伪元素实现 */
			/* 倾斜的伪元素背景 */
			&::before {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background: #F2EDFF;
				border-radius: 6rpx;
				transform: skewX(-15deg);
				/* 水平倾斜 -15 度（可调整角度） */
				z-index: -1;
				/* 背景置于内容下方 */
			}
		}


		.button_area {
			display: flex;
			width: 85%;
			gap: 24rpx;

			button {
				width: 300rpx;
				height: 70rpx;
				line-height: 70rpx;
				border-radius: 60rpx;
				color: #fff;
				font-size: 24rpx;
				box-shadow: 0rpx 4rpx 10rpx 0rpx rgba(34, 84, 244, 0.1);

				&:last-child {
					background: linear-gradient(to right, #2e51f5, #893afb);
				}


			}
		}

	}

	.button_area {
		display: flex;
		justify-content: space-between;

		button {
			width: 300rpx;
			height: 72rpx;
			border-radius: 60rpx;
			box-shadow: 0rpx 4rpx 10rpx 0rpx rgba(34, 84, 244, 0.1);

			&:first-child {
				background-color: #fff;
				font-size: 28rpx;
				color: #333333;
			}

			&:last-child {
				background: linear-gradient(to right, $theme-blue, $theme-purple);
				font-size: 28rpx;
				color: #FFFFFF;
			}
		}
	}

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
			min-height: 1476rpx;
			padding: 32rpx;
			border-radius: 20rpx;
			background: rgba(255, 255, 255, 0.7);
			margin-top: 20rpx;
			position: relative;

			.project_item {
				display: flex;
				width: 100%;
				height: 150rpx;
				padding: 16rpx;
				margin-bottom: 16rpx;
				background-color: transparent;
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

				.status {
					position: absolute;
					right: 0;
					bottom: 0;
					width: 110rpx;
					height: 44rpx;
					font-size: 24rpx;
					// color: #FFFFFF;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 0rpx 10rpx 0rpx 10rpx;
				}
			}

			.beforeBetter {
				position: absolute;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 200rpx;
				height: 62rpx;
				background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
				border-radius: 0rpx 0rpx 0rpx 0rpx;
				opacity: 0.6;
				right: 0;
				top: 32rpx;
				color: $theme-purple;
				font-size: 24rpx;
			}

			.title {
				.title_title {
					display: flex;
					align-items: center;
					margin-bottom: 16rpx;

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
						transform: scaleX(0.5);
					}
				}

				.time2 {
					font-size: 28rpx;
					color: #9438FC;
					font-weight: bold;
				}
			}

			.projectId {
				font-size: 28rpx;
				width: 100%;
				margin-bottom: 30rpx;
			}

			.show_info {
				.phase {
					width: 100%;
					margin-bottom: 16rpx;
					box-shadow: 0rpx 4rpx 10rpx 0rpx rgba(0, 0, 0, 0.05);

					.phase_title {
						width: 622rpx;
						height: 90rpx;
						background: linear-gradient(180deg, #EFE1FF 0%, #FFFFFF 100%);
						border-radius: 10rpx 10rpx 10rpx 10rpx;
						font-size: 28rpx;
						color: #000000;
						display: flex;

						align-items: center;
						justify-content: center;
						position: relative;

						.bottom_arrow {
							position: absolute;

							right: 34rpx;
							width: 16rpx;
							height: 16rpx;
							border-bottom: 2rpx solid #000000;
							border-right: 2rpx solid #000000;
							transform: rotate(45deg);
							transition: all 0.5s ease;

							&.rotate-arrow {
								transform-origin: bottom bottom;
								transform: rotate(225deg);
							}
						}
					}

					.phase_main {
						max-height: 0;
						padding-left: 32rpx;
						padding-bottom: 0;
						overflow: hidden;
						transition: all 0.5s ease-in-out;

						&.show {
							max-height: 1500rpx;
							// padding-bottom: 32rpx;
						}

						& .phase_item:last-child {
							padding-bottom: 32rpx;
						}

						.phase_item {
							width: 100%;




							margin-top: 32rpx;

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

								&::before {
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
								}


							}

							.item_status_view {
								width: 134rpx;
								height: 100%;
								display: flex;
								align-items: center;
								justify-content: center;
								background-color: #ffffff;
								position: relative;
								border-radius: 10rpx;
							}


						}
					}
				}

				.shengcheng {
					width: 400rpx;
					text-align: center;
					height: 72rpx;
					line-height: 72rpx;
					background: linear-gradient(90deg, #2254F4 0%, #9438FC 100%);
					border-radius: 100rpx;
					color: #fff;
					font-size: 28rpx;
					margin: 0 auto;
					margin-top: 48rpx;
					position: relative;
					// padding-right: 70rpx;

					/* 为右侧图标留出空间 */
					.zhuanfa {
						width: 60rpx;
						height: 60rpx;
						background: linear-gradient(270deg, #FFEDCB 0%, #FFFFFF 100%);
						border-radius: 30rpx;
						position: absolute;
						right: 6rpx;
						/* 微调位置 */
						top: 50%;
						/* 从顶部50%开始定位 */
						transform: translateY(-50%);
						display: flex;
						align-items: center;

						justify-content: center;
						/* 向上移动自身高度的一半 */
					}
				}
			}

			.waiting {
				.creating {
					width: 100%;
					height: 886rpx;
					background: #FFFFFF;
					box-shadow: 0rpx 4rpx 10rpx 0rpx rgba(0, 0, 0, 0.05);
					border-radius: 10rpx 10rpx 10rpx 10rpx;
					margin-bottom: 48rpx;

					.waiting_title {
						width: 100%;
						height: 98rpx;
						background: linear-gradient(180deg, #EFE1FF 0%, #FFFFFF 100%);
						border-radius: 10rpx 10rpx 10rpx 10rpx;
					}

					.default_pic {
						width: 240rpx;
						height: 240rpx;
						background: url('/common/images/index/white_dafault.svg') no-repeat center center;
						background-size: cover;
						margin: 0 auto;
						margin-bottom: 20rpx;
						margin-top: 118rpx;
					}

					.text {
						width: fit-content;
						margin: 0 auto;
						font-size: 28rpx;
					}
				}

				.button_area {
					display: flex;
					justify-content: space-between;

					button {
						width: 300rpx;
						height: 72rpx;
						border-radius: 60rpx;
						box-shadow: 0rpx 4rpx 10rpx 0rpx rgba(34, 84, 244, 0.1);

						&:first-child {
							background-color: #fff;
							font-size: 28rpx;
							color: #333333;
						}

						&:last-child {
							background: linear-gradient(to right, $theme-blue, $theme-purple);
							font-size: 28rpx;
							color: #FFFFFF;
						}
					}
				}

			}






		}
	}
</style>