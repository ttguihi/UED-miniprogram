<template>
	<view class="date-picker-container">
		<!-- 左箭头按钮（前一天/上一月） -->
		<view class="arrow-btn">
			<uni-icons type="left" size="20" style="font-weight: 700;" color="#333" />
		</view>

		<!-- 日期选择器 -->
		<view class="date-picker">
			<MyDatePicker type="date" :clear-icon="false"></MyDatePicker>
		</view>

		<!-- 右箭头按钮（后一天/下一月） -->
		<view class="arrow-btn">
			<uni-icons type="right" size="20" style="font-weight: 700;" color="#333" />
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		computed
	} from 'vue'
	import dayjs from 'dayjs' // 推荐使用 dayjs 格式化日期
	import MyDatePicker from "/components/MyDatePicker/components/uni-datetime-picker/uni-datetime-picker.vue"
	// 当前日期（默认今天）
	const currentDate = ref(dayjs().format('YYYY-MM-DD'))
	// 控制日期选择器显示
	const showPicker = ref(false)

	// 格式化日期显示（示例：2023年10月20日）
	const formattedDate = computed(() => {
		return dayjs(currentDate.value).format('YYYY-MM-DD')
	})

	// 切换日期（offset: -1 表示前一天，1 表示后一天）
	const changeDate = (offset) => {
		const newDate = dayjs(currentDate.value).add(offset, 'day')
		currentDate.value = newDate.format('YYYY-MM-DD')
	}

	// 日期选择器确认事件
	const handleDateChange = (val) => {
		currentDate.value = val
		showPicker.value = false
	}

	// 暴露方法（如果需要父组件调用）
	defineExpose({
		currentDate
	})
</script>

<style scoped lang="scss">
	.date-picker-container {
		display: flex;
		height: 60rpx;
		justify-content: space-between;
		gap: 10rpx;
		align-items: center;

		.arrow-btn {
			width: 102rpx;
			height: 100%;
			display: flex;
			background: #FFFFFF;
			align-items: center;
			justify-content: center;
			border-radius: 10rpx 10rpx 10rpx 10rpx;
		}

		.date-picker {

			flex: auto;
		}
	}
</style>