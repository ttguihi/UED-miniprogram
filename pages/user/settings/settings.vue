<template>
	<view class="page">
		<view class="page_top_background">
		</view>
		<CustomNavBar title="设置"></CustomNavBar>
		<view class="settings">
			<navigator url="/pages/user/recognise/recognise">
				<view class="enterprise_recognise">
					<view class="">
					</view>
					<view class="settings_content">
						<text>企业认证</text>
						<view class="right">
						</view>
					</view>
					<view class="">
					</view>
				</view>
			</navigator>
			<view class="enterprise_recognise">
				<view class="">
				</view>
				<view class="settings_content">
					<text>个人资料</text>
					<view class="right">
					</view>
				</view>
				<view class="">
				</view>
			</view>
			<view class="enterprise_recognise last">
				<view class="">
				</view>
				<view class="settings_content">
					<text>更换手机号码</text>
					<view class="right">
					</view>
				</view>
				<view class="">
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import CustomNavBar from '../../../components/CustomNavBar/CustomNavBar.vue';
</script>

<style lang="scss" scoped>
	.page {
		.settings {
			margin: 0 auto;
			margin-top: 32rpx;
			width: 688rpx;
			padding: 0 32rpx;

			height: 1160rpx;
			border-radius: 20rpx;
			background: rgba(255, 255, 255, 0.7);

			.enterprise_recognise {
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				width: 100%;
				height: 120rpx;
				border-bottom: 2rpx solid #818183;

				.settings_content {
					font-size: 28rpx;
					position: relative;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.right {
						width: 16rpx;
						height: 16rpx;
						border-bottom: solid 4rpx #000;
						border-right: solid 4rpx #000;
						transform: rotate(-45deg);
					}

				}
			}

			.last {
				border-bottom: none;
			}
		}
	}
</style>