<template>
	<view class="page">
		<view class="headerBackground">
			<view class="fill_box">填充区域</view>
			<view class="swiperArea">
				<swiper circular="true" indicator-dots indicator-active-color="#fff" autoplay="true">
					轮播图区域
					<swiper-item v-for="item in bannerList" :key="item._id">
						<navigator v-if="item.target=='miniProgram'" :app-id="item.appid" :url="item.url" class="link"
							target="miniProgram">

							<image :src="item.picurl" mode=""></image>

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
								项目管理
								<img src="/common/images/index/Group_1128.png" alt="" />
							</view>

							<span>高效管理您的业务和进度</span>
						</view>

					</view>


					<view class="goingProjects">
						<view class="" style="margin-left: 26rpx;margin-top: 26rpx;">
							<view class="" style="color: #fff; font-size: 24rpx;margin-bottom: 26rpx;">
								进行中的项目
							</view>
							<view class="detail_projects" style="">
								<!-- <view v-for="item in 5" :key="item+'item'" class="detail_pro">
								</view> -->
								<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll"
									style="white-space: nowrap;">
									<view v-for="item in 5" :key="item+'item'" class="detail_pro">
									</view>
								</scroll-view>
							</view>
						</view>

					</view>
				</view>
				<view class="otherCard">
					<view class="agentCard">
						<view class=""
							style="background:url('/common/images/index/Group_804.png') no-repeat; width: 108rpx;height: 80rpx;">

						</view>
						<view class="agentText">
							<h4>代理管理</h4>
							<span>配置您的代理服务 </span>
						</view>
					</view>
					<view class="AIandkeyWordCard">
						<view class="AICard">
							<view class="pic">

							</view>
						</view>
						<view class="keyWordCard">

						</view>
					</view>
				</view>
			</view>

			<view class="lineCard">
				<view class="line_item" v-for="(item,index) in itemList" :key="item + 'index'">

				</view>
			</view>
			<view class="latestNews">
				<view class="latestNews_text">
					最新资讯
				</view>
				<view class="news_detail">
					<span>友益典签约江门新会互惠互赢(国资)</span>
					<view class="date">
						2025-5-14
					</view>
				</view>
			</view>
		</view>
		<CustomTabBar></CustomTabBar>
	</view>

</template>

<script setup>
	import CustomTabBar from "../../components/CustomTabBar.vue"

	const itemList = [{
		iconPath: '',
		text: '平台客服'
	}, {
		iconPath: '',
		text: '我的业务线'
	}, {
		iconPath: '',
		text: '公司动态'
	}, ]
</script>

<style lang="scss">
	.page {
		display: flex;
		flex-direction: column;

		.headerBackground {
			width: 100%;
			box-sizing: border-box;
			height: 494rpx;
			background: url("/common/images/index/头部背景.png");
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
					height: calc(100% - 30rpx);
					margin-bottom: auto;
					border-radius: 20rpx 20rpx 0 0;
					background-color: #fff;
				}
			}
		}

		.mainMenu {
			margin-top: -30rpx;
			box-sizing: border-box;
			height: 650rpx;
			width: 100%;
			background: pink;
			background: linear-gradient(to bottom, #ffffff 380rpx, #f5f5ff);
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

								img {
									margin-left: 16rpx;
								}
							}

							span {
								font-size: 12px;
								font-weight: 300;
								color: #fff;
							}
						}
					}

					.goingProjects {
						flex: 1;
						background: linear-gradient(to bottom, #7d6ffe, #9c4efc);
						box-shadow: 10rpx 10rpx 10rpx #7d6ffe;

						.detail_projects {
							height: 72rpx;
							background-color: transparent;
							overflow: hidden;
							display: flex;

							.scroll-view_H {
								.uni-scroll-view-content {
									display: flex;
								}

								.detail_pro {
									margin-right: 20rpx;
									height: 100%;
									aspect-ratio: 1;
									background-color: #e4e7ff;
									border-radius: 10rpx;
								}
							}

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

						.agentText {
							>span {
								font-size: 22rpx;
							}
						}
					}

					.AIandkeyWordCard {
						display: flex;
						justify-content: space-between;

						.AICard {
							width: 166rpx;
							height: 166rpx;
							background-color: orange;
							border-radius: 24rpx;
						}

						.keyWordCard {
							width: 166rpx;
							height: 166rpx;
							background-color: orange;
							border-radius: 24rpx;
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

					&:first-child {
						background: linear-gradient(45deg, #fffffe, #ffeee1);
					}

					&:nth-child(2) {
						background: linear-gradient(45deg, #fffffe, #f1fdff);
					}

					&:nth-child(3) {
						background: linear-gradient(45deg, #fffffe, #ede5ff);
					}
				}
			}

			.latestNews {
				margin-top: 20rpx;
				height: 118rpx;
				border-radius: 20rpx;
				background: linear-gradient(to right, #f6f9ff, #bfd2ff);
				display: flex;
				align-items: center;

				.latestNews_text {
					font-family: YouSheBiaoTiHei, YouSheBiaoTiHei;
					height: 94%;
					width: 80rpx;
					font-size: 36rpx;
				}

				.news_detail {
					height: 85%;
					width: 556rpx;
					border-radius: 10rpx;
					background-color: #f4f7ff;
					margin-left: 40rpx;
				}
			}
		}
	}
</style>