<template>
	<view class="page">
		<view class="page_top_background">

		</view>
		<CustomNavBar></CustomNavBar>
		<view class="swiperArea">
			<swiper autoplay="true" circular="true" style="width: 690rpx; margin: 0 auto;">
				<swiper-item v-for="(item, index) in banner" :key="index">
					<navigator :url="item.linkurl" class="link" style="border-radius: 10rpx;">
						<image :src="item.image" mode="widthFix" style="border-radius: 10rpx;"></image>
					</navigator>
				</swiper-item>
			</swiper>
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

									<view v-for="item in 10" :key="item+'item'" class="detail_pro ">
										<!-- 内容 -->
									</view>
								</scroll-view>
							</view>

						</view>

					</view>
				</view>
				<view class="otherCard">

					<navigator url="">
						<view class="agentCard">
							<view class="Agent_image">
								<image src="/common/images/index/transition.jpg" mode=""></image>
							</view>
							<view class="agentText">

								<h4 class="agentTitle">代理管理</h4>
								<view class="small_font">配置您的代理服务</view>
							</view>
						</view>
					</navigator>
					<view class="AIandkeyWordCard">

						<navigator url="/pages/searchAIRO/searchAIRO">
							<view class="AICard">
								<view class="AI_image ">
									<image src="/common/images/index/query.jpg" mode=""></image>
								</view>
								<view class="AItext">
									AIRO查询
								</view>
							</view>
						</navigator>
						<navigator url="">
							<view class="AICard" style="background:linear-gradient(to bottom,#c5edff,#eefaff);">
								<view class="AI_image ">
									<image src="/common/images/index/letter.jpg" mode=""></image>
								</view>
								<view class="AItext ">
									关键词管理
								</view>
							</view>
						</navigator>

					</view>

				</view>
			</view>
			<view class="lineCard">

				<!-- <view class="line_item" v-for="(item,index)  in itemList" :key="index + 'index'">
					<view :class="`iconBox${index+1}`">
					</view>
					<view class="">
						{{ item.text }}
					</view>
				</view> -->

				<navigator v-for="(item,index)  in itemList" :url="item.navigateUrl" :key="index + 'index'"
					class="line_item">
					<view class="line_box">
						<view :class="`iconBox${index+1}`">
						</view>
						<view class="">
							{{ item.text }}
						</view>
					</view>
				</navigator>
			</view>
			<view class="latestNews">
				<view class="latestNews_text">
					最新资讯
				</view>

				<view class="news_detail" @click="gotoNews">
					<view class="news_date">
						<view class="news">{{information[0].title}}</view>
						<view class="date">
							{{information[0].create_time}}
						</view>
					</view>

					<view class="right_arrow">

					</view>
				</view>


			</view>
		</view>

		<view class="example">
			<view class="example_title svg-corner">
				精选案例
			</view>
			<navigator url="/pages/examples/examples" open-type="navigate">
				<button class="more">查看更多</button>
			</navigator>


			<ExampleCard v-for="item,index in orderList" :companyName="item.companyName" :orderIcon="item.image"
				:id="item.id" :orderName="item.orderName" :key="index"></ExampleCard>
			<!-- <ExampleCard></ExampleCard>
			<ExampleCard></ExampleCard>
			<ExampleCard></ExampleCard> -->

		</view>

		<view class="news_area">

			<view class="new_area_title">
				最新资讯
			</view>
			<view class="new_area_main">
				<view class="new_area_left">
					<NewsCard v-for="item,index in informationLeft" :title="item.title" :createTime="item.create_time"
						:imageUrl="item.imageurl" :key="index"></NewsCard>


				</view>
				<view class="new_area_right">
					<NewsCard v-for="item,index in informationRight" :title="item.title" :createTime="item.create_time"
						:imageUrl="item.imageurl" :key="index"></NewsCard>
				</view>
			</view>
		</view>




		<view class="goTop" :class="{ 'goTop--show': flag }" @click="goTop" v-show="flag">
			<view class="icon_goTop">
			</view>
			<view class="goTop_text">
				返回顶部
			</view>
		</view>

		<view style="width: 100%;height: calc( 180rpx + env(safe-area-inset-bottom) / 2);"></view>
		<CustomTabBar></CustomTabBar>
	</view>
</template>

