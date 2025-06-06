<template>
	<view class="page">
		<CustomNavBar></CustomNavBar>
		<view class="true_background">
			<view class="page_top_background">

			</view>
		</view>


	</view>


</template>

<script setup>
	import CustomNavBar from '/components/CustomNavBar/CustomNavBar.vue'
</script>

<style lang="scss" scoped>
	.page {
		height: 750rpx;

		// background: linear-gradient(to bottom, #fff 454rpx, #ececf8);

		.true_background {
			height: 100vh;
			z-index: -1000;
			background: linear-gradient(to bottom, #fff 454rpx, #ececf8);

			.page_top_background {
				z-index: 0;
			}
		}
	}
</style>