<template>
	<view class="page_top_background">

	</view>
	<CustomNavBar></CustomNavBar>
	<view class="page">
		<view class="decoration_part">
			<view class="decoration">

			</view>
			<view class="font1">
				WELCOME
			</view>
			<view class="font2">
				欢迎登录
			</view>
			<view class="font3">
				友益典·AI营销管理系统
			</view>
		</view>

		<view class="login_part">
			<view class="register">
				立即注册
			</view>

			<view class="" v-if="flag">
				<view class="login_logo">

				</view>
			</view>
			<view class="phone_login_area" v-else>
				<uni-forms>
					<uni-forms-item label="手机号码">
						<uni-easyinput placeholder="" />
					</uni-forms-item>
					<uni-forms-item label="验证码" class="verify">
						<view class="form-item">
							<uni-easyinput placeholder="" />
							<button>发送验证码</button>
						</view>
					</uni-forms-item>
				</uni-forms>
			</view>

			<button class="login_wx" v-if="flag">
				<view class="wx_icon">

				</view>
				微信登录
			</button>
			<button class="login_wx" v-else>
				<view class="wx_icon">

				</view>
				登录
			</button>
			<view class="confirm">
				<label>
					<checkbox value="cb" color="skyblue" style="transform:scale(0.7)" />
				</label>
				<text class="">
					登录/注册即为同意
				</text>
				<navigator url="" style="color: #587bfd;">《用户服务协议》</navigator>
				<navigator url="" style="color: #587bfd;">《隐私政策》</navigator>


			</view>
			<view class="haveAccount">
				已有账号登录
			</view>
			<view class="login_phone" @click="handleClick">
				<view class="phone_login" v-if="flag">
					<view class="phone">

					</view>
					<view class="text">
						手机号
					</view>
				</view>
				<view class="wx_login" v-else>
					<view class="wx">

					</view>
					<view class="text">
						微信
					</view>
				</view>

			</view>
		</view>
	</view>


</template>

<script setup>
	import CustomNavBar from '/components/CustomNavBar/CustomNavBar.vue'
	import {
		getNavBarHeight
	} from "/utils/system.js"
	import '/common/font/font.scss'
	import {
		ref
	} from 'vue';

	const flag = ref(true)
	const handleClick = () => {
		console.log(flag.value)
		flag.value = !flag.value

	}
</script>

<style lang="scss" scoped>
	.uni-forms-item__label {
		margin-bottom: 12rpx !important;
	}

	.uni-forms-item__content {
		display: flex !important;
	}

	.uni-forms-item {
		display: flex;
		flex-direction: column !important;
	}

	.page {
		padding: 0 32rpx;

		.decoration_part {
			/*得同时给不同盒子设置z-index才行*/
			z-index: -1;
			height: 358rpx;
			width: 100%;
			background-color: transparent;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			position: relative;

			.decoration {
				position: absolute;
				height: 424rpx;
				width: 402rpx;
				align-self: flex-end;
				background: url('/common/images/login/decoration.webp') no-repeat center center;
				background-size: 100% 100%;

			}

			.font1 {
				font-size: 56rpx;
				color: #b0cffd;
				font-weight: bold;
				transform: translateY(30rpx);
			}

			.font2 {
				font-size: 36rpx;
			}

			.font3 {
				font-family: "niceTitle";
				background: linear-gradient(0deg, #2254F4 0%, #9438FC 100%);
				color: transparent;
				-webkit-background-clip: text;
				font-size: 52rpx;
				transform: translateY(-30rpx);
				font-weight: 700;
			}
		}

		.login_part {
			z-index: 0;
			margin-top: -40rpx;
			width: 100%;
			height: 1100rpx;

			border-radius: 20rpx;
			background: linear-gradient(to bottom, transparent, #fefefe 400rpx),
				linear-gradient(to right, #e9f9fc 20%, #f4effd);
			overflow: hidden;
			box-shadow: 2rpx 4rpx 4rpx #ececf8;

			.phone_login_area {
				width: 600rpx;
				margin: 0 auto;

				.verify {
					.form-item {
						display: flex;
						align-items: center;

						&>button {
							color: #fff;
							margin-left: 12rpx;
							background: linear-gradient(to right, #394ff6, #833cfb);
						}
					}

					.uni-forms-item__content {
						display: flex !important;
						flex-direction: row !important;
					}

				}
			}

			.register {
				height: 66rpx;
				width: 172rpx;
				border-radius: 0 20rpx 0 20rpx;
				margin-left: auto;
				color: #fff;
				text-align: center;
				line-height: 66rpx;
				background: linear-gradient(to right, #3051f5, #8c3afb);
			}

			.login_logo {
				width: 220rpx;
				height: 220rpx;
				margin: 0 auto;
				margin-top: 100rpx;
				background-color: skyblue;
				background: url('/common/images/login/frame_text.webp') no-repeat center center;
				background-size: 100% 100%;
			}

			.login_wx {
				background: linear-gradient(to right, #3051f5, #8c3afb);
				width: 552rpx;
				height: 68rpx;
				margin: 0 auto;
				margin-top: 106rpx;
				border-radius: 60rpx;
				color: #fff;
				line-height: 68rpx;

				.wx_icon {}
			}

			.confirm {
				width: 100%;
				height: 34rpx;
				margin: 0 auto;
				margin-top: 42rpx;

				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 24rpx;
				color: #c8c8cb;


			}

			.haveAccount {
				width: 200rpx;
				margin: 0 auto;
				margin-top: 160rpx;
				text-align: center;
				color: #888888;
				font-size: 24rpx;
				position: relative;
				margin-bottom: 12rpx;

				&::after {
					position: absolute;
					content: '';
					width: 150rpx;
					height: 0;
					border: 1rpx solid #b8b8ba;
					transform: scaleY(0.3);
					top: 17rpx;
					left: 200rpx;

				}

				&::before {
					position: absolute;
					content: '';
					width: 150rpx;
					height: 0;
					border: 1rpx solid #b8b8ba;
					transform: scaleY(0.3);
					top: 17rpx;
					right: 200rpx;

				}
			}

			.login_phone {
				font-size: 24rpx;
				width: 80rpx;
				margin: 0 auto;
				margin-top: 35rpx;
				height: 100rpx;
				display: flex;
				flex-direction: column;
				width: 80rpx;
				text-align: center;

				.phone {
					height: 80rpx;
					width: 80rpx;
					background: url('/common/images/login/phone_number.svg') no-repeat center center;
					background-size: 100% 100%;

				}

				.wx {
					height: 80rpx;
					width: 80rpx;
					background: url('/common/images/login/wx_pic.svg') no-repeat center center;
					background-size: 100% 100%;
				}

				.text {
					margin-top: 4rpx;
				}



			}
		}

	}
</style>