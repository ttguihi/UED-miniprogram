<template>
	<view class="AICard" :class="[type]">

	</view>
</template>

<script setup>
	import {
		computed,
		ref
	} from "vue";
	const props = defineProps({
		theme: String
	})
	console.log(props.theme);
	const type = computed(() => {
		return `AICard-${props.theme}`
	})
	console.log(type.value);

	// const type = computed(() =>
	// 	return `AIcard-${props.theme}`)
</script>

<style lang="scss" scoped>
	.AICard {
		width: 166rpx;
		height: 166rpx;
		// background: linear-gradient(to bottom, #b7e9e7, #f7fdfc);
		border-radius: 24rpx;
		position: relative;

		.image {
			width: 108rpx;
			height: 80rpx;
			position: absolute;
			left: 0;
			right: 0;
			margin: auto;
			top: -20rpx;

			image {
				width: 100%;
				height: 100%;

			}
		}

		.AItext {
			font-weight: 600;
			text-align: center;
			margin-top: 90rpx;
		}
	}

	.AICard-myGreen {
		background: linear-gradient(to bottom, #baeae8, #f7fdfc) !important;
	}

	.AICard-myBlue {
		background: linear-gradient(to bottom, #b0e7fe, #f7fdfc) !important;
	}
</style>