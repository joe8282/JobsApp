<template>
	<view>
		<view class="wrap">
			<u-navbar title="发布简历" back-icon-name="nav-back" :background="background">
				<text class="u-font-14 u-m-r-40" slot="right" @click="toSave">保存</text>
			</u-navbar>
			<view class="u-m-b-20 u-p-b-20" style="border-bottom: 1rpx solid #eaeaea; line-height: 100%;">
				<view class="u-flex u-row-between u-m-t-15">
					<text class="u-font-14 u-type-info">头像</text>
					<view class="u-flex u-row-between">
						<image src="/static/images/header.png" style="width: 80rpx; height: 80rpx; border-radius: 50%;"  mode="aspectFit"></image>
						<u-icon name="arrow-right" color="#d6d6d6"></u-icon>
					</view>
				</view>
			</view>
			<view class="u-m-b-20 u-p-b-20" style="border-bottom: 1rpx solid #eaeaea;">
				<view class="u-font-14 u-type-info">姓名</view>
				<view class="u-flex u-row-between u-m-t-15">
					<u-input class="u-font-16" placeholder="请输入姓名" style="font-weight: bold;">{{ result.name }}</u-input>
				</view>
			</view>
			<view class="u-m-b-20 u-p-b-20" style="border-bottom: 1rpx solid #eaeaea;">
				<view class="u-flex u-row-between u-m-t-15">
					<view @click="selectChange('sex')">
						<view class="u-font-14 u-type-info">性别</view>
						<view class="u-font-16 u-m-t-15" style="font-weight: bold; height: 40rpx;">{{ result.sex }}</view>
					</view>
					<view @click="selectChange('xueli')">
						<view class="u-font-14 u-type-info">学历</view>
						<view class="u-font-16 u-m-t-15" style="font-weight: bold; height: 40rpx;">{{ result.xueli }}</view>
					</view>
					<view @click="selectChange('birth')">
						<view class="u-font-14 u-type-info">出生日期</view>
						<view class="u-font-16 u-m-t-15" style="font-weight: bold; height: 40rpx;">{{ result.birth }}</view>
					</view>
				</view>
			</view>
			<view class="u-m-b-20 u-p-b-20" style="border-bottom: 1rpx solid #eaeaea;">
				<view class="u-font-14 u-type-info">手机号/微信号</view>
				<view class="u-flex u-row-between u-m-t-15">
					<u-input class="u-font-16" placeholder="请输入手机号/微信号" style="font-weight: bold;">{{ result.phone }}</u-input>
				</view>
			</view>
			<view class="u-m-b-20 u-p-b-20" style="border-bottom: 1rpx solid #eaeaea;">
				<view class="u-font-14 u-type-info">首次参加工作时间</view>
				<view class="u-flex u-row-between u-m-t-15" @click="toJobDate">
					<text class="u-font-16" style="font-weight: bold;">{{ result.jobDate }}</text>
					<u-icon name="arrow-right" size="30" color="#d6d6d6"></u-icon>
				</view>
			</view>
			<view class="u-m-b-20 u-p-b-20" style="border-bottom: 1rpx solid #eaeaea;">
				<view class="u-font-14 u-type-info">目前所在城市</view>
				<view class="u-flex u-row-between u-m-t-15" @click="toC">
					<text class="u-font-16" style="font-weight: bold;">{{ result.citye }}</text>
					<u-icon name="arrow-right" size="30" color="#d6d6d6"></u-icon>
				</view>
			</view>
			<view class="u-m-b-20 u-p-b-20" style="border-bottom: 1rpx solid #eaeaea;">
				<view class="u-font-14 u-type-info">身份证号码</view>
				<view class="u-flex u-row-between u-m-t-15">
					<u-input class="u-font-16" placeholder="请输入身份证号码" style="font-weight: bold;">{{ result.IDCard }}</u-input>
				</view>
			</view>
			<view class="u-m-b-20 u-p-b-20" style="border-bottom: 1rpx solid #eaeaea;">
				<view class="u-font-14 u-type-info">常用邮箱</view>
				<view class="u-flex u-row-between u-m-t-15">
					<u-input class="u-font-16" placeholder="请输入常用邮箱" style="font-weight: bold;">{{ result.email }}</u-input>
				</view>
			</view>
			<view class="u-m-b-20 u-p-b-20" style="border-bottom: 1rpx solid #eaeaea;">
				<view class="u-font-14 u-type-info">最近的一份工作职位</view>
				<view class="u-flex u-row-between u-m-t-15" @click="toPosition">
					<text class="u-font-16" style="font-weight: bold;">{{ result.position }}</text>
					<u-icon name="arrow-right" size="30" color="#d6d6d6"></u-icon>
				</view>
			</view>
			<view class="u-m-b-20 u-p-b-20" style="border-bottom: 1rpx solid #eaeaea;">
				<view class="u-font-14 u-type-info">目前月薪</view>
				<view class="u-flex u-row-between u-m-t-15" @click="selectChange('xinzi')">
					<text class="u-font-16" style="font-weight: bold;">{{ result.xinzi }}</text>
					<u-icon name="arrow-right" size="30" color="#d6d6d6"></u-icon>
				</view>
			</view>
			
			<view class="u-m-b-20 u-p-b-20" style="border-bottom: 1rpx solid #C1C1C1;">
				<view class="u-font-14 u-type-info">职位技能</view>
				<view class="u-flex u-row-between u-m-t-15" @click="toSkill">
					<div>
						<u-tag class="u-m-r-20" v-for="(item,index) in result.Skills" :key="index" :text="item.name" type="info" mode="dark" />
					</div>
					<u-icon name="arrow-right" size="30" color="#C1C1C1"></u-icon>
				</view>
			</view>
			<view class="u-m-b-20 u-p-b-20" style="border-bottom: 1rpx solid #C1C1C1;">
				<view class="u-font-14 u-type-info">职位描述</view>
				<view class="u-flex u-row-between u-m-t-15" @click="toDes">
					<text class="u-font-16 text-overflow" style="font-weight: bold;">{{ result.des }}</text>
					<u-icon name="arrow-right" size="30" color="#C1C1C1"></u-icon>
				</view>
			</view>
			<view class="u-m-b-20 u-p-b-20" style="border-bottom: 1rpx solid #C1C1C1;">
				<view class="u-font-14 u-type-info">福利待遇</view>
				<view class="u-flex u-row-between u-m-t-15" @click="toWelfare">
					<div>
						<u-tag class="u-m-r-20" v-for="(item,index) in result.Welfares" :key="index" :text="item.name" type="info" mode="dark" />
					</div>
					<u-icon name="arrow-right" size="30" color="#C1C1C1"></u-icon>
				</view>
			</view>
			<view class="u-m-b-20 u-p-b-20" style="border-bottom: 1rpx solid #C1C1C1;">
				<view class="u-font-14 u-type-info">工作地点</view>
				<view class="u-flex u-row-between u-m-t-15" @click="toAddress">
					<text class="u-font-16" style="font-weight: bold;">{{ result.address }}</text>
					<u-icon name="arrow-right" size="30" color="#C1C1C1"></u-icon>
				</view>
			</view>
			<view class="u-flex u-row-start u-col-top">
				<u-checkbox class="u-m-r-10 u-m-t-5" size="25" v-model="check" @change="checkboxChange"></u-checkbox>
				<view class="u-font-13">
					同意遵守<text style="color: #19BFC1;">《唯才是举职位发布规则》</text>，违规发布虚假职位 可能导致账号被冻结，发布前请仔细核对。
				</view>
			</view>
		</view>
		<u-select @click="show = true" :default-value="defaultValue" :mode="mode" v-model="show" :list="list" @confirm="confirm" @cancel="cancel"></u-select>
		
		<view @click="toAddSuccess" class="u-font-32" style="font-weight: bold; width: 100%; position:fixed; bottom: 0; background-color: #FBEE6E;text-align: center; height: 80rpx; line-height: 80rpx;">生成职位订单</view>
		<u-calendar v-model="showDate" ref="calendar" @change="changeDate" :mode="calendar_mode"
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
				
				calendar_mode: 'date',
				showDate: false,

				check: false,
				
				show: false,
				which:'',
				result:{
					name:'',
					phone:'',
					jobDate:'',
					citye:'',
					IDCard:'',
					email:'',
					position:'',
					des:'',
					Skills: [],
					Welfares: [],
					address:'',
					sex:'',
					xueli:'',
					xinzi:'',
					birth:''
				} ,
				defaultValue: [0],
				mode: 'single-column', // single-column, mutil-column, mutil-column-auto
				list: [],
				sex: [
					{ value: '男', label: '男' },
					{ value: '女', label: '女' },
				],
				xueli: [
					{ value: '高中以下', label: '高中以下' },
					{ value: '大专', label: '大专' },
					{ value: '本科', label: '本科' },
				],
				xinzi: [
					[
						{ value: '1K', label: '1K' },
						{ value: '2K', label: '2K' },
						{ value: '3K', label: '3K' },
						{ value: '4K', label: '4K' },
						{ value: '5K', label: '5K' },
						{ value: '6K', label: '6K' },
						{ value: '7K', label: '7K' },
						{ value: '8K', label: '8K' },
						{ value: '9K', label: '9K' },
						{ value: '10K', label: '10K' },
					],
					[
						{ value: '1K', label: '1K' },
						{ value: '2K', label: '2K' },
						{ value: '3K', label: '3K' },
						{ value: '4K', label: '4K' },
						{ value: '5K', label: '5K' },
						{ value: '6K', label: '6K' },
						{ value: '7K', label: '7K' },
						{ value: '8K', label: '8K' },
						{ value: '9K', label: '9K' },
						{ value: '10K', label: '10K' },
					]
				],
			}
		},
		methods: {
			// 勾选版权协议
			checkboxChange(e) {
				this.check = true
			},
			toPosition(e) {
				uni.navigateTo({
					url: '/pages/Company/positionAddSelect'
				})
			},
			toSkill(e) {
				uni.navigateTo({
					url: '/pages/Company/positionAddSkill'
				})
			},
			toWelfare(e) {
				uni.navigateTo({
					url: '/pages/Company/positionAddWelfare'
				})
			},
			toAddress(e) {
				uni.navigateTo({
					url: '/pages/Company/positionAddAddress'
				})
			},
			toDes(e) {
				uni.navigateTo({
					url: '/pages/Company/positionAddDes'
				})
			},
			selectChange(which) {
				//let type = ['single-column', 'mutil-column', 'mutil-column-auto'];
				this.which = which
				if(this.which == 'sex'){ this.show = true;this.list = this.sex; this.mode = 'single-column'; }
				if(this.which == 'xueli'){ this.show = true;this.list = this.xueli; this.mode = 'single-column'; }
				if(this.which == 'xinzi'){ this.show = true;this.list = this.xinzi; this.mode = 'mutil-column'; }
				if(this.which == 'birth'){ this.showDate = true; }
			},
			changeDate(e) {
				this.result.birth = e.result;
			},
			confirm(e) {
				//console.log(e)
				if(this.which=='sex'){ this.result.sex = e[0].label }
				if(this.which=='xueli'){ this.result.xueli = e[0].label }
				if(this.which=='xinzi'){ this.result.xinzi = e[0].label+'-'+e[1].label }
				// this.result = '';
				// e.map((val, index) => {
				// 	this.result += this.result == '' ? val.label : '-' + val.label;
				// })
			},
			cancel(e) {
				console.log(e);
			},
			toAddSuccess(e) {
				uni.navigateTo({
					url: '/pages/Company/positionAddSuccess'
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.wrap {
		padding: 30rpx 30rpx 120rpx 30rpx;
	}
	.text-overflow{
		overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
	}
</style>

