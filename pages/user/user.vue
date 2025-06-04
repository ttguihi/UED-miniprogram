<template>
	<view class="background">
	</view>
	<view class="page_top_background">
	</view>
	<view class="fill_box" style="line-height: 200rpx;color: #fff; margin: 0 auto; ">
		个人中心
	</view>
	<view class="user_page">

		<view class="user_info_card">
			<view class="user_avatar">

			</view>
			<view class="user_details">
				<view class="user_name_settings">
					<view class="user_name">
						UED.001
					</view>
					<view class="user_settings">
						<uni-icons type="gear" size="24" color="#fff"></uni-icons>
						<view class="settings">
							设置
						</view>
					</view>
				</view>
				<view class="user_other_info">
					<view class="user_phone">
						<view class="user_small_card">
							<view class="card_icon bg1">
							</view>
						</view>
						<view class="">
							177-5608-0942
						</view>
					</view>
					<view class="user_address">
						<view class="user_small_card">
							<view class="card_icon bg2">
							</view>
						</view>
						<view class="">
							广东省佛山市南海区
						</view>
					</view>
					<view class="user_industry">
						<view class="user_small_card">
							<view class="card_icon bg3">
							</view>
						</view>
						<view class="">
							计算机
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="enterprise_card">
			<view class="enterprise_card_title">
				<view class="recognise">
					企业认证
				</view>
				<view class="enterprise_name">
					广东友益典文化科技有限公司
				</view>
			</view>

			<view class="enterprise_info">
				<view class="info_details">
					<view class="range" style="margin-right: 52rpx;">
						<view class="range_title">
							业务范围
						</view>
						<view class="range_content">
							市场营销策划
						</view>
					</view>
					<view class="range">
						<view class="range_title">
							对公账户
						</view>
						<view class="range_content">
							1654987613214651
						</view>
					</view>
					<view class="range">
						<view class="range_title">
							对公账户地址
						</view>
						<view class="range_content">
							广东省佛山市南海区XXXXXXX
						</view>
					</view>
				</view>
				<view class="license">
					<image src="" mode=""></image>
				</view>
			</view>

		</view>

		<view class="section">
			<view class="list">
				<navigator url="">
					<view class="row">
						<view class="row_icon ">
							<image src="/common/images/user/frame.jpg" mode=""></image>
						</view>
						<view class="row_text">
							关于我们
						</view>
					</view>
				</navigator>

				<navigator url="">
					<view class="row">
						<view class="row_icon ">
							<image src="/common/images/user/changeTheme.jpg" mode=""></image>
						</view>
						<view class="row_text">
							更换主题
						</view>
					</view>
				</navigator>
				<navigator url="">
					<view class="row">
						<view class="row_icon ">
							<image src="/common/images/user/contactService.jpg" mode=""></image>
						</view>
						<view class="row_text">
							联系客服
						</view>
					</view>
				</navigator>

				<navigator url="">
					<view class="row">
						<view class="row_icon ">
							<image src="/common/images/user/exit.jpg" mode=""></image>
						</view>
						<view class="row_text">
							退出登陆
						</view>
					</view>
				</navigator>


			</view>
		</view>
	</view>
</template>

<script setup>
	import CustomTabBar from "../../components/CustomTabBar.vue"
</script>

