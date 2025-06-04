<template>
	<view class="page">
		<view class="headerBackground">
			<view class="fill_box" style="color: #fff;text-align: center;font-weight: 700;font-size: 50rpx;">填充区域</view>
			<view class="swiperArea">
				<swiper autoplay="true" circular="true">
					<swiper-item>
						<!--  -->
						<navigator url="" class="link">
							<image src="/common/images/index/header_background.jpg" mode="widthFix"></image>
						</navigator>
					</swiper-item><swiper-item>
						<!--  -->
						<navigator url="" class="link">
							<image src="/common/images/index/header_background.jpg" mode="widthFix"></image>
						</navigator>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="mainMenu">
			<view class="cardArea">
				<view class="projectCard">

					<view class="project_title">
						<view class="title_top">
							<view class="arrow">
								<view class="">
									项目管理

								</view>
								<image src="/common/images/index/arrow.png" mode=""></image>
							</view>
							<view class="small_font">高效管理您的业务和进度</view>
						</view>

					</view>


					<view class="goingProjects">
						<view class="" style="margin-left: 26rpx;margin-top: 26rpx;">
							<view class="" style="color: #fff; font-size: 24rpx;margin-bottom: 26rpx;">
								进行中的项目
							</view>
							<view class="detail_projects">

								<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" enable-flex>

									<view v-for="item in 10" :key="item+'item'" class="detail_pro">
										<!-- 内容 -->
									</view>
								</scroll-view>
							</view>

						</view>

					</view>
				</view>
				<view class="otherCard">
					<view class="agentCard">
						<view class="Agent_image">
							<image src="/common/images/index/transition.jpg" mode=""></image>
						</view>
						<view class="agentText">

							<h4 class="agentTitle">代理管理</h4>
							<view class="small_font">配置您的代理服务</view>
						</view>
					</view>
					<view class="AIandkeyWordCard">
						<view class="AICard">
							<view class="AI_image">
								<image src="/common/images/index/query.jpg" mode=""></image>
							</view>
							<view class="AItext">
								AIRO查询
							</view>
						</view>
						<view class="AICard" style="background:linear-gradient(to bottom,#c5edff,#eefaff);">
							<view class="AI_image" style="background-color: transparent;">
								<image src="/common/images/index/letter.jpg" mode=""></image>
							</view>
							<view class="AItext">
								关键词管理
							</view>
						</view>
					</view>

				</view>
			</view>
			<view class="lineCard">
				<view class="line_item" v-for="(item,index)  in itemList" :key="index + 'index'">
					<view :class="`iconBox${index+1}`">
						<!-- <image :src="item.iconPath" alt=""></image> -->

					</view>
					<view class="">
						{{ item.text }}
					</view>
				</view>
			</view>
			<view class="latestNews">
				<view class="latestNews_text">
					最新资讯
				</view>
				<view class="news_detail">
					<view class="news_date">
						<view class="news">友益典签约江门新会互惠互赢(国资)sssssss...</view>
						<view class="date">
							2025-5-14
						</view>
					</view>


					<view class="right_arrow">
						>
					</view>
				</view>
			</view>
		</view>
		<view class="example">
			<view class="example_title">
				精选案例
			</view>
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

			<button class="more" @click="navigatoExamples">查看更多</button>


		</view>


		<view style="width: 100%;height: calc( 80rpx + env(safe-area-inset-bottom) / 2);"></view>
		<CustomTabBar></CustomTabBar>
	</view>
</template>

<script setup>
	import CustomTabBar from '../../components/CustomTabBar.vue';
	import SmallCard1Vue from '../../components/smallCard1.vue';
	import ExampleCard from '../../components/ExampleCard.vue'
	import {
		ref
	} from 'vue';
	let itemList = ref([])
	itemList.value = [{
		iconPath: '/common/images/index/service.jpg',
		text: '平台客服'
	}, {
		iconPath: '/common/images/index/order_green.jpg',
		text: '我的业务线'
	}, {
		iconPath: '/common/images/index/order_purple.jpg',
		text: '公司动态'
	}]

	console.log(itemList.value);
	const navigatoExamples = () => {
		uni.navigateTo({
			url: '/pages/examples/examples'
		});
	}
</script>

