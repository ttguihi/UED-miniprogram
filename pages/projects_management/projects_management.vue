<template>
	<view class="page_top_background">

	</view>
	<CustomNavBar title="项目管理"></CustomNavBar>
	<view class="page">
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
			<view class="top_area">
				<view class="top_left">
					<view class="user_name">
						UED001
					</view>
					<view class="remain_points">
						<view class="">
							剩余积分
						</view>
						<view class="">
							19,999
						</view>
					</view>
				</view>
				<view class="top_right">
					<view class="time">
						{{now}}
					</view>
					<view class="date">
						<view class="">
							日期
						</view>
						<view class="" style="font-size: 16rpx;">
							|
						</view>
						<view class="">
							{{date}}
						</view>
					</view>
				</view>
			</view>
			<view class="main_area">
				<view class="select_part">
					<view class="select_item" v-for="(tab, index) in tabs" :key="index"
						:class="{ active: current === index }" @click="current = index">
						{{ tab.name }}
					</view>
				</view>
				<view class="main_part">
					<view class="search-part">
						<uni-easyinput placeholder="请输入关键词" placeholderStyle="font-size:26rpx;">
							<template #right>
								<view class="search-icon">

								</view>
							</template>
						</uni-easyinput>
					</view>
					<view class="date_industry">
						<view class="date_select">
							<uni-data-select placeholder="近七天" />
						</view>
						<view class="industry_select">
							<uni-data-select placeholder="请选择行业" />
						</view>
					</view>
					<view class="projects_display">
						<ProjectCard v-for="project in filteredProjects" :key="project.id" :data="project" />
						<view v-if="filteredProjects.length === 0" class="empty-tip">
							暂无{{ tabs[current].name }}的项目
						</view>
					</view>
				</view>
			</view>

		</view>


		<view class="bottom-button">
			<button class="xinjian" @click="goAdd">新建项目</button>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		computed
	} from 'vue'
	import dayjs from 'dayjs';
	import CustomTabBar from '../../components/CustomTabBar.vue';
	import CustomNavBar from '../../components/CustomNavBar/CustomNavBar.vue';
	import ProjectCard from '../../components/ProjectCard.vue';
	const goAdd = () => {
		uni.navigateTo({
			url: '/pages/projects_management/add_project/add_project'
		})
	}
	const tabs = [{
			name: "全部项目",
			status: "all"
		},
		{
			name: "审核中",
			status: "shenhezhong"
		},
		{
			name: "待审核",
			status: "daishenhe"
		},
		{
			name: "进行中",
			status: "jinxingzhong"
		},
		{
			name: "已生效",
			status: "yishengxiao"
		},
		{
			name: "已失效",
			status: "yishixiao"
		}
	]
	const allProjects = ref([{
			id: 1,
			name: "项目A",
			status: "yishengxiao"
		},
		{
			id: 2,
			name: "项目B",
			status: "yishixiao"
		},
		{
			id: 3,
			name: "项目C",
			status: "jinxingzhong"
		}, {
			id: 4,
			name: "项目C",
			status: "jinxingzhong"
		},
		// ...更多数据
	])
	const filteredProjects = computed(() => {
		const currentTab = tabs[current.value]
		return currentTab.status === "all" ?
			allProjects.value :
			allProjects.value.filter(p => p.status === currentTab.status)
	})
	const banner = uni.getStorageSync('bannerList')
	const now = ref()
	const date = ref()
	const current = ref(0)
	setInterval(() => {
		now.value = dayjs().format("HH:mm:ss")
		// console.log(now.value);
	}, 1000)
	date.value = dayjs().format("YYYY年MM月DD日")
</script>