<style lang="scss" scoped>
	//给不同小卡片设置不同的背景

	.bg1 {
		background: url('/common/images/user/phone.jpg') no-repeat center center !important;
	}

	.bg2 {
		background: url('/common/images/user/area.jpg') no-repeat center center !important;
	}

	.bg3 {
		background: url('/common/images/user/industry.jpg') no-repeat center center !important;
	}

	//小卡片公共样式抽离出来
	.user_small_card {
		width: 48rpx;
		height: 30rpx;
		background-color: #fff;
		border-radius: 6rpx;
		opacity: 0.7;
		margin-right: 16rpx;
		display: flex;
		align-items: center;
		justify-content: center;

		.card_icon {
			margin-left: 8rpx;
			width: 30rpx;
			height: 30rpx;

		}
	}


	.fill_box {
		height: 200rpx;
		width: 100%;
		background-color: transparent;
	}

	.user_page {
		padding: 0 30rpx;


		.user_info_card {
			display: flex;
			margin-bottom: 48rpx;

			.user_avatar {
				width: 150rpx;
				height: 150rpx;
				background-color: skyblue;
				border-radius: 10rpx;
				margin-right: 32rpx;
			}

			.user_details {
				color: #fff;
				height: 150rpx;
				flex: 1;
				background-color: transparent;


				.user_name_settings {
					display: flex;
					justify-content: space-between;
					margin-bottom: 20rpx;

					.user_name {
						font-size: 36rpx;
						font-weight: 600;
					}

					.user_settings {
						display: flex;

						.settings {
							margin-left: 4rpx;
						}
					}
				}

				.user_other_info {
					display: flex;
					flex-wrap: wrap;
					font-family: "SongTi";
					width: 508rpx;
					margin-bottom: 0;

					.user_phone {
						display: flex;
						align-items: center;
						font-size: 22rpx;
						margin-right: 46rpx;
						margin-bottom: 16rpx;
					}

					.user_address {
						display: flex;
						align-items: center;
						font-size: 22rpx;
						margin-right: 46rpx;
					}

					.user_industry {
						display: flex;
						align-items: center;
						font-size: 22rpx;
					}
				}
			}
		}

		.enterprise_card {
			width: 100%;
			height: 392rpx;
			background: #fefeff;
			backdrop-filter: blur(80rpx);
			border-radius: 20rpx;

			position: relative;
			overflow: hidden;



			.enterprise_card_title {
				width: 100%;
				height: 132rpx;
				background: linear-gradient(to right, #ecf4fa, #f7f6f2);

				.recognise {
					position: absolute;
					left: 0;
					top: 0;
					border-bottom-right-radius: 20rpx;
					width: 192rpx;
					height: 56rpx;
					background: linear-gradient(to right, #FFCF4A, #FFEBB5);
					color: #654f14;
					text-align: center;
					line-height: 56rpx;
					font-size: 26rpx;
					font-weight: 700;
				}

				.enterprise_name {
					position: absolute;
					left: 32rpx;
					top: 72rpx;
					background: linear-gradient(to right, #2d5bf4, #a55cfc);
					font-size: 30rpx;
					font-weight: bold;
					color: transparent;
					-webkit-background-clip: text;
				}
			}

			.enterprise_info {
				margin-top: 32rpx;
				padding: 0 22rpx 0 30rpx;
				width: 100%;
				display: flex;
				align-items: center;


				.info_details {

					display: flex;
					flex-wrap: wrap;
					width: 420rpx;

					.range {
						display: flex;
						flex-direction: column;
						margin-bottom: 32rpx;


						.range_title {
							font-size: 22rpx;
							font-weight: bold;
							margin-bottom: 10rpx;
						}

						.range_content {
							font-size: 24rpx;
						}
					}
				}

				.license {
					width: 206rpx;
					height: 152rpx;
					background-color: pink;
					margin-bottom: 46rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}

			// -webkit-backdrop-filter: blur(80rpx);


		}

		.section {
			width: 100%;
			margin: 50rpx auto;
			border-radius: 20rpx;
			background-color: #fff;
			padding: 0 32rpx;

			.list {
				.row {
					width: 100%;
					height: 104rpx;
					border-bottom: 2rpx solid #e7ecf4;
					display: flex;
					align-items: center;

					.row_icon {
						width: 40rpx;
						height: 40rpx;
						margin-right: 16rpx;

						image {
							width: 100%;
							height: 100%;
						}
					}

					&:last-child {
						border-bottom: none;
					}
				}
			}
		}
	}
</style>