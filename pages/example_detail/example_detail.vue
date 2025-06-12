<template>

	<view class="page_top_background">

	</view>
	<CustomNavBar title=""></CustomNavBar>
	<view class="" style="height: 20rpx;">

	</view>
	<DetailExampleCard></DetailExampleCard>
	<view class="mainArea">
		<view class="coverAI">
			<view class="AI_title">
				已覆盖的AI
			</view>
			<view class="AIs">
				<AIKindCard v-for="item in AIList" :key="index">{{item}}</AIKindCard>

			</view>
		</view>
		<view class="examplePic">
			<view class="decoration">

			</view>
			<view class="title">
				案例图片
			</view>
			<view class="picArea">
				<view class="pic" v-for="item in 5">
					<image src="" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import CustomNavBar from '../../components/CustomNavBar/CustomNavBar.vue';
	import DetailExampleCard from '../../components/DetailExampleCard.vue';
	import {
		ref
	} from 'vue'
	import AIKindCard from '../../components/AIKindCard.vue';
	const ifDetail = ref(false)
	const AIList = ref(['DeepSeek', '豆包', '腾讯元宝', "KIMI", "通义千问", "chatGPT", 'KIMI', 'KIMI',
		'DeepSeek',
	])
	// AI个数过多就显示...
	if (AIList.value.length >= 9) {
		AIList.value[8] = "......"
		AIList.value = AIList.value.slice(0, 9)
		console.log(AIList.value);
	}
</script>

<style lang="scss" scoped>
	.mainArea {
		margin-top: 14rpx;
		width: 100%;
		padding: 30rpx;
		background: linear-gradient(to bottom, #ffffff, #f5f5ff 300rpx);
		border-radius: 20rpx 20rpx 0 0;

		.coverAI {
			margin-bottom: 38rpx;

			.AI_title {
				font-size: 28rpx;
				margin-bottom: 34rpx;
			}

			.AIs {
				display: flex;
				flex-wrap: wrap;
			}
		}

		.examplePic {
			position: relative;

			.title {
				font-size: 28rpx;
				margin-bottom: 62rpx;
			}

			.decoration {
				width: 130rpx;
				height: 130rpx;
				left: -30rpx;
				top: 56rpx;
				position: absolute;
				background: url('/common/images/index/example_decoration.svg') no-repeat;
			}

			.picArea {
				padding: 0 20rpx;

				.pic {
					width: 100%;
					height: 364rpx;
					background-color: #fff;
					padding: 10rpx;
					padding-bottom: 0;

					border-radius: 10rpx;

					image {
						border-top-right-radius: 10rpx;
						box-shadow: 8rpx 0 4rpx #eaeaea;
						width: 100%;
						height: 100%;
						background-color: pink;
					}
				}
			}
		}
	}
</style>