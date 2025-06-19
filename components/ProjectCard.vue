<template>
	<view class="project_item" @click="gotoProjectDetail">
		<view class="avatar">
			<view class="linear_letter">
				苏
			</view>
		</view>
		<view class="info">
			<view class="info_name">
				比过苏轼
			</view>
			<view class="info_line">
				业务线:&nbsp;&nbsp;佛山中秋月饼
			</view>
			<view class="info_date">
				2024-12-12
			</view>
		</view>
		<view class="query">
			<view class="" style="display: flex;align-items: center;justify-content: center;">
				查询
			</view>
			<uni-icons type="right" color=""></uni-icons>
		</view>
		<view class="status status_yishengxiao">
			已生效
		</view>
	</view>
</template>

<script setup>
	const gotoProjectDetail = () => {
		uni.navigateTo({
			url: '/pages/projects_management/project_info/project_info'
		})
	}
</script>

<style lang="scss" scoped>
	.project_item {
		display: flex;
		width: 100%;
		height: 150rpx;
		padding: 16rpx;
		margin-bottom: 16rpx;
		background-color: #f4f7ff;
		border-radius: 10rpx;
		position: relative;

		.avatar {
			height: 100%;
			aspect-ratio: 1;
			background: linear-gradient(180deg, #D9E3FF 0%, #F1ECFF 100%);
			border-radius: 10rpx 10rpx 10rpx 10rpx;
			margin-right: 22rpx;
			display: flex;
			justify-content: center;
			align-items: center;

			.linear_letter {

				width: fit-content;
				background: linear-gradient(to right, $theme-blue, $theme-purple);
				color: transparent;
				-webkit-background-clip: text;
				font-size: 56rpx;
				font-weight: 700;
			}
		}

		.info {
			display: flex;
			flex-direction: column;
			justify-content: space-around;

			.info_name {
				font-weight: bold;
				font-size: 28rpx;
				color: #000000;
			}

			.info_line {
				font-weight: 400;
				font-size: 22rpx;
				color: #9438FC;
			}

			.info_date {
				font-size: 20rpx;
				color: #888888;
			}
		}

		.query {
			display: flex;
			align-items: center;
			align-self: flex-end;
			margin-left: auto;
			font-size: 24rpx;
			gap: 10rpx;
			color: #2254F4;
		}

		.status {
			position: absolute;
			right: 0;
			top: 0;
			width: 110rpx;
			height: 44rpx;
			font-size: 24rpx;
			// color: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 0rpx 10rpx 0rpx 10rpx;
		}
	}
</style>