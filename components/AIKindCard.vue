<template>
	<view class="AI_category">
		<view class="category_name">
			KIMI
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.AI_category {
		width: 126rpx;
		height: 40rpx;
		font-size: 20rpx;
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
			font-size: 20rpx;
			font-weight: 600;

			background: linear-gradient(to right, #bc85fd, #95a7fb);
			color: transparent;
			-webkit-background-clip: text;
		}

	}
</style>