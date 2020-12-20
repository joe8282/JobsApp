<template>
	<view>
		<view class="u-m-40">
			<view class="u-flex u-row-between">
				<text style="font-size: 40rpx; font-weight: bold;">JAVA开发工程师 <image src="/static/images/first.png" class="u-m-l-10"
					 style="width: 35rpx; height: 35rpx;" mode="aspectFit"></image></text>
				<text style="font-size: 40rpx; color: #19C3B9;">15K-25K</text>
			</view>
			<view class="u-flex u-row-between u-m-t-20 u-font-16">
				<view>需求人数：4人 | 已入职：<text style="color: #19C3B9;">0</text>人</view>
				<view><text class="u-m-r-20">大专</text><text>3-5年</text></view>
			</view>
		</view>
		<u-gap height="4" bg-color="#ececec"></u-gap>
		<view class="u-m-40">
			<view class="u-font-16" style="font-weight: bold;">五分钟洗车科技</view>
			<view class="u-flex u-row-between u-m-t-20 u-font-16">
				<view>生活服务 | 20-99人</view>
				<view>
					<u-icon name="map" color="#19C3B9" :size="32"></u-icon> <text>深圳龙岗区</text>
				</view>
			</view>
		</view>
		<view class="u-m-40" style="color: #FF0000;">
			<view class="u-font-16">
				<u-icon name="warning" color="#FF0000" :size="32"></u-icon>温馨提示
			</view>
			<view class="u-m-t-10 u-font-12">
				企业/用人机构禁止在招聘的过程中存在向求职者收取不合理费用或克扣证件的行为，一经核实，平台有权帮求职者追回损失，请保持规范招。
			</view>
		</view>
		<view class="u-m-40">
			<view class="u-font-16">技术要求</view>
			<view class="u-m-t-20 u-font-12">
				<text class="u-m-r-20 tag">消息队列</text>
				<text class="u-m-r-20 tag">高并发</text>
				<text class="u-m-r-20 tag">MVC</text>
				<text class="u-m-r-20 tag">消息队列</text>
				<text class="u-m-r-20 tag">高并发</text>
				<text class="u-m-r-20 tag">MVC</text>
			</view>
		</view>
		<view class="u-m-40 u-p-b-80">
			<view class="u-m-b-20" style="font-size: 40rpx;">职位描述</view>
			<view class="u-font-16">任职要求</view>
			<view class="u-m-t-20 u-font-12 tag" style="line-height: 180%;">
				1、全日制大专以上学历，计算机相关专业 <br />
				2、3年以上java开发经验，熟悉Restful API 设计，有微服务经验者优先考虑
			</view>
			<view class="u-font-16 u-m-t-30">工作内容</view>
			<view class="u-m-t-20 u-font-12 tag" style="line-height: 180%;">
				1、负责公司无人洗车，全自动洗车系统后端核心开发工作； <br />
				2、3年以上java开发经验，熟悉Restful API 设计，有微服务经验者优先考虑
			</view>
			<view class="u-font-16 u-m-t-30">福利待遇</view>
			<view class="u-m-t-20 u-font-12">
				<text class="u-m-r-20 tag">年度奖金</text>
				<text class="u-m-r-20 tag">加班补贴</text>
				<text class="u-m-r-20 tag">年度奖金</text>
				<text class="u-m-r-20 tag">年度奖金</text>
			</view>
			<view class="u-font-16 u-m-t-30">职位亮点</view>
			<view class="u-m-t-20 u-font-12 tag" style="line-height: 180%;">
				行业领先平台，成长空间巨大
			</view>
		</view>
		<view class="u-flex u-row-between" style="width: 100%; position:fixed; bottom: 0rpx; height: 70rpx; line-height: 70rpx;">
			<u-button class="u-flex-1 u-m-l-10 u-m-r-10" @click="btnClick" style="background-color: #FBEE6E; font-weight: bold; ">编辑</u-button>
			<u-button class="u-flex-1 u-m-l-10 u-m-r-10" @click="toChangeStatus" style="background-color: #eee; font-weight: bold; ">下架</u-button>
		</view>
		<u-modal ref="uModal" v-model="show" :show-cancel-button="true" :show-title="false" @confirm="confirm">
			<!-- #ifndef MP-WEIXIN || MP-TOUTIAO -->
			<view style="margin: 30rpx;" v-if="true">
				<view>下架原因</view>
				<view class="u-m-t-20"><textarea maxlength="500" style="background-color: #efefef;padding: 15rpx; width: 96%; min-height: 100rpx;line-height: 150%;" auto-height placeholder="请填写下架原因" /></view>
			</view>
			<!-- #endif -->
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
			}
		},
		methods: {
			toChangeStatus(e) {
				this.show = true
			},
		}
	}
</script>

<style lang="scss" scoped>
	.tag {
		display: inline-block;
		padding: 8rpx 10rpx;
		background-color: #f1f1f1;
		border-radius: 5rpx;
		color: #000;
	}
</style>
