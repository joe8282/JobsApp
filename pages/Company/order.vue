<template>
	<view>
		<view class="wrap">
			<view class="u-search-box">
				<view class="u-search-inner">
					<u-icon name="search" color="#909399" :size="28"></u-icon>
					<text class="u-search-text">搜索职位/订单，如:java开发工程师</text>
					
				</view>
			</view>
			<view class="u-tabs-box">
				<u-tabs-swiper style="background: #FBEE6E;" activeColor="#000" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="order" v-for="(res, index) in orderList[0]" :key="res.id">
								<view class="top">
									<view class="left">订单号：{{ res.orderCode }}</view>
									<view class="right">{{ res.time }}</view>
								</view>
								<view class="item">
									<view class="left">
										<view class="title u-line-2">{{ res.name }}<u-icon v-if="res.jiaji" color="red" name="pause" size="30"></u-icon></view>
										<view class="type">{{ res.jingyan+' | '+res.xueli+' | '+res.xinzi }}</view>
									</view>
									<view class="content">
										<view class="type">需求人数：{{ res.renshu }}人 | 已入职：{{ res.ruzhi }}人 </view>
										<view class="delivery-time" @click="toPositionProgress">查看进度</view>
									</view>
									<view class="right">
										<u-icon name="arrow-right" color="rgb(203,203,203)" :size="30"></u-icon>
									</view>
								</view>
							</view>
							<u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="order" v-for="(res, index) in orderList[0]" :key="res.id">
								<view class="top">
									<view class="left">订单号：{{ res.orderCode }}</view>
									<view class="right">{{ res.time }}</view>
								</view>
								<view class="item">
									<view class="left">
										<view class="title u-line-2">{{ res.name }}<u-icon v-if="res.jiaji" color="red" name="pause" size="30"></u-icon></view>
										<view class="type">{{ res.jingyan+' | '+res.xueli+' | '+res.xinzi }}</view>
									</view>
									<view class="content">
										<view class="type">需求人数：{{ res.renshu }}人 | 已入职：{{ res.ruzhi }}人 </view>
										<view class="delivery-time">查看进度</view>
									</view>
									<view class="right">
										<u-icon name="arrow-right" color="rgb(203,203,203)" :size="30"></u-icon>
									</view>
								</view>
							</view>
							<u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="page-box">
							<view>
								<view class="centre">
									<image src="https://cdn.uviewui.com/uview/template/taobao-order.png" mode=""></image>
									<view class="explain">
										您还没有相关的数据
										<view class="tips">可以去创建发布新的职位订单</view>
									</view>
									<view class="btn">发布职位订单</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<view @click="toPositionAdd" class="u-font-32" style="font-weight: bold; width: 100%; position:fixed; bottom: 90rpx; background-color: #FBEE6E;text-align: center; height: 80rpx; line-height: 80rpx;">发布职位订单</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			orderList: [[], [], []],
			dataList: [
				{
					id: 1,
					orderCode: 'W20202125565',
					time: '2020-12-10',
					name:'JAVA开发工程师',
					jingyan:'1-3年',
					xueli:'本科',
					xinzi:'10k-15k',
					renshu:3,
					ruzhi:2,
					jiaji:false
				},
				{
					id: 2,
					orderCode: 'W2020435565',
					time: '2020-12-10',
					name:'前端工程师',
					jingyan:'1-3年',
					xueli:'本科',
					xinzi:'10k',
					renshu:3,
					ruzhi:2,
					jiaji:true
				},
			],
			list: [
				{
					name: '未完成',
					count: 12
				},
				{
					name: '已完成'
				},
				{
					name: '已作废'
				}
			],
			current: 0,
			swiperCurrent: 0,
			tabsHeight: 0,
			dx: 0,
			loadStatus: ['loadmore','loadmore','loadmore'],
		};
	},
	onLoad() {
		this.getOrderList(0);
		this.getOrderList(1);
	},
	computed: {

	},
	methods: {
		toPositionAdd(e) {
			uni.navigateTo({
				url: '/pages/Company/positionAdd'
			})
		},
		toPositionProgress(e) {
			uni.navigateTo({
				url: '/pages/Company/positionProgress'
			})
		},
		reachBottom() {
			// 此tab为空数据
			if(this.current != 2) {
				this.loadStatus.splice(this.current,1,"loading")
				setTimeout(() => {
					this.getOrderList(this.current);
				}, 1200);
			}
		},
		// 页面数据
		getOrderList(idx) {
			for(let i = 0; i < 5; i++) {
				let index = this.$u.random(0, this.dataList.length - 1);
				let data = JSON.parse(JSON.stringify(this.dataList[index]));
				data.id = this.$u.guid();
				this.orderList[idx].push(data);
			}
			this.loadStatus.splice(this.current,1,"loadmore")
		},
		// tab栏切换
		change(index) {
			this.swiperCurrent = index;
			this.getOrderList(index);
		},
		transition({ detail: { dx } }) {
			this.$refs.tabs.setDx(dx);
		},
		animationfinish({ detail: { current } }) {
			this.$refs.tabs.setFinishCurrent(current);
			this.swiperCurrent = current;
			this.current = current;
		}
	}
};
</script>

