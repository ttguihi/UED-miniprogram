<template>
	<view class="page">
		<view class="page_top_background"></view>
		<CustomNavBar title="企业认证"></CustomNavBar>
		<view class="settings">
			<uni-forms :model="formData" :rules="rules" ref="formRef">
				<!-- 企业LOGO -->
				<uni-forms-item label="企业LOGO" label-width="50" name="logo">
					<view class="logo" @click="chooseLogo">
						<view class="logo_pic">
							<image v-if="formData.logo" :src="formData.logo" mode="aspectFill"></image>
							<view v-else class="placeholder">+</view>
							<view v-if="formData.logo" class="delete-btn" @click.stop="deleteImage('logo')">×</view>
						</view>
						<view class="right_arrow"></view>
					</view>
				</uni-forms-item>

				<!-- 企业名称 -->
				<uni-forms-item label="企业名称" name="companyName">
					<uni-easyinput v-model="formData.companyName" placeholder="请输入企业名称" />
				</uni-forms-item>

				<!-- 业务范围 -->
				<uni-forms-item label="业务范围" name="businessScope">
					<uni-data-select v-model="formData.businessScope" :localdata="businessScopes"
						@change="change"></uni-data-select>
				</uni-forms-item>

				<!-- 营业执照 -->
				<uni-forms-item label="营业执照" name="license">
					<view class="zhizhao" @click="chooseLicense">
						<view class="certificate">
							<image v-if="formData.license" :src="formData.license" mode="aspectFill"></image>
							<view v-else class="placeholder">点击上传</view>
							<view v-if="formData.license" class="delete-btn" @click.stop="deleteImage('license')">×
							</view>
						</view>
						<view class="right_arrow"></view>
					</view>
				</uni-forms-item>

				<!-- 对公账户 -->
				<uni-forms-item label="对公账户" name="accountNumber">
					<uni-easyinput v-model="formData.accountNumber" placeholder="请输入对公账号" />
				</uni-forms-item>

				<!-- 对公账户地址 -->
				<uni-forms-item label="对公账户地址" name="accountAddress">
					<uni-easyinput v-model="formData.accountAddress" placeholder="请输入开户行地址" />
				</uni-forms-item>
			</uni-forms>
		</view>

		<view class="button_area">
			<button @click="resetForm">取消</button>
			<button @click="submitForm">确认</button>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'

	import {
		useVerifyStore
	} from '../../../store/verify'
	const verifyStore = useVerifyStore()
	const chooseLogo = () => {
		uni.chooseImage({
			count: 1,
			sizeType: ['compressed'],
			sourceType: ['album', 'camera'],
			success: (res) => {
				// 实际项目中这里应该上传到服务器
				formData.value.logo = res.tempFilePaths[0]
			},
			fail: (err) => {
				console.error('选择LOGO失败:', err)
				uni.showToast({
					title: '选择图片失败',
					icon: 'none'
				})
			}
		})
	}

	const chooseLicense = () => {
		uni.chooseImage({
			count: 1,
			sizeType: ['compressed'],
			sourceType: ['album', 'camera'],
			success: (res) => {
				// 实际项目中这里应该上传到服务器
				formData.value.license = res.tempFilePaths[0]
			},
			fail: (err) => {
				console.error('选择营业执照失败:', err)
				uni.showToast({
					title: '选择图片失败',
					icon: 'none'
				})
			}
		})
	}

	// 删除图片
	const deleteImage = (type) => {
		uni.showModal({
			title: '提示',
			content: `确定要删除${type === 'logo' ? 'LOGO' : '营业执照'}吗?`,
			success: (res) => {
				if (res.confirm) {
					formData.value[type] = ''
				}
			}
		})
	}
	const formRef = ref()

	// 表单数据
	const formData = ref({
		logo: '',
		companyName: '',
		businessScope: null,
		license: '',
		accountNumber: '',
		accountAddress: ''
	})

	// 业务范围选项
	const businessScopes = ref([{
			value: 1,
			text: "电子商务"
		},
		{
			value: 2,
			text: "金融服务"
		},
		{
			value: 3,
			text: "软件开发"
		},
		{
			value: 4,
			text: "教育培训"
		},
		{
			value: 5,
			text: "医疗健康"
		}
	])

	// 验证规则 - 修正版
	const rules = {
		logo: {
			rules: [{
				required: true,
				errorMessage: '请上传企业LOGO'
			}]
		},
		companyName: {
			rules: [{
					required: true,
					errorMessage: '请输入企业名称'
				},
				{
					validate: (value) => {
						if (!value) return true
						if (value.length > 20) {
							return '企业名称不超过20个字'
						}
						if (/^[a-zA-Z\s]+$/.test(value)) {
							return '企业名称不能全是英文'
						}
						return true
					}
				}
			]
		},
		businessScope: {
			rules: [{
				required: true,
				errorMessage: '请选择业务范围'
			}]
		},
		license: {
			rules: [{
				required: true,
				errorMessage: '请上传营业执照'
			}]
		},
		accountNumber: {
			rules: [{
					required: true,
					errorMessage: '请输入对公账号'
				},
				{
					pattern: /^\d{16,20}$/,
					errorMessage: '账号应为16-20位数字'
				}
			]
		},
		accountAddress: {
			rules: [{
				required: true,
				errorMessage: '请输入开户行地址'
			}]
		}
	}

	// 提交表单
	const submitForm = async () => {
		try {
			// 验证表单
			const validate = await formRef.value.validate()
			console.log('验证通过', validate)

			// 提交逻辑
			uni.showToast({
				title: '提交成功',
				icon: 'success'
			})
			verifyStore.ifVerify = true
			uni.navigateBack()
			console.log('表单数据:', formData.value)

		} catch (err) {
			console.log('表单验证失败:', err)
			uni.showToast({
				title: err[0].errorMessage,
				icon: 'none'
			})
		}
	}

	// 重置表单
	const resetForm = () => {
		formData.value = ""
		uni.showToast({
			title: '已重置',
			icon: 'none'
		})
	}
