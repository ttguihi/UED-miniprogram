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
				<view class="select" :class="{ active: current === 0 }" @click="current = 0">
					全部
				</view>
				<view class="select" :class="{ active: current === 1 }" @click="current = 1">
					进行中
				</view>
				<view class="select" :class="{ active: current === 2 }" @click="current = 2">
					已生效
				</view>
				<view class="select" :class="{ active: current === 3 }" @click="current = 3">
					已失效
				</view>
			</view>

			<view class="content_part">
				<view class="" v-show="current==0">
					<view class="cardArea bg-green" v-for="item in 5">
						<view class="business_name">
							佛山中秋月饼
						</view>
						<view class="business_target">
							优化目标:&nbsp;苏式饼家
						</view>
						<view class="business_date_id">
							<view class="business_date">
								创建日期:&nbsp;&nbsp;2024-12-12
							</view>
							<view class="business_id">
								项目ID:&nbsp;&nbsp;UED00000111
							</view>
						</view>

						<view class="business_status">
							已生效
						</view>
					</view>
				</view>
				<view class="" v-show="current==1">
					<view class="cardArea bg-orange">

					</view>
				</view>
				<view class="" v-show="current==2">
					<view class="cardArea bg-green">

					</view>
				</view>
				<view class="" v-show="current==3">
					<BusinessCard status="white"></BusinessCard>
				</view>
			</view>
		</view>
	</view>

</template>

<script setup>
	import {
		ref
	} from 'vue'
	import BusinessCard from '../../components/BusinessCard.vue';
	const current = ref(0)
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
						background: url('/common/images/business/business_ green.svg') no-repeat center center;
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