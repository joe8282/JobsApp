<template>
	<view>
		<view class="wrap">
			<u-navbar title="入离职管理" back-icon-name="nav-back" :background="background">
				<text class="u-font-14 u-m-r-40" slot="right" @click="toFilter">筛选</text>
			</u-navbar>
			<view class="u-tabs-box">
				<u-tabs-swiper activeColor="#000" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false"
				 swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="order" v-for="(res, index) in orderList[0]" :key="res.id">
								<view class="top">
									<view class="left">订单号：{{ res.orderCode }}</view>
									<view class="right">{{ res.position }}</view>
								</view>
								<view class="item">
									<view class="title">{{ res.name }}</view>
									<view class="type">{{ '性别：'+res.sex +'&nbsp;&nbsp;&nbsp;&nbsp;经验：'+ res.jingyan+'&nbsp;&nbsp;&nbsp;&nbsp;学历：'+res.xueli+'&nbsp;&nbsp;&nbsp;&nbsp;薪资：'+res.xinzi+'/月' }}</view>
								</view>
								<view class="bottom">
									消耗能量：<text class="price u-m-r-20">{{ res.score }}</text><u-button class="u-m-r-20" type="success" size="mini" @click="toPay">确认入职</u-button><u-button type="default" size="mini">放弃</u-button>
								</view>
							</view>
							<u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="order" v-for="(res, index) in orderList[1]" :key="res.id">
								<view class="top">
									<view class="left">订单号：{{ res.orderCode }}</view>
									<view class="right">{{ res.position }}</view>
								</view>
								<view class="item">
									<view class="title">{{ res.name }}</view>
									<view class="type">{{ '性别：'+res.sex +'&nbsp;&nbsp;&nbsp;&nbsp;经验：'+ res.jingyan+'&nbsp;&nbsp;&nbsp;&nbsp;学历：'+res.xueli+'&nbsp;&nbsp;&nbsp;&nbsp;薪资：'+res.xinzi+'/月' }}</view>
									<view class="type">入职时间：<text class="u-m-r-20">{{ res.startTime }}</text></view>
								</view>
								<view class="bottom">
									<u-button type="success" size="mini">确认离职</u-button>
								</view>
							</view>
							<u-loadmore :status="loadStatus[1]" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="page-box">
