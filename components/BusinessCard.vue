<template>
	<view class="cardArea" :class="[card_status]" @click="gotoDetail">
		<view class="business_name">
			{{data.name}}
		</view>
		<view class="business_target">
			优化目标:&nbsp;{{data.projectName}}
		</view>
		<view class="business_date_id">
			<view class="business_date">
				创建日期:&nbsp;&nbsp;{{data.createTime.slice(0,10)}}
			</view>
			<view class="business_id">
				项目ID:&nbsp;&nbsp;{{data.projectID}}
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
		status: String,
		data: {
			type: Object,
			default: () => ({})
		}
	})

	// console.log(props.data);
	const card_status = computed(() => `bg-${props.status}`)
	// const card_status_corner = computed(() => `status_${props.status}`)
	// const status_text = ref('')
	const obj = reactive({
		'white': "已失效",
		'green': '已生效',
		'orange': '进行中'
	})
	const gotoDetail = () => {
		uni.navigateTo({
			url: '/pages/business_line/business_info/business_info'
		})
	}
</script>
<style lang="scss" scoped>
	/*动态类*/
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
		background: linear-gradient(to right, #90e8c3, #26b987);
		background-size: cover;
		border-bottom-left-radius: 10rpx;
	}

	.status_orange {
		background: linear-gradient(to right, #ffb070, #ff7d13);
		background-size: cover;
		border-bottom-left-radius: 10rpx;
	}

	.status_white {
		background: linear-gradient(to right, #c1c1c1, #e4e4e4);
		background-size: cover;
		border-bottom-left-radius: 10rpx;
	}

	/*动态类*/

	/*基本样式*/
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
		overflow: hidden;

		.business_status {
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

	/*基本样式*/
</style>