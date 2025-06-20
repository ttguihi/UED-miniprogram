<template>
	<view class="page_top_background">

	</view>
	<CustomNavBar title="我的业务线"></CustomNavBar>
	<view class="page">
		<view class="business_card">
			<view class="search-part">
				<uni-easyinput placeholder="请输入关键词" placeholderStyle="font-size:26rpx;">
					<template #right>
						<view class="search-icon">

						</view>
					</template>
				</uni-easyinput>

			</view>
			<view class="select_part">

				<view v-for="(item,index) in tabs" :key="index" class="select" :class="{ active: current === index }"
					@click="current = index">
					{{item.name}}
				</view>
			</view>

			<view class="content_part">

				<BusinessCard :status="obj[business.status]" v-for="business in filterBusiness" :key="business.id"
					:data="business">
				</BusinessCard>


			</view>
		</view>
	</view>

</template>

<script setup>
	import {
		computed,
		ref
	} from 'vue'
	import BusinessCard from '../../components/BusinessCard.vue';
	import {
		apiGetAllBusiness
	} from '../../api/business/api';
	const allBusinessInfo = ref([])
	const current = ref(0)
	const tabs = [{
		name: '全部',
		status: "all"
	}, {
		name: '进行中',
		status: 1
	}, {
		name: '已生效',
		status: 2
	}, {
		name: '已失效',
		status: 3
	}, ]

	const obj = {
		1: "orange",
		2: "green",
		3: "white"
	}
	const getAllBusiness = async () => {
		let res = await apiGetAllBusiness()
		// console.log(res.data);
		allBusinessInfo.value = res.data
		// console.log(allBusinessInfo.value);
	}
	getAllBusiness()


	const filterBusiness = computed(() => {
		const currentTab = tabs[current.value]
		return currentTab.status === "all" ? allBusinessInfo.value : allBusinessInfo.value.filter(p => p.status ===
			currentTab.status)
	})
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



	:deep() .uni-easyinput__content-input {
		height: 68rpx !important;
		width: 450rpx !important;
	}

	.search-icon {
		width: 40rpx;
		height: 40rpx;
		background: url('/common/images/business/chaxun.svg') no-repeat center center;
		background-size: cover;
		margin-right: 26rpx;
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

			.search-part {
				display: flex;
				margin-bottom: 22rpx;

				.icon_search {}
			}

			.select_part {
				width: 100%;
				height: 68rpx;
				margin-bottom: 22rpx;
				display: flex;
				border-radius: 10rpx 10rpx 10rpx 10rpx;
				background: #fff;
				overflow: hidden;

				.select {
					flex: 1;
					display: flex;
					justify-content: center;
					align-items: center;
					background: #fff;
					transition: all 0.3s;
				}

				.active {
					background: linear-gradient(to right, #3050f2, #893afb);
					color: #fff;
					border-radius: 10rpx;
				}
			}

			.content_part {
				.cardArea {
					width: 100%;
					height: 154rpx;
					border-radius: 10rpx;
					padding-left: 20rpx;
					display: flex;
					flex-direction: column;
					gap: 8rpx;
					padding-top: 20rpx;
					margin-bottom: 16rpx;
					position: relative;

					.business_status {
						top: 0;
						right: 0;
						position: absolute;
						width: 110rpx;
						height: 44rpx;

						background-size: cover;
						color: #fff;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 24rpx;

					}


					.business_name {

						font-weight: bold;
						font-size: 28rpx;
						color: #000000;
						text-align: left;
						font-style: normal;
						text-transform: none;
					}

					.business_target {
						font-weight: 400;
						font-size: 22rpx;
						color: #454545;
						text-align: left;
						font-style: normal;
						text-transform: none;
					}

					.business_date_id {
						display: flex;
						font-weight: 400;
						font-size: 22rpx;
						color: #454545;
						text-align: left;
						font-style: normal;
						text-transform: none;

						.business_date {
							margin-right: 32rpx;
						}
					}
				}
			}
		}
	}
</style>