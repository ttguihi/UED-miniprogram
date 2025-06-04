<template>
	<view class="">
		<view class="headerBackground">


		</view>
		<view class="search">
			<uni-search-bar focus placeholder="搜索">
			</uni-search-bar>
		</view>
		<ExampleCard></ExampleCard>
		<ExampleCard></ExampleCard>
		<ExampleCard></ExampleCard>
		<ExampleCard></ExampleCard>
	</view>
</template>

<script setup>
	import ExampleCard from '../../components/ExampleCard.vue';
</script>

<style lang="scss" scoped>
	.search {
		padding: 0 10rpx;
	}

	.headerBackground {
		position: absolute;
		z-index: -1;
		width: 100%;
		box-sizing: border-box;
		height: 494rpx;
		background: url("/common/images/index/header_background.jpg");
		background-size: 100% 100%;
	}
</style>