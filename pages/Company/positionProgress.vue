<template>
	<view class="wrap">
		<view class="u-m-b-30 u-font-18 u-text-center">订单号：W00000001</view>
		<u-time-line>
			<u-time-line-item nodeTop="0">
				<template v-slot:node>
					<view class="u-node" style="background: #19be6b;">
						<u-icon name="checkbox-mark" color="#fff" :size="28"></u-icon>
					</view>
				</template>
				<template v-slot:content>
					<view>
						<view class="u-order-title unacive u-flex">
							<text class="u-flex-1">订单完成</text>
							<u-line-progress class="u-flex-3" percent="100" active-color="#19be6b"></u-line-progress>
						</view>
						<view class="u-order-desc">恭喜，人员全部招齐，订单完成！</view>
						<view class="u-order-time">2019-12-02 12:55</view>
					</view>
				</template>
			</u-time-line-item>
			<u-time-line-item nodeTop="0">
				<template v-slot:node>
					<view class="u-node">
						<u-icon name="account-fill" color="#fff" :size="28"></u-icon>
					</view>
				</template>
				<template v-slot:content>
					<view>
						<view class="u-order-title unacive">待入职</view>
						<view class="u-order-desc">已发<text class="tel">6</text>份offer , 等待入职</view>
						<view class="u-order-time">2019-12-02 12:55</view>
					</view>
				</template>
			</u-time-line-item>
			<u-time-line-item nodeTop="0">
				<template v-slot:node>
					<view class="u-node">
						<u-icon name="car-fill" color="#fff" :size="28"></u-icon>
					</view>
				</template>
				<template v-slot:content>
					<view>
						<view class="u-order-title unacive">通过面试</view>
						<view class="u-order-desc">有<text class="tel">6</text>人通过面试，快快发offer吧</view>
						<view class="u-order-time">2019-12-02 12:55</view>
					</view>
				</template>
			</u-time-line-item>
			<u-time-line-item nodeTop="0">
				<template v-slot:node>
					<view class="u-node">
						<u-icon name="car-fill" color="#fff" :size="28"></u-icon>
					</view>
				</template>
				<template v-slot:content>
					<view>
						<view class="u-order-title unacive">已发面试邀请</view>
						<view class="u-order-desc">经过筛选与沟通，有<text class="tel">15</text>人得到面试邀请</view>
						<view class="u-order-time">2019-12-02 12:55</view>
					</view>
				</template>
			</u-time-line-item>
			<u-time-line-item nodeTop="0">
				<template v-slot:node>
					<view class="u-node">
						<u-icon name="car-fill" color="#fff" :size="28"></u-icon>
					</view>
				</template>
				<template v-slot:content>
					<view>
						<view class="u-order-title unacive">收到简历</view>
						<view class="u-order-desc">有<text class="tel">60</text>人投递对此职位感兴趣职位</view>
						<view class="u-order-time">2019-12-02 12:55</view>
					</view>
				</template>
			</u-time-line-item>
			<u-time-line-item nodeTop="0">
				<template v-slot:node>
					<view class="u-node">
						<u-icon name="file-text-fill" color="#fff" :size="28"></u-icon>
					</view>
				</template>
				<template v-slot:content>
					<view>
						<view class="u-order-title unacive">已下单</view>
						<view class="u-order-desc">已发布<text class="tel">app运营专员</text>职位, 需求<text class="tel">3</text>人</view>
						<view class="u-order-time">2019-12-02 12:55</view>
					</view>
				</template>
			</u-time-line-item>
		</u-time-line>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 30rpx 80rpx;
	}
	
	.u-node {
		width: 44rpx;
		height: 44rpx;
		border-radius: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #d0d0d0;
	}
	
	.u-order-title {
		color: #333333;
		font-weight: bold;
		font-size: 30rpx;
	}
	
	.u-order-title.unacive {
		color: rgb(150, 150, 150);
	}
	
	.u-order-desc {
		color: rgb(150, 150, 150);
		font-size: 26rpx;
		margin-bottom: 6rpx;
	}
	
	.u-order-time {
		color: rgb(200, 200, 200);
		font-size: 26rpx;
	}
	
	.tel {
		color: #36C9E3;
		font-size: 32rpx;
		font-weight: bold;
		margin: 0 10rpx;
	}
</style>
