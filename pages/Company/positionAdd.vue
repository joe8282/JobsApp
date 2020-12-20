<template>
	<view>
		<view class="wrap">
			<view class="u-m-b-20 u-p-b-20" style="border-bottom: 1rpx solid #C1C1C1;">
				<view class="u-font-14 u-type-info">招聘类型</view>
				<view class="u-flex u-row-between u-m-t-15">
					<text class="u-font-16" style="font-weight: bold;">全职</text>
					<text class="u-font-16" style="font-weight: bold;">招聘紧急等级 <u-icon name="pause" size="30"></u-icon></text>
				</view>
			</view>
			<view class="u-m-b-20 u-p-b-20" style="border-bottom: 1rpx solid #C1C1C1;">
				<view class="u-font-14 u-type-info">职位名称</view>
				<view class="u-flex u-row-between u-m-t-15" @click="toPosition">
					<text class="u-font-16" style="font-weight: bold;">{{ result.position }}</text>
					<u-icon name="arrow-right" size="30" color="#C1C1C1"></u-icon>
				</view>
			</view>
			<view class="u-m-b-20 u-p-b-20" style="border-bottom: 1rpx solid #C1C1C1;">
				<view class="u-flex u-row-between u-m-t-15">
					<view @click="selectChange('jingyan')">
						<view class="u-font-14 u-type-info">经验要求</view>
						<view class="u-font-16 u-m-t-15" style="font-weight: bold; height: 40rpx;">{{ result.jingyan }}</view>
					</view>
					<view @click="selectChange('xueli')">
						<view class="u-font-14 u-type-info">最低学历</view>
						<view class="u-font-16 u-m-t-15" style="font-weight: bold; height: 40rpx;">{{ result.xueli }}</view>
					</view>
					<view @click="selectChange('xinzi')">
						<view class="u-font-14 u-type-info">薪资范围</view>
						<view class="u-font-16 u-m-t-15" style="font-weight: bold; height: 40rpx;">{{ result.xinzi }}</view>
					</view>
					<view @click="selectChange('renshu')">
						<view class="u-font-14 u-type-info">需求人数</view>
						<view class="u-font-16 u-m-t-15" style="font-weight: bold; height: 40rpx;">{{ result.renshu }}</view>
					</view>
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:' ',
				check: false,
				
				show: false,
				which:'',
				result:{
					position:'',
					des:'',
					Skills: [],
					Welfares: [],
					address:'',
					jingyan:'',
					xueli:'',
					xinzi:'',
					renshu:''
				} ,
				defaultValue: [0],
				mode: 'single-column', // single-column, mutil-column, mutil-column-auto
				list: [],
				jingyan: [
					{ value: '经验不限', label: '经验不限' },
					{ value: '一年以下', label: '一年以下' },
					{ value: '1-3年', label: '1-3年' },
					{ value: '3-5年', label: '3-5年' },
				],
				xueli: [
					{ value: '学历不限', label: '学历不限' },
					{ value: '高中以下', label: '高中以下' },
					{ value: '大专', label: '大专' },
					{ value: '本科', label: '本科' },
				],
				renshu: [
					{ value: '1人', label: '1人' },
					{ value: '2人', label: '2人' },
					{ value: '3人', label: '3人' },
					{ value: '4人', label: '4人' },
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
				if(this.which == 'jingyan'){ this.list = this.jingyan; this.mode = 'single-column'; }
				if(this.which == 'xueli'){ this.list = this.xueli; this.mode = 'single-column'; }
				if(this.which == 'xinzi'){ this.list = this.xinzi; this.mode = 'mutil-column'; }
				if(this.which == 'renshu'){ this.list = this.renshu; this.mode = 'single-column'; }
				this.show = true;
			},
			confirm(e) {
				//console.log(e)
				if(this.which=='jingyan'){ this.result.jingyan = e[0].label }
				if(this.which=='xueli'){ this.result.xueli = e[0].label }
				if(this.which=='xinzi'){ this.result.xinzi = e[0].label+'-'+e[1].label }
				if(this.which=='renshu'){ this.result.renshu = e[0].label }
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

