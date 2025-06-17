<template>
	<view class="page">
		<view class="page_top_background">
		</view>
		<CustomNavBar title="更换手机号码"></CustomNavBar>
		<view class="settings">
			<uni-forms :model="formData" :rules="rules" ref="formRef">

				<uni-forms-item label="新手机号" name="phone">
					<uni-easyinput v-model="formData.phone" placeholder="请输入新手机号" />
				</uni-forms-item>
				<uni-forms-item label="验证码" name="code">
					<view class="form-item">
						<uni-easyinput v-model="formData.code" placeholder="请输入验证码" />
						<button @click="getCode" :disabled="isCounting">{{ countdownText }}</button>
					</view>
				</uni-forms-item>
			</uni-forms>
		</view>
		<view class="button_area">
			<button @click="handleCancel">取消</button>
			<button @click="handleSubmit">确认</button>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'

	// 表单数据
	const formData = reactive({
		phone: '',
		code: ''
	})

	// 表单验证规则
	const rules = {
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
		code: {
			rules: [{
					required: true,
					errorMessage: '请输入验证码'
				},
				{
					pattern: /^\d{6}$/,
					errorMessage: '验证码格式不正确'
				}
			]
		}
	}

	const formRef = ref(null)

	// 验证码相关逻辑
	const isCounting = ref(false)
	const countdown = ref(60)
	const countdownText = ref('获取验证码')

	// 获取验证码
	const getCode = async () => {
		try {
			// 先验证手机号
			await formRef.value.validateField('phone')
			// 这里应该调用API发送验证码
			// await sendSmsApi(formData.phone)
			uni.showToast({
				title: '验证码已发送',
				icon: 'none'
			})
			// 开始倒计时
			isCounting.value = true
			const timer = setInterval(() => {
				countdown.value--
				countdownText.value = `${countdown.value}秒后重试`

				if (countdown.value <= 0) {
					clearInterval(timer)
					isCounting.value = false
					countdown.value = 60
					countdownText.value = '获取验证码'
				}
			}, 1000)
		} catch (e) {
			console.error(e)
		}
	}

	// 取消按钮
	const handleCancel = () => {
		uni.navigateBack()
	}

	// 提交表单
	const handleSubmit = async () => {
		try {
			// 验证表单
			await formRef.value.validate()

			// 这里应该调用API提交表单
			// await changePhoneApi(formData)

			uni.showToast({
				title: '手机号修改成功',
				icon: 'success'
			})

			// 返回上一页
			setTimeout(() => {
				uni.navigateBack()
			}, 1500)
		} catch (e) {
			console.error(e)
		}
	}
</script>

<style lang="scss" scoped>
	.form-item {
		display: flex;
		align-items: center;

		&>button {
			color: #fff;
			margin-left: 12rpx;
			background: linear-gradient(to right, #394ff6, #833cfb);
		}
	}

	.page {
		.settings {
			margin: 0 auto;
			margin-top: 32rpx;
			width: 688rpx;
			padding: 0 32rpx;
			padding-top: 40rpx;
			height: 1160rpx;
			border-radius: 20rpx;
			background: rgba(255, 255, 255, 0.7);
			height: 1240rpx;
			color: #000 !important;

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

		.button_area {
			margin: 0 auto;
			margin-top: 66rpx;
			display: flex;

			button {
				width: 300rpx;
				height: 72rpx;
				border-radius: 60rpx;
				box-shadow: 4rpx 2rpx 8rpx #eceefe;

				&:first-child {
					background-color: #fff;
				}

				&:nth-child(2) {
					color: #fff;
					background: linear-gradient(to right, #3051f5, #893afb);
				}
			}
		}
	}
</style>