<style lang="scss" scoped>
	:deep() .uni-select__input-placeholder {
		font-size: 24rpx;
		color: #000000;
	}

	:deep() .uni-select {
		border: 1px solid transparent !important;
		// border-radius: 10rpx;
		// overflow: hidden;
	}

	:deep() .uni-stat-box {
		background-color: #f2edff;
		border-radius: 10rpx;
	}

	:deep() .uni-select__input-text {
		width: 230rpx;
	}

	.search-icon {
		width: 40rpx;
		height: 40rpx;
		background: url('/common/images/business/chaxun.svg') no-repeat center center;
		background-size: cover;
		margin-right: 26rpx;
	}

	.active {
		background: linear-gradient(to right, $theme-purple, $theme-blue);
		color: #fff;
	}

	//右箭头CSS实现
	.right_arrow {
		width: 12rpx;
		height: 12rpx;
		border-bottom: 2rpx solid #888888;
		border-right: 2rpx solid #888888;
		transform: rotate(-45deg);
	}




	.page {
		display: flex;
		flex-direction: column;

		.swiperArea {
			width: 100%;
			display: flex;
			justify-content: center;
			border-radius: 10rpx 10rpx 0 0;
			margin-top: 40rpx;
			overflow: hidden;

			swiper {
				width: 690rpx;
				height: 340rpx;
				border-radius: 10rpx 10rpx 0 0;
				overflow: hidden;

				&-item {
					width: 100%;
					height: 100%;
					border-radius: 10rpx 10rpx 0 0;
					overflow: hidden;

					.link {
						width: 100%;
						height: 100%;
						border-radius: 10rpx 10rpx 0 0;
						overflow: hidden;

						image {
							width: 100%;
							height: 100%;
							border-radius: 10rpx 10rpx 0 0;
						}
					}
				}
			}
		}


		.mainMenu {
			// margin-top: 0rpx;
			box-sizing: border-box;
			height: 1200rpx;
			// flex: 1;
			width: 100%;
			background: linear-gradient(180deg, #FFF6E5 0%, #FFFFFF 50%, #F5F5FF 100%);
			border-radius: 50rpx 50rpx 0 0;
			padding: 0 28rpx;
			padding-top: 28rpx;
			display: flex;
			flex-direction: column;
			z-index: 1;
			border-top: 2rpx solid #ffffff;

			.top_area {
				width: 100%;
				margin-bottom: 32rpx;
				padding: 0 18rpx;
				display: flex;
				justify-content: space-between;

				.top_left {
					.user_name {
						font-weight: 700;
						font-size: 40rpx;
						width: fit-content;
						background: linear-gradient(to right, $theme-blue, $theme-purple);
						color: transparent;
						-webkit-background-clip: text;
					}

					.remain_points {
						width: 254rpx;
						border-radius: 6rpx 6rpx 6rpx 6rpx;
						overflow: hidden;
						font-size: 24rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						margin-top: 8rpx;

						& view {
							display: flex;
							align-items: center;
							justify-content: center;
						}

						& view:first-child {
							flex: 1;
							background-color: #FFF1DD;
							color: #FF5900;

						}

						& view:last-child {
							flex: 1;
							background: linear-gradient(90deg, #FF7C12 0%, #FFAF6E 100%);
							color: #fff;
						}
					}
				}

				.top_right {
					.time {
						font-size: 40rpx;
						font-weight: bold;
						text-align: right;
						margin-bottom: 6rpx;
					}

					.date {
						display: flex;
						align-items: center;
						font-size: 24rpx;
						color: #454545;
						gap: 16rpx;
					}
				}
			}


			.main_area {
				width: 100%;
				height: 100%;
				border-radius: 20rpx 20rpx 0rpx 0rpx;
				background-color: #fff;
				overflow: hidden;

				.select_part {
					display: flex;
					overflow: hidden;
					background-color: #f5f8ff;
					height: 76rpx;
					border-radius: inherit;
					width: 100%;
					overflow-x: auto; // 允许横向滚动
					// overflow-y: hidden; // 禁止纵向滚动
					white-space: nowrap;

					&::-webkit-scrollbar {
						display: none;
					}

					.select_item {
						transition: all 0.3s;
						flex: 0 0 154rpx;
						width: 154rpx;
						height: 100%;
						background-color: #f5f8ff;
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}

				.main_part {
					padding: 16rpx 30rpx 0 30rpx;

					.search-part {
						display: flex;
						margin-bottom: 22rpx;
					}

					.date_industry {
						width: 100%;
						display: flex;
						justify-content: space-between;
						margin-bottom: 32rpx;
					}

					.projects_display {
						width: 100%;
						height: 800rpx;
						background-color: #fff;
						border-radius: 10rpx;
						overflow-y: auto;

						&::-webkit-scrollbar {
							display: none;
						}

						.project_item {
							display: flex;
							width: 100%;
							height: 150rpx;
							padding: 16rpx;
							margin-bottom: 16rpx;
							background-color: #f4f7ff;
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
									font-weight: bold;
									font-size: 28rpx;
									color: #000000;
								}

								.info_line {
									font-weight: 400;
									font-size: 22rpx;
									color: #9438FC;
								}

								.info_date {
									font-size: 20rpx;
									color: #888888;
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
								top: 0;
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
					}

				}

			}
		}

		.bottom-button {
			position: fixed;
			width: 100%;
			bottom: 0;
			height: 170rpx;
			background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 31%, #FFFFFF 100%);
			z-index: 2;

			.xinjian {
				width: 400rpx;
				height: 72rpx;
				background: linear-gradient(to right, $theme-blue, $theme-purple);
				border-radius: 60rpx;
				color: #fff;
				line-height: 72rpx;
			}
		}

	}
</style>