<script setup>
	import CustomTabBar from '../../components/CustomTabBar.vue';
	import SmallCard1Vue from '../../components/smallCard1.vue';
	import ExampleCard from '../../components/ExampleCard.vue'
	import CustomNavBar from '../../components/CustomNavBar/CustomNavBar.vue';
	import NewsCard from '../../components/NewsCard.vue';
	import {
		ref
	} from 'vue';
	import {
		onPageScroll
	} from '@dcloudio/uni-app';
	import {
		apiGetHomeData
	} from '../../api/api';
	let itemList = ref([])
	const flag = ref(false) //判断是否显示返回顶部按钮

	//前往最新资讯
	const gotoNews = () => {
		uni.navigateTo({
			url: "/pages/news_detail/news_detail"
		})
	}

	const homeData = ref()
	//轮播图
	const banner = ref([])
	//最新资讯数据
	const information = ref([])
	const informationLeft = ref([])
	const informationRight = ref([])
	//精选案例
	const orderList = ref([])
	const project = ref({})
	const goTop = () => {
		uni.pageScrollTo({
			scrollTop: 0, //滚动到距离顶部为0
			duration: 300 //滚动时长
		})
	}

	onPageScroll(e => {
		if (e.scrollTop > 500) {
			flag.value = true
		} else {
			flag.value = false
		}
	})

	const getHomeData = () => {
		apiGetHomeData().then(res => {
			// console.log(res);
			homeData.value = res
			banner.value = homeData.value.banner
			uni.setStorageSync('bannerList', banner.value)
			//处理数据
			homeData.value.information.map(item => {
				item.create_time = item.create_time.slice(0, 10)
			})
			information.value = homeData.value.information
			informationLeft.value = information.value.filter((item, index) => {
				// console.log(index);
				return index % 2 == 0
			})
			informationRight.value = information.value.filter((item, index) => {
				return index % 2 == 1
			})
			orderList.value = homeData.value.caseList
			project.value = homeData.value.project
			// console.log(informationLeft
			// 	.value);
		})
	}

	itemList.value = [{
		iconPath: '/common/images/index/service.jpg',
		text: '平台客服',
		navigateUrl: '/pages/examples/examples'
	}, {
		iconPath: '/common/images/index/order_green.jpg',
		text: '我的业务线',
		navigateUrl: '/pages/examples/examples'
	}, {
		iconPath: '/common/images/index/order_purple.jpg',
		text: '公司动态',
		navigateUrl: '/pages/examples/examples'
	}]

	getHomeData()
</script>

