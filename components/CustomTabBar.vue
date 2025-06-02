<template>
	<view class="tabbar">
		<view v-for="(item, index) in tabItems" :key="index" class="tab-item"
			:class="{ active: currentIndex === index }" @click="navigateTo(item)">
			<text>{{ item.title }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 0,
				tabItems: [{
						title: '',
						pagePath: '/pages/index/index'
					},
					{
						title: '',
						pagePath: '/pages/contact/contact'
					},
					{
						title: '',
						pagePath: '/pages/user/user'
					}
				]
			};
		},
		methods: {
			navigateTo(item) {
				// 只切换页面，不直接设置currentIndex
				uni.switchTab({
					url: item.pagePath
				});
			},
			updateActiveTab() {
				// 获取当前页面路径
				const pages = getCurrentPages();
				const currentPage = pages[pages.length - 1];
				let path = currentPage.route || currentPage.__route__;
				if (!path.startsWith('/')) path = '/' + path;
				const idx = this.tabItems.findIndex(item => item.pagePath === path);
				this.currentIndex = idx === -1 ? 0 : idx;
			}
		},
		// 页面每次显示时都更新active
		onShow() {
			this.updateActiveTab();
		},
		mounted() {
			this.updateActiveTab();
		}
	};
</script>

<style>
	.tabbar {
		position: fixed;
		/* 固定在底部 */
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-around;
		background: radial-gradient(circle, #fff5e9 10%, #ffffff 30%);
		height: 124rpx;
		border-top: 4rpx solid #e4d3f7;
		border-radius: 10rpx 10rpx 0 0;
		z-index: 1000;
		/* 添加阴影效果 */
	}

	.tab-item {
		flex: 1;
		text-align: center;
		line-height: 124rpx;
	}

	.tab-item.active {
		color: #e4d3f7;
		/* 选中状态的颜色 */
	}

	.tab-item:nth-child(2) {
		background: url('../../static/Group_1235.png') no-repeat center center;
	}

	.tab-item:nth-child(1) {
		background: url('../../static/Group_1294.png') no-repeat center center;
	}

	.tab-item:nth-child(3) {
		background: url('../../static/我的.png') no-repeat center center;
	}
</style>