<template>
	<view class="page_top_background">

	</view>

	<CustomNavBar title="" navigateType="switchTab"></CustomNavBar>
	<view class="page">
		<view class="contact_card">
			<view class="decoration_part">
				<image src="/common/images/login/decoration.svg" mode=""></image>
			</view>


			<view class="welcome_part">
				<view class="welcome">
					欢迎咨询
				</view>
				<view class="UED">
					<view class="line1">
						<view class="UED1">
							友益典
						</view>
						<view class="AIRO">
							AIRO
						</view>
					</view>

					<view class="result UED1">
						AI结果优化服务
					</view>
				</view>

			</view>

			<view class="form_part">
				<uni-forms :rules="rules" :model="formData" ref="form">
					<uni-forms-item label="姓名" name="name">
						<view class="input">
							<uni-easyinput type="text" v-model="formData.name" />
						</view>
					</uni-forms-item>
					<uni-forms-item label="电话" name="phone">
						<view class="input">
							<uni-easyinput type="text" v-model="formData.phone" />
						</view>
					</uni-forms-item>
					<uni-forms-item label="企业名称" name="companyName">
						<view class="input">
							<uni-easyinput type="text" v-model="formData.companyName" />
						</view>
					</uni-forms-item>
					<uni-forms-item label="备注" name="texts">
						<view class="input">
							<uni-easyinput type="textarea" v-model="formData.texts" />
						</view>
					</uni-forms-item>
				</uni-forms>
				<button class="submit" @click="open">提交</button>
			</view>
			<view class="last_part">
				<view class="bline">
				</view>
				<view class="time">
					有疑问?&nbsp;&nbsp;&nbsp;请联系我们
				</view>
				<view class="bline">
				</view>
			</view>
			<view class="pop_part">
				<view class="contact_service">
					<view class="contact_title">
						联系客服
					</view>
					<view class="erweima">
						<view class="weixin">
							<view class="weixin_pic">

							</view>
							<view class="weixin_text">

								微信号

							</view>
						</view>
						<view class="gongzhonghao">
							<view class="gongzhonghao_pic">

							</view>
							<view class="weixin_text">
								友益典公众号
							</view>
						</view>
					</view>
					<view class="service_number_area">
						<view class="area_title">
							客服热线
						</view>
						<view class="number_text">
							<view class="number">
								132-5038-8148
							</view>
							<view class="line">

							</view>
							<view class="dianji">
								<view class="icon">

								</view>
								点击拨打
							</view>
						</view>
						<view class="number_text">
							<view class="number">
								134-1101-0301
							</view>
							<view class="line">
							</view>
							<view class="dianji">
								<view class="icon">
								</view>
								点击拨打
							</view>
						</view>
					</view>

					<view class="last">
						<view class="bline">

						</view>
						<view class="time">
							客服时段：09:00-17：00
						</view>
						<view class="bline">

						</view>
					</view>
				</view>

			</view>
		</view>
		<uni-popup ref="popup" type="center" :is-mask-click="false">
			<view class="success">
				<view class="pic">

				</view>
				<view class="title">
					已成功提交
				</view>
				<view class="tip">
					相关负责人将在24小时之内与你联系
				</view>
				<button @click="close">确认</button>
			</view>
		</uni-popup>
	</view>

</template>

