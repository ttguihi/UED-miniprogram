<template>
	<view class="AI_category">
		<view class="category_name" :class="[sizeStyle]">
			<slot></slot>
		</view>
	</view>
</template>

<script setup>
	import {
		computed
	} from 'vue';

	const props = defineProps({
		size: {
			type: String,
			default: "large"
		}
	})
	const sizeStyle = computed(() => `font-${props.size}`)
</script>

<style lang="scss" scoped>
	.font-small {
		font-size: 20rpx !important;
	}

	.font-large {
		font-size: 26rpx !important;
	}

	.AI_category {

		box-sizing: border-box;
		border: 1px solid transparent;
		background-image: linear-gradient(#fff, #fff),
			linear-gradient(to bottom left,
				#5587fb,
				#a456fc,
				#a456fc);
		-webkit-background-origin: border-box;
		-webkit-background-clip: content-box, border-box;
		border-radius: 8rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 8rpx;
		margin-bottom: 6rpx;

		.category_name {
			font-size: 26rpx;
			font-weight: 600;
			margin: 5rpx 16rpx;
			background: linear-gradient(to right, #bc85fd, #95a7fb);
			color: transparent;
			-webkit-background-clip: text;
		}

	}
</style>