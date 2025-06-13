<template>
	<view class="cardArea" :class="[card_status]">
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
		<view class="business_status" :class="`status_${props.status}`">
			{{ obj[props.status] }}
		</view>
	</view>
</template>

<script setup>
	import {
		computed,
		reactive,
		ref
	} from 'vue';

	const props = defineProps({
		status: String
	})
	const card_status = computed(() => `bg-${props.status}`)

	// const card_status_corner = computed(() => `status_${props.status}`)
	// const status_text = ref('')
	const obj = reactive({
		'white': "已失效",
		'green': '已生效',
		'orange': '进行中'
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

	.status_green {
		background: url('/common/images/business/business_green.svg') no-repeat center center;
		background-size: cover;
	}

	.status_orange {
		background: url('/common/images/business/business_orange.svg') no-repeat center center;
		background-size: cover;
	}

	.status_white {
		background: url('/common/images/business/business_white.svg') no-repeat center center;
		background-size: cover;
	}

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
			/* 只保留基本样式，移除默认背景 */
			top: 0;
			right: 0;
			position: absolute;
			width: 110rpx;
			height: 44rpx;
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
</style>