<style lang="scss" scoped>
	.uni-scroll-view-content {
		display: flex !important;
	}

	.small_font {
		font-size: 20rpx;
		font-weight: 300;
	}

	.page {
		display: flex;
		flex-direction: column;

		.headerBackground {
			width: 100%;
			box-sizing: border-box;
			height: 494rpx;
			background: url("/common/images/index/header_background.jpg");
			background-size: 100% 100%;
			display: flex;
			flex-direction: column;


			.fill_box {
				height: 150rpx;
				width: 100%;
			}

			.swiperArea {
				box-sizing: border-box;
				width: 100%;

				flex: 1;
				padding: 0 28rpx;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;


				swiper {
					width: 700rpx;
					height: 315rpx;
					margin-bottom: auto;

					&-item {
						width: 100%;
						height: 100%;


						.link {
							width: 100%;
							height: 100%;

							image {
								width: 100%;
								height: 100%;
								border-radius: 10rpx;
							}
						}


					}
				}
			}
		}

		.mainMenu {
			margin-top: -30rpx;
			box-sizing: border-box;
			height: 640rpx;
			width: 100%;
			background: pink;
			background: linear-gradient(to bottom, #ffffff 300rpx, #f3f3fd);
			border-radius: 40rpx 40rpx 0 0;
			padding: 0 28rpx;
			padding-top: 28rpx;
			display: flex;
			flex-direction: column;

			.cardArea {
				width: 100%;
				display: flex;
				justify-content: space-around;

				.projectCard {
					box-sizing: border-box;
					width: 326rpx;
					height: 326rpx;
					background-color: pink;
					border-radius: 24rpx;
					overflow: hidden;
					display: flex;
					flex-direction: column;

					.project_title {
						background: linear-gradient(-45deg, #5f70ff, #6e61fe);
						height: 132rpx;

						display: flex;
						flex-direction: column;
						font-weight: 500;
						font-size: 30rpx;
						color: #fff;

						.title_top {
							margin: auto 0;
							margin-left: 26rpx;

							.arrow {
								display: flex;
								align-items: center;
								font-size: 28rpx;
								font-weight: 700;
								margin-bottom: 16rpx;

								image {
									margin-left: 16rpx;
									width: 34rpx;
									height: 34rpx;
									background-color: transparent;
								}
							}

							&>span {
								font-size: 38rpx;
								font-weight: 300;
								color: #fff;
							}
						}
					}

					.goingProjects {
						flex: 1;
						background: linear-gradient(to bottom, #7d6ffe, #9c4efc);
						box-shadow: 10rpx 10rpx 10rpx #7d6ffe;
						position: relative;
						border: 2rpx solid #7e70fe;

						.detail_projects {
							height: 72rpx;
							background-color: transparent;
							overflow: hidden;
							display: flex;




							:deep() {
								.uni-scroll-view-content {
									display: flex;
								}
							}

							.scroll-view_H {
								display: flex !important;

								.detail_pro {
									margin-right: 20rpx;
									height: 100%;
									aspect-ratio: 1;
									background-color: #e4e7ff;
									border-radius: 10rpx;
								}
							}

						}

						&::after {
							content: '';
							position: absolute;
							bottom: 24rpx;
							right: 0;
							width: 26rpx;
							background: #8671fd;
							height: 118rpx;
							filter: blur(20rpx);
						}

					}

				}


				.otherCard {
					display: flex;
					flex-direction: column;
					width: 348rpx;
					height: 326rpx;
					justify-content: space-between;

					.agentCard {
						width: 100%;
						height: 144rpx;
						background: linear-gradient(to bottom, #b1cbff, #fbfcff);
						border-radius: 24rpx;
						display: flex;
						align-items: center;
						padding: 0 24rpx;

						.Agent_image {
							width: 108rpx;
							height: 80rpx;
							background-color: transparent;

							image {
								width: 100%;
								height: 100%;
								border-radius: 20rpx;
							}
						}

						.agentText {
							margin-left: 20rpx;
							font-size: 34rpx;
							font-weight: 600;
							display: flex;
							flex-direction: column;
							justify-content: space-around;



							.agentTitle {
								margin-bottom: 20rpx;
							}
						}
					}

					.AIandkeyWordCard {
						display: flex;
						justify-content: space-between;

						.AICard {
							width: 166rpx;
							height: 166rpx;
							background: linear-gradient(to bottom, #b7e9e7, #e6f8f6);
							border-radius: 24rpx;
							position: relative;

							>img {
								position: absolute;
								left: 0;
								right: 0;
								margin: auto;
								top: -20rpx;
							}

							.AI_image {
								position: absolute;
								background-color: transparent;
								/*定位居中操作*/
								left: 50%;
								transform: translate(-50%);
								top: -10%;
								width: 108rpx;
								height: 80rpx;

								image {
									width: 100%;
									height: 100%;
									mix-blend-mode: multiply;
								}
							}

							.AItext {
								font-size: 26rpx;
								font-weight: 600;
								text-align: center;
								margin-top: 90rpx;
							}
						}


					}
				}

			}

			.lineCard {
				height: 100rpx;
				width: 100%;
				background-color: transparent;
				border-radius: 20rpx;
				margin-top: 20rpx;
				display: flex;
				justify-content: space-between;
				overflow: hidden;

				.line_item {
					height: 100%;
					width: 220rpx;
					border-radius: 20rpx;
					background-color: #5f70ff;
					display: flex;
					padding-left: 24rpx;
					align-items: center;
					font-weight: 500;
					box-shadow: 5rpx 5rpx 15rpx #f4f4fe;
					font-size: 24rpx;

					.iconBox1 {
						width: 50rpx;
						height: 50rpx;
						margin-right: 10rpx;
						background: url("/common/images/index/service.jpg") no-repeat center center;
						mix-blend-mode: multiply;
					}

					.iconBox2 {
						width: 50rpx;
						height: 50rpx;
						margin-right: 10rpx;
						background: url("/common/images/index/order_green.jpg") no-repeat center center;
						mix-blend-mode: multiply;
					}

					.iconBox3 {
						width: 50rpx;
						height: 50rpx;
						margin-right: 10rpx;
						background: url("/common/images/index/order_purple.jpg") no-repeat center center;
						mix-blend-mode: multiply;
					}

					&:first-child {
						background: linear-gradient(45deg, #fffffe, #ffeee1);
						color: #ff8a2e;
					}

					&:nth-child(2) {
						background: linear-gradient(45deg, #fffffe, #f1fdff);
						color: #14a99a;
					}

					&:nth-child(3) {
						background: linear-gradient(45deg, #fffffe, #ede5ff);
						color: #973efc;
					}
				}
			}

			.latestNews {
				margin-top: 20rpx;
				height: 118rpx;
				border-radius: 20rpx;
				background: linear-gradient(to right, #f6f9ff, #bfd2ff 35%);
				display: flex;
				align-items: center;
				padding-left: 28rpx;
				box-sizing: border-box;

				.latestNews_text {

					width: 80rpx;
					font-size: 36rpx;
					font-family: 'niceTitle';


					color: #2d71e4;
				}

				.news_detail {
					height: 85%;
					width: 540rpx;
					border-radius: 10rpx;
					padding: 0 30rpx;
					background-color: #f4f7ff;
					margin-left: 40rpx;
					display: flex;
					align-items: center;
					justify-content: space-around;


					.news_date {
						width: 100%;
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: space-around;

						.news {
							width: 100%;
							font-size: 26rpx;
							white-space: nowrap;
							font-weight: 500;
							overflow: hidden;
							text-overflow: ellipsis;

						}

						.date,
						{
						color: #aeafb0;
						font-size: 20rpx;

					}

				}

				.right_arrow {
					color: #aeafb0;
					font-size: 50rpx;
				}

			}
		}
	}

	.example {
		height: 450rpx;
		background-color: #f5f5ff;
		position: relative;

		.more {
			position: absolute;
			right: 28rpx;
			width: 128rpx;
			height: 46rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background: linear-gradient(to right, #fefeff, #eddeff);
			white-space: nowrap;
			font-size: 24rpx;
			color: #ae68fc;
			font-weight: 600;
			border-color: transparent;
			;
		}

		.example_title {
			position: absolute;
			top: 0;
			left: 0;
			width: 192rpx;
			height: 192rpx;
			background: url('/common/images/index/corner.jpg') no-repeat;

			color: #fff;
			font-weight: 500;
			padding-top: 12rpx;
			padding-left: 28rpx;

		}

		.enterprise {
			position: absolute;
			left: 50%;
			transform: translate(-50%);
			top: 62rpx;
			height: 320rpx;
			width: 690rpx;
			background: linear-gradient(to bottom, #ebdaff, #ffffff 35%);
			border-radius: 20rpx;
			padding: 20rpx;
			margin: 0 auto;
			z-index: 1;

			.upper_part {
				display: flex;
				margin-bottom: 14rpx;

				.default_pic {

					height: 208rpx;
					aspect-ratio: 1;
					background: url('/common/images/index/default.jpg') no-repeat;
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
	}
	}
</style>