<!-- 							<view>
								<view class="centre">
									<image src="https://cdn.uviewui.com/uview/template/taobao-order.png" mode=""></image>
									<view class="explain">
										您还没有相关的数据
										<view class="tips">可以去创建发布新的职位订单</view>
									</view>
									<view class="btn">发布职位订单</view>
								</view>
							</view> -->
							<view class="order" v-for="(res, index) in orderList[2]" :key="res.id">
								<view class="top">
									<view class="left">订单号：{{ res.orderCode }}</view>
									<view class="right">{{ res.position }}</view>
								</view>
								<view class="item">
									<view class="title">{{ res.name }}</view>
									<view class="type">{{ '性别：'+res.sex +'&nbsp;&nbsp;&nbsp;&nbsp;经验：'+ res.jingyan+'&nbsp;&nbsp;&nbsp;&nbsp;学历：'+res.xueli+'&nbsp;&nbsp;&nbsp;&nbsp;薪资：'+res.xinzi+'/月' }}</view>
									<view class="type">入职时间：<text class="u-m-r-20">{{ res.startTime }}</text>离职时间：<text class="u-m-r-20">{{ res.endTime }}</text></view>
								</view>
								<view class="bottom">
									<u-button class="u-m-r-20" type="success" size="mini" @click="toShowDimission">离职证明</u-button><u-button type="success" size="mini">离职评价</u-button>
								</view>
							</view>
							<u-loadmore :status="loadStatus[2]" bgColor="#f2f2f2"></u-loadmore>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<u-modal ref="uModal" v-model="show" :show-cancel-button="true" :show-title="false" @confirm="confirm">
			<!-- #ifndef MP-WEIXIN || MP-TOUTIAO -->
			<view style="margin: 30rpx;" v-if="true">
				<view>离职证明</view>
				<view class="u-m-t-20 u-text-center">
					<text class="u-font-14" @click="toShowDate">{{result}}</text>
				</view>
			</view>
			<!-- #endif -->
		</u-modal>
		<u-calendar v-model="showDate" ref="calendar" @change="changeDate" :mode="mode"
			start-text="开始" end-text="结束" range-color="#19be6b"
			range-bg-color="rgba(25,190,107, 0.13)" active-bg-color="#19be6b" btn-type="success">
		</u-calendar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					'background-color': '#FBEE6E'
				},
				orderList: [
					[],
					[],
					[]
				],
				dataList: [{
						id: 1,
						orderCode: 'W20202125565',
						position: 'JAVA开发工程师',
						name: '张晓明',
						jingyan: '3年',
						xueli: '本科',
						xinzi: '15k',
						sex: '男',
						score: 100,
						startTime:'2018-10-01',
						endTime:'2020-10-01',
					},
					{
						id: 2,
						orderCode: 'W20202125565',
						position: 'JAVA开发工程师',
						name: '张晓明',
						jingyan: '3年',
						xueli: '本科',
						xinzi: '15k',
						sex: '男',
						score: 100,
						startTime:'2018-10-01',
						endTime:'2020-10-01',
					},
				],
				list: [{
						name: '未入职',
						count: 12
					},
					{
						name: '已入职'
					},
					{
						name: '已离职'
					}
				],
				current: 0,
				swiperCurrent: 0,
				tabsHeight: 0,
				dx: 0,
				loadStatus: ['loadmore', 'loadmore', 'loadmore'],
				
				mode: 'range',
				show: false,
				showDate: false,
				result:'点击选择入职离职时间'
			};
		},
		onLoad() {
			this.getOrderList(0);
			this.getOrderList(1);
			this.getOrderList(2);
		},
		computed: {

		},
		methods: {
			toShowDimission(e) {
				this.show = true
			},
			toShowDate(e) {
				this.showDate = true;
			},
			changeDate(e) {
				console.log(e)
				if (this.mode == 'range') {
					this.result = e.startDate + " 至 " + e.endDate;
				} else {
					this.result = e.result;
				}
			},
			confirm(e) {
				uni.navigateTo({
					url: '/pages/CompanyCenter/positionDimission'
				})
			},
			
			toFilter(e) {
				uni.navigateTo({
					url: '/pages/CompanyCenter/positionFilter'
				})
			},
			toPay(e) {
				uni.navigateTo({
					url: '/pages/CompanyCenter/positionPay'
				})
			},
			reachBottom() {
				// 此tab为空数据
				if (this.current != 2) {
					this.loadStatus.splice(this.current, 1, "loading")
					setTimeout(() => {
						this.getOrderList(this.current);
					}, 1200);
				}
			},
			// 页面数据
			getOrderList(idx) {
				for (let i = 0; i < 5; i++) {
					let index = this.$u.random(0, this.dataList.length - 1);
					let data = JSON.parse(JSON.stringify(this.dataList[index]));
					data.id = this.$u.guid();
					this.orderList[idx].push(data);
				}
				this.loadStatus.splice(this.current, 1, "loadmore")
			},
			// tab栏切换
			change(index) {
				this.swiperCurrent = index;
				this.getOrderList(index);
			},
			transition({
				detail: {
					dx
				}
			}) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({
				detail: {
					current
				}
			}) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			}
		}
	};
</script>


<style lang="scss" scoped>
	page {
		height: 100%;
		background-color: #f2f2f2;
	}

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
			}

			.right {
				// color: $u-tips-color;
				font-size: 24rpx;
			}
		}

		.item {
			display: flex;
			flex-direction: column;
			margin: 15rpx 0;
			padding-bottom: 20rpx;
			border-bottom: 1rpx solid #efefef;

			.title {
				font-size: 32rpx;
				font-weight: bold;
			}
			.type {
				margin: 10rpx 0;
				font-size: 24rpx;
			}

		}

		.bottom {
			//display: flex;
			//justify-content: flex-end;
			text-align: right;
			.price {
				color: #FA3534;
				font-size: 34rpx;
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
