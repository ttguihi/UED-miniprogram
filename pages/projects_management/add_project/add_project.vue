<template>
	<view class="page_top_background">

	</view>
	<CustomNavBar title="新建项目"></CustomNavBar>
	<view class="layout">
		<view class="settings">
			<uni-forms :model="formData" :rules="rules" ref="formRef">
				<!-- 客户头像 -->
				<uni-forms-item label="优化目标" name="avatar">
					<uni-easyinput v-model="formData.username" placeholder="请输入会员名称" />
				</uni-forms-item>

				<!-- 会员名称 -->
				<uni-forms-item label="业务线" name="username">
					<uni-easyinput v-model="formData.username" placeholder="请输入会员名称" />
				</uni-forms-item>

				<!-- 选择地区 -->
				<uni-forms-item label="行业/领域" name="region">
					<uni-data-select v-model="formData.region" :localdata="regions" @change="handleRegionChange"
						placeholder=""></uni-data-select>
				</uni-forms-item>

				<!-- 所属行业 -->
				<uni-forms-item label="关键词类型" name="industry">
					<uni-data-select v-model="formData.industry" :localdata="industries" @change="handleIndustryChange"
						placeholder="请选择行业"></uni-data-select>
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
	import CustomNavBar from '../../../components/CustomNavBar/CustomNavBar.vue';
	const formRef = ref()

	// 模拟数据
	const formData = ref({
		avatar: 'https://via.placeholder.com/150', // 默认头像
		username: '张三',
		region: 1, // 默认选择北京
		industry: 3 // 默认选择IT互联网
	})

	// 地区选项
	const regions = ref([{
			value: 1,
			text: "北京"
		},
		{
			value: 2,
			text: "上海"
		},
		{
			value: 3,
			text: "广州"
		},
		{
			value: 4,
			text: "深圳"
		},
		{
			value: 5,
			text: "杭州"
		}
	])

	// 行业选项
	const industries = ref([{
			value: 1,
			text: "金融"
		},
		{
			value: 2,
			text: "教育"
		},
		{
			value: 3,
			text: "IT互联网"
		},
		{
			value: 4,
			text: "医疗"
		},
		{
			value: 5,
			text: "制造业"
		}
	])

	// 验证规则
	const rules = {
		avatar: {
			rules: [{
				required: true,
				errorMessage: '请上传头像'
			}]
		},
		username: {
			rules: [{
					required: true,
					errorMessage: '请输入会员名称'
				},
				{
					validate: (value) => {
						if (!value) return true
						if (value.length < 2 || value.length > 10) {
							return '会员名称2-10个字符'
						}
						return true
					}
				}
			]
		},
		region: {
			rules: [{
				required: true,
				errorMessage: '请选择地区'
			}]
		},
		industry: {
			rules: [{
				required: true,
				errorMessage: '请选择所属行业'
			}]
		}
	}

	// 选择头像
	const chooseAvatar = () => {
		uni.chooseImage({
			count: 1,
			sizeType: ['compressed'],
			sourceType: ['album', 'camera'],
			success: (res) => {
				formData.value.avatar = res.tempFilePaths[0]
			},
			fail: (err) => {
				console.error('选择头像失败:', err)
				uni.showToast({
					title: '选择图片失败',
					icon: 'none'
				})
			}
		})
	}

	// 地区变更
	const handleRegionChange = (e) => {
		console.log('选择地区:', regions.value.find(item => item.value === e))
	}

	// 行业变更
	const handleIndustryChange = (e) => {
		console.log('选择行业:', industries.value.find(item => item.value === e))
	}

	// 提交表单
	const submitForm = async () => {
		try {
			await formRef.value.validate()
			console.log('表单数据:', formData.value)
			uni.showToast({
				title: '保存成功',
				icon: 'success'
			})
			// 这里可以添加实际提交逻辑
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
		formRef.value = {}
		uni.showToast({
			title: '已重置',
			icon: 'none'
		})
	}
</script>

<style lang="scss" scoped>
	.zhizhao,
	.logo {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 16rpx;

		.certificate {
			width: 80rpx;
			height: 60rpx;
			background-color: pink;
		}

		.logo_pic {
			width: 68rpx;
			height: 68rpx;
			border-radius: 10rpx;
			background-color: skyblue;
		}
	}

	.right_arrow {
		width: 16rpx;
		height: 16rpx;
		border-bottom: 4rpx solid #000;
		border-right: 4rpx solid #000;
		transform: rotate(-45deg);

	}

	:deep() .uniui-bottom {
		font-size: 24rpx !important;
		font-weight: 700;
	}

	.layout {



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