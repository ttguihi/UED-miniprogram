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
	/*每个页面公共css */
	@import "/common/styles/common-style.scss";
	@import "/common/font/font.scss";
</style>