<script setup>
	import CustomTabBar from "../../components/CustomTabBar.vue"
	import ExampleCard from "../../components/ExampleCard.vue"
	import CustomNavBar from "../../components/CustomNavBar/CustomNavBar.vue";
	import {
		ref
	} from 'vue'
	import {
		apiSetConsult
	} from "../../api/api";

	// Form data model
	const formData = ref({
		name: '',
		phone: '',
		companyName: '',
		texts: ''
	})
	const setConsult = async (data) => {
		try {
			let res = await apiSetConsult(data); // 使用传入的data而不是formData.value
			console.log('提交成功', res);
			popup.value.open('center');
			// 提交成功后清空表单
			formData.value = {
				name: '',
				phone: '',
				companyName: '',
				texts: ''
			};
		} catch (error) {
			console.error('提交失败', error);
			uni.showToast({
				title: '提交失败，请重试',
				icon: 'none'
			});
		}
	}
	// Form validation rules
	const rules = {
		name: {
			rules: [{
					required: true,
					errorMessage: '请输入姓名'
				},
				{
					pattern: /^(?:[\u4e00-\u9fa5]{3,5}|[a-zA-Z\s]{1,10})$/,
					errorMessage: "姓名无效"
				}
			]
		},
		phone: {
			rules: [{
					required: true,
					errorMessage: '请输入手机号'
				},
				{
					pattern: /^1[3-9]\d{9}$/,
					errorMessage: '手机号格式不正确'
				}
			]
		},
		companyName: {
			rules: [{
					required: true,
					errorMessage: '   请输入企业名称'
				},
				{
					pattern: /^(?!(?:[a-zA-Z\s]+)$)[\u4e00-\u9fa5a-zA-Z0-9\s（）()]{1,20}$/,
					errorMessage: "企业名称无效"
				}
			]
		},
		texts: {
			rules: [{
				required: false
			}]
		}
	}

	// Get form reference
	const form = ref()

	// Get popup component
	const popup = ref()

	// Open and close popup
	const open = () => {
		form.value.validate().then(res => {
			setConsult(res); // 传递验证通过的数据
		}).catch(err => {
			// console.log('表单验证失败:', err);
			uni.showToast({
				title: '请检查表单',
				icon: 'none'
			});
		});
	}
	const close = () => {
		popup.value.close()
	}
</script>

