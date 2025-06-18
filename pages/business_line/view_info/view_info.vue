<template>
	<view class="page_top_background"></view>
	<CustomNavBar title=""></CustomNavBar>
	<view class="page">
		<view class="business_card">
			<view class="title" style="font-size: 32rpx;margin-bottom: 16rpx;">
				已覆盖的AI
			</view>
			<view class="AI_select">
				<!-- <uni-data-select v-model="value" :localdata="range" @change="change" :clear="false"></uni-data-select> -->
				<MySelect v-model="value" :localdata="range" :clear="false"></MySelect>
			</view>
			<view class="Date_select">
				<DatePicker></DatePicker>
			</view>
			<view class="display_area">
				<view class="arrow left" @click="goPre">

				</view>
				<swiper indicator-color="#f2e9ff" indicator-active-color="#9438fc" circular :indicator-dots="true"
					:interval="3000" :duration="1000" :current="currentIndex" @change="onSwiperChange">

					<swiper-item v-for="item in 4">
						<view class="link" style="border-radius: 10rpx;">
							<image src='https://s3.bmp.ovh/imgs/2025/05/30/a20009a7cd7be4f5.jpg'>
							</image>
						</view>
					</swiper-item>

				</swiper>
				<view class="arrow right" @click="goNext">

				</view>
			</view>
		</view>
	</view>

</template>


<script setup>
	import {
		ref
	} from 'vue'
	import MySelect from '/components/MySelect/components/uni-data-select/uni-data-select.vue'
	import DatePicker from '../../../components/DatePicker/DatePicker.vue'
	const value = ref(0)
	const currentIndex = ref(0)
	const goPre = () => {
		currentIndex.value = (currentIndex.value - 1 + 4) % 4
	}
	const goNext = () => {
		currentIndex.value = (currentIndex.value + 1) % 4
	}

	const onSwiperChange = (e) => {
		currentIndex.value = e.detail.current
	}
	const range = ref([{
			value: 0,
			text: "KIMI"
		},
		{
			value: 1,
			text: "DeepSeek"
		},
		{
			value: 2,
			text: "Chatgpt"
		},
	])
</script>

<style lang="scss" scoped>
	:deep() .date-picker {
		height: 100% !important;
	}

	:deep() .uni-swiper-dots {
		display: flex;
		gap: 12rpx;
	}

	:deep() .uni-swiper-dot {
		width: 20rpx;
		height: 20rpx;
	}

	:deep() .uni-swiper-dots-horizontal {
		bottom: 2rpx !important;
	}

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

			.AI_select {
				margin-bottom: 18rpx;

			}

			.Date_select {
				margin-bottom: 16rpx;
			}

			.display_area {
				width: 100%;
				height: 780rpx;
				// box-shadow: 0rpx 4rpx 10rpx 0rpx rgba(0, 0, 0, 0.05);
				border-radius: 20rpx 20rpx 20rpx 20rpx;
				background-color: transparent;
				position: relative;

				.left {
					left: -35rpx;
					transform: rotate(135deg);
				}

				.right {
					right: -35rpx;
					transform: rotate(-45deg);
				}

				.arrow {
					position: absolute;
					top: 323rpx;
					z-index: 1;
					width: 70rpx;
					height: 70rpx;
					border-radius: 35rpx;
					// background-color: pink;
					background-color: rgba(255, 255, 255, 0.6);

					&::after {
						content: '';
						position: absolute;
						width: 15rpx;
						height: 15rpx;
						border-radius: 0rpx 0rpx 0rpx 0rpx;
						left: 0;
						right: 0;
						top: 0;
						bottom: 0;
						margin: auto auto;
						border-bottom: 4rpx solid #000000;
						border-right: 4rpx solid #000000;

					}

					&::before {
						content: '';
						position: absolute;
						top: -2rpx;
						left: -2rpx;
						right: -2rpx;
						bottom: -2rpx;
						border: 2rpx solid transparent;
						border-radius: inherit;
						background: linear-gradient(90deg, rgba(148, 56, 252, 1), rgba(105, 136, 250, 1)) border-box;
						-webkit-mask: linear-gradient(#fff, #fff) padding-box, linear-gradient(#fff, #fff);
						-webkit-mask-composite: xor;
					}
				}

				swiper {
					width: 100%;
					height: 100%;
					// border-radius: 10rpx 10rpx 0 0;
					border-radius: 20rpx 20rpx 20rpx 20rpx;
					overflow: hidden;




					&-item {
						width: 100%;
						height: 716rpx;
						border-radius: 20rpx 20rpx 20rpx 20rpx;
						overflow: hidden;


						.link {
							width: 100%;
							height: 716rpx;
							border-radius: 20rpx 20rpx 20rpx 20rpx;
							overflow: hidden;
							box-shadow: 0rpx 10rpx 15rpx 0rpx rgba(0, 0, 0, 0.05);

							image {
								box-shadow: 0rpx 10rpx 15rpx 0rpx rgba(0, 0, 0, 0.05);
								width: 100%;
								height: 100%;
								border-radius: 20rpx 20rpx 20rpx 20rpx;
							}
						}
					}
				}
			}

		}
	}
</style>