<style>
/* #ifndef H5 */
page {
	height: 100%;
	background-color: #f2f2f2;
}
/* #endif */

	.u-search-box {
		background: #FBEE6E;
		padding: 10rpx 30rpx;
	}

	.u-search-inner {
		/* background-color: rgb(234, 234, 234); */
		background-color: #fff;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		padding: 15rpx;
	}

	.u-search-text {
		font-size: 26rpx;
		color: #999;
		margin-left: 10rpx;
	}
	
</style>

<style lang="scss" scoped>
.order {
	width: 710rpx;
	background-color: #ffffff;
	margin: 20rpx auto;
	border-radius: 20rpx;
	box-sizing: border-box;
	padding: 20rpx;
	font-size: 20rpx;
	.top {
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			.name {
				
			}
		}
		.right {
			color: $u-tips-color;
		}
	}
	.item {
		display: flex;
		margin: 15rpx 0 0;
		.left {
			width: 380rpx;
			margin-right: 20rpx;
			.title {
				font-size: 32rpx;
				font-weight: bold;
			}
			.type {
				margin: 10rpx 0;
				font-size: 26rpx;
			}
		}
		.content {
			width: 420rpx;
			.type {
				margin: 10rpx 0;
				font-size: 22rpx;
			}
			.delivery-time {
				color: #64D2D6;
				font-size: 24rpx;
			}
		}
		.right {
			padding-top: 50rpx;
			text-align: right;
		}
	}
	.total {
		margin-top: 20rpx;
		text-align: right;
		font-size: 24rpx;
		.total-price {
			font-size: 32rpx;
		}
	}
	.bottom {
		display: flex;
		margin-top: 40rpx;
		padding: 0 10rpx;
		justify-content: space-between;
		align-items: center;
		.btn {
			line-height: 52rpx;
			width: 160rpx;
			border-radius: 26rpx;
			border: 2rpx solid $u-border-color;
			font-size: 26rpx;
			text-align: center;
			color: $u-type-info-dark;
		}
		.evaluate {
			color: $u-type-warning-dark;
			border-color: $u-type-warning-dark;
		}
	}
}
.centre {
	text-align: center;
	margin: 200rpx auto;
	font-size: 32rpx;
	image {
		width: 164rpx;
		height: 164rpx;
		border-radius: 50%;
		margin-bottom: 20rpx;
	}
	.tips {
		font-size: 24rpx;
		color: #999999;
		margin-top: 20rpx;
	}
	.btn {
		margin: 80rpx auto;
		width: 200rpx;
		border-radius: 32rpx;
		line-height: 64rpx;
		color: #ffffff;
		font-size: 26rpx;
		background: linear-gradient(270deg, rgba(249, 116, 90, 1) 0%, rgba(255, 158, 1, 1) 100%);
	}
}
.wrap {
	display: flex;
	flex-direction: column;
	height: calc(100vh - var(--window-top));
	width: 100%;
}
.swiper-box {
	flex: 1;
}
.swiper-item {
	height: 100%;
}
</style>