<style lang="scss" scoped>
	.right_arrow {
		width: 12rpx;
		height: 12rpx;
		border-bottom: 2rpx solid #888888;
		border-right: 2rpx solid #888888;
		transform: rotate(-45deg);
	}

	.goTop {
		width: 198rpx;
		height: 68rpx;
		background: linear-gradient(to right, #3150f5, #8a3bfc);
		position: fixed;
		right: 0;
		bottom: 500rpx;
		border-radius: 10rpx 0 0 10rpx;
		z-index: 100;
		display: flex;
		align-items: center;
		padding: 12rpx;
		opacity: 0; // 默认透明
		transition: all 0.5s ease; // 过渡效果
		pointer-events: none; // 隐藏时禁止点击
		transform: translateX(198rpx);

		&--show {
			opacity: 1; // 显示时不透明
			transform: translateX(0);
			pointer-events: auto; // 显示时允许点击
		}

		.icon_goTop {
			margin-top: 6rpx;
			width: 56rpx;
			height: 56rpx;
			background: url('/common/images/index/goTop.svg') no-repeat center center;
		}

		.goTop_text {
			font-size: 24rpx;
			color: #fff;
			white-space: nowrap;
		}
	}

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

		.swiperArea {
			width: 100%;

			display: flex;
			justify-content: center;
			border-radius: 10rpx !important;
			margin-top: 40rpx;
			overflow: hidden;

			swiper {
				width: 690rpx;
				height: 340rpx;
				border-radius: 10rpx;
				overflow: hidden;

				&-item {
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
					overflow: hidden;

					.link {
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
						overflow: hidden;

						image {
							width: 100%;
							height: 100%;
							border-radius: 10rpx;
						}
					}
				}
			}
		}


		.mainMenu {
			margin-top: 0rpx;
			box-sizing: border-box;
			height: 640rpx;
			width: 100%;
			background: pink;
			background: linear-gradient(to bottom, #ffffff 300rpx, #f3f3fd);
			border-radius: 50rpx 50rpx 0 0;
			padding: 0 28rpx;
			padding-top: 28rpx;
			display: flex;
			flex-direction: column;
			z-index: 1;
			border-top: 2rpx solid #ffffff;


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
				}

				.agentCard {
					width: 100%;
					height: 144rpx;
					background: linear-gradient(to bottom, #b1cbff, #fbfcff);
					border-radius: 24rpx;
					display: flex;
					align-items: center;
					padding: 0 24rpx;
				}

				.Agent_image {
					width: 108rpx;
					height: 80rpx;
					background-color: transparent;

					image {
						width: 100%;
						height: 100%;
						border-radius: 20rpx;
						object-fit: cover;
						/* 确保图片适应容器 */
					}
				}

				.agentText {
					margin-left: 20rpx;
					font-size: 34rpx;
					font-weight: 600;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
				}

				.agentTitle {
					margin-bottom: 20rpx;
				}

				.AIandkeyWordCard {
					display: flex;
					justify-content: space-between;
				}

				.AICard {
					width: 166rpx;
					height: 144rpx;
					background: linear-gradient(to bottom, #b7e9e7, #e6f8f6);
					border-radius: 24rpx;
					display: flex;
					/* 使用flex布局 */
					flex-direction: column;
					align-items: center;
					/* 居中对齐 */
					justify-content: center;
					/* 垂直居中 */
					position: relative;

					.AI_image {
						width: 108rpx;
						height: 80rpx;
						border-radius: 10rpx;
						position: absolute;
						top: -22rpx;
						overflow: hidden;

						image {
							width: 100%;
							height: 100%;
							object-fit: cover;
							/* 确保图片适应容器 */
						}
					}

					.AItext {
						font-size: 26rpx;
						font-weight: 600;
						text-align: center;
						margin-top: 10rpx;
						/* 调整间距 */
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

					.line_box {
						display: flex;
						align-items: center;
					}

					.iconBox1 {
						width: 50rpx;
						height: 50rpx;
						margin-right: 10rpx;
						background: url("/common/images/index/service.svg") no-repeat center center;

					}

					.iconBox2 {
						width: 50rpx;
						height: 50rpx;
						margin-right: 10rpx;
						background: url("/common/images/index/order_green.svg") no-repeat center center;

					}

					.iconBox3 {
						width: 50rpx;
						height: 50rpx;
						margin-right: 10rpx;
						background: url("/common/images/index/order_purple.svg") no-repeat center center;

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
					padding: 0 20rpx;
					background-color: #f4f7ff;
					margin-left: 40rpx;
					display: flex;
					align-items: center;
					justify-content: space-around;


					.news_date {
						width: 90%;
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
		background-color: #f5f5ff;
		position: relative;
		z-index: 1;
		padding-top: 45rpx;
		padding-bottom: 50rpx;


		.more {
			position: absolute;
			right: 32rpx;
			top: 0;
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
		}

		.example_title {
			position: absolute;
			top: 0;
			left: 0;
			width: 192rpx;
			height: 192rpx;
			color: #fff;
			font-weight: 500;
			padding-top: 12rpx;
			padding-left: 28rpx;
		}
	}

	.news_area {


		position: relative;
		background-color: #f5f5ff;
		padding: 0 32rpx;

		.new_area_title {
			width: 192rpx;
			height: 192rpx;
			position: absolute;
			top: 0;
			right: 0;
			background: url('/common/images/index/corner_right.svg') no-repeat center center;
			background-size: 100% 100%;
			color: #fff;
			padding-left: 58rpx;
			padding-top: 14rpx;
			font-weight: 700;
		}

		.new_area_main {
			width: 100%;

			display: flex;
			justify-content: space-between;

			.news_item {
				width: 100%;
				height: 288rpx;
				background-color: skyblue;
				border-radius: 10rpx;
				margin-bottom: 16rpx;
			}

			.new_area_left {
				width: 336rpx;
				border-radius: 10rpx;
			}

			.new_area_right {
				margin-top: 70rpx;
				width: 336rpx;
				z-index: 5;
				border-radius: 10rpx;
			}
		}
	}
	}
</style>