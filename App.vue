<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.hideTabBar();
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	html,
	body {
		width: 100%;
		height: 100%;

	}

	/*每个页面公共css */
	@import "/common/styles/common-style.scss";
	@import "/common/font/font.scss";
	@import "/common/styles/svg.scss";
	@import '@/uni_modules/uni-scss/index.scss';
</style>