<style lang="scss" scoped>
	//提交成功弹窗
	.success {
		width: 512rpx;
		height: 402rpx;
		background-color: #fff;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.pic {

			width: 160rpx;
			height: 160rpx;
			background: url('/common/images/index/chenggongtijiao.webp') no-repeat center center;
			background-size: cover;
			position: absolute;
			left: 50%;
			top: -56rpx;
			transform: translateX(-50%);

		}

		.title {
			margin-top: 110rpx;
			font-size: 30rpx;
			line-height: 48rpx;
			margin-bottom: 16rpx;
		}

		.tip {
			width: 302rpx;
			text-align: center;
			letter-spacing: 1rpx;
			font-size: 26rpx;
			color: #888888;
			margin-bottom: 32rpx;
		}

		button {
			width: 300rpx;
			height: 70rpx;
			line-height: 70rpx;
			border-radius: 60rpx;
			color: #fff;
			font-size: 24rpx;
			background: linear-gradient(to right, #2e51f5, #893afb);

		}
	}

	:deep() .uni-forms-item__content {
		display: flex;
		justify-content: flex-end !important;
	}

	.input {
		width: 450rpx;
		text-align: right;
	}

	:deep() .uni-easyinput__content-input {
		height: 68rpx !important;
		width: 450rpx !important;
	}

	.page_top_background {
		z-index: 0;
		mix-blend-mode: multiply;
	}

	.UED1 {
		background: linear-gradient(to right, #2553f4, #a464fc);
		color: transparent;
		-webkit-background-clip: text;
	}

	.page {
		width: 100%;
		padding: 0 30rpx;
		background-color: #f5f5ff;

		.contact_card {
			width: 100%;
			background: rgba(255, 255, 255, 0.7);
			margin-top: 30rpx;
			height: 1650rpx;
			padding: 0 30rpx;
			padding-top: 40rpx;
			border-radius: 20rpx 20rpx 20rpx 20rpx;
			position: relative;

			.decoration_part {

				right: 0;
				top: 20rpx;
				width: 275rpx;
				height: 290rpx;
				position: absolute;

				// background: url('/common/images/login/decoration.svg') no-repeat center center;
				// background-size: cover;
				image {
					margin-top: -20rpx;
					width: 275rpx;
					height: 290rpx;
				}
			}

			.welcome_part {
				display: flex;
				flex-direction: column;
				gap: 20rpx;

				.welcome {
					font-size: 36rpx;
				}

				.UED {
					font-size: 56rpx;
					font-family: "youshebiaoti";
					// font-family: 'niceTitle';

					.line1 {
						display: flex;
						gap: 70rpx;

						.AIRO {
							color: #FFFFFF;
							opacity: 0.7;
						}
					}
				}


			}





			.form_part {
				.submit {
					line-height: 72rpx;
					color: #fff;
					font-size: 28rpx;
					width: 400rpx;
					height: 72rpx;
					border-radius: 60rpx;
					background: linear-gradient(to right, #364ff5, #8b3afb);
				}
			}

			.last_part {
				margin-top: 50rpx;
				margin-bottom: 48rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 24rpx;

				.time {
					margin-left: 46rpx;
					margin-right: 46rpx;
					font-size: 30rpx;
				}

				.bline {
					width: 120rpx;
					height: 0;
					border-top: 2rpx solid #c8c5be;
				}
			}

			.pop_part {
				margin: 0 auto;

				.contact_service {

					height: 736rpx;
					background: linear-gradient(180deg, #FFFAED 0%, #FFFFFF 30%, #FFFFFF 64%, #FFFAED 100%);
					border-radius: 10rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					padding: 0 60rpx;

					.contact_title {
						color: #FF8418;
						font-size: 30rpx;
						margin-bottom: 32rpx;
						margin-top: 28rpx;
					}

					.erweima {
						width: 100%;

						display: flex;
						justify-content: space-between;

						.weixin {
							display: flex;
							flex-direction: column;
							align-items: center;

							.weixin_pic {
								width: 228rpx;
								height: 228rpx;
								background: url('/common/images/user/weixin.webp') no-repeat;
								background-size: cover;
								border: 2rpx solid #ffc18f;
								border-radius: 10rpx;
								margin-bottom: 20rpx;
							}

							.weixin_text {
								position: relative;

								&::after {
									content: '';
									width: 134rpx;
									height: 29rpx;
									left: 50%;
									transform: translateX(-50%);
									position: absolute;
									background: #FF8418;
									filter: blur(60rpx);
								}
							}
						}

						.gongzhonghao {
							display: flex;
							flex-direction: column;
							align-items: center;

							.gongzhonghao_pic {
								width: 228rpx;
								height: 228rpx;
								background: url('/common/images/user/gongzhonghao.webp') no-repeat;
								background-size: cover;
								border-radius: 10rpx;
								border: 2rpx solid #ffc18f;
								margin-bottom: 20rpx;
							}

							.weixin_text {
								position: relative;

								&::after {
									content: '';
									width: 134rpx;
									height: 29rpx;
									left: 50%;
									transform: translateX(-50%);
									position: absolute;
									background: #FF8418;
									filter: blur(60rpx);
								}
							}
						}
					}


					.service_number_area {
						width: 100%;

						.area_title {
							margin-top: 32rpx;
							margin-right: auto;
							margin-bottom: 22rpx;
						}

						.number_text {
							width: 100%;
							height: 60rpx;
							background-color: #FFF2DA;
							border-radius: 60rpx;
							display: flex;
							align-items: center;
							margin-bottom: 26rpx;

							.number {
								white-space: nowrap;
								margin-left: 62rpx;
								position: relative;
							}

							.line {
								width: 0;
								height: 24rpx;
								border-left: 2rpx solid #ccc4b7;
								margin-left: 44rpx;
								margin-right: 42rpx;

							}

							.dianji {
								display: flex;
								color: #5a5855;
								font-size: 24rpx;
								white-space: nowrap;

								.icon {
									width: 32rpx;
									height: 32rpx;
									margin-right: 10rpx;
									margin-top: 2rpx;
									background: url('/common/images/user/phone_orange.svg') center center;
								}

								margin-right: 34rpx;
							}
						}
					}

					.last {
						display: flex;
						align-items: center;
						justify-content: space-between;
						font-size: 24rpx;

						.time {
							margin-left: 52rpx;
							margin-right: 52rpx;

						}

						.bline {
							width: 80rpx;
							height: 0;
							border-top: 2rpx solid #c8c5be;
						}
					}
				}
			}
		}
	}
</style>