</script>
<style lang="scss" scoped>
	.right_arrow {
		width: 16rpx;
		height: 16rpx;
		border-bottom: 4rpx solid #000;
		border-right: 4rpx solid #000;
		transform: rotate(-45deg);
	}

	// logo部分
	.zhizhao,
	.logo {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 16rpx;

		.certificate,
		.logo_pic {
			image {
				width: 100%;
				height: 100%;
				border-radius: 8rpx;
			}
		}

		.certificate {
			width: 120rpx;
			height: 90rpx;
			background-color: #f5f5f5;
		}

		.logo_pic {
			width: 100rpx;
			height: 100rpx;
			border-radius: 10rpx;
			background-color: #f5f5f5;
			overflow: hidden;
		}
	}

	// 改变select框样式
	:deep() {
		.uniui-bottom {
			font-size: 24rpx !important;
			font-weight: 700;
		}

		.uni-forms-item__content {
			display: flex;
			justify-content: flex-end;
		}

		.uni-easyinput__content {
			min-height: 80rpx;
		}
	}

	.page {
		padding-bottom: 100rpx;

		.settings {
			margin: 0 auto;
			margin-top: 32rpx;
			width: 688rpx;
			padding: 0 32rpx;
			padding-top: 40rpx;
			border-radius: 20rpx;
			background: rgba(255, 255, 255, 0.7);
			color: #000 !important;
		}

		.button_area {
			margin: 0 auto;
			margin-top: 66rpx;
			display: flex;
			justify-content: center;
			gap: 40rpx;

			button {
				width: 300rpx;
				height: 72rpx;
				line-height: 72rpx;
				border-radius: 60rpx;
				box-shadow: 4rpx 2rpx 8rpx #eceefe;
				font-size: 28rpx;

				&:first-child {
					background-color: #fff;
					color: #333;
				}

				&:nth-child(2) {
					color: #fff;
					background: linear-gradient(to right, #3051f5, #893afb);
				}
			}
		}
	}
</style>