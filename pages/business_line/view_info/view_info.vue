<template>
	<view class="page_top_background"></view>
	<CustomNavBar title=""></CustomNavBar>
	<view class="page">
		<view class="business_card">
			<view class="title" style="font-size: 32rpx;margin-bottom: 16rpx;">
				已覆盖的AI
			</view>
			<view class="AI_select">
				<uni-data-select v-model="value" :localdata="range" @change="change" :clear="false"></uni-data-select>
				<MySelect></MySelect>
			</view>
			<view class="Date_select">

			</view>
		</view>
	</view>

</template>


<script setup>
	import {
		ref
	} from 'vue'
	import MySelect from '/components/MySelect/components/uni-data-select/uni-data-select.vue'
	const value = ref(0)
	const range = ref([{
			value: 0,
			text: "KII.AI"
		},
		{
			value: 1,
			text: "足球"
		},
		{
			value: 2,
			text: "游泳"
		},
	])
</script>

<style lang="scss" scoped>
	:deep() .uni-select {
		height: 80rpx;
	}

	:deep() .uni-select__input-text {
		font-size: 32rpx;
		font-weight: 700;
		position: relative;
	}

	:deep() .uni-select__input-text::after {
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		background: linear-gradient(90deg, #FF5F6D, #FFC371);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
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


		}
	}
</style>