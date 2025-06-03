<template>
	<view class="">
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
</style>