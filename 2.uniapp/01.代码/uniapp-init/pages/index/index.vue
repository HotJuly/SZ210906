<template>
	<!-- uniapp,即兼容html的标签,又兼容小程序的标签
		但是html的部分标签在小程序上没有对应标签,所以不推荐使用html标签
		如果是小程序的标签,在html中,uniapp会实现该标签的所有效果,所以推荐使用小程序标签
	-->
	
	<view class="indexContainer">
		<view class="header">
			<image class="logo" src="/static/images/logo.png" mode=""></image>
			<view class="search">
				<view class="iconfont icon-sousuo"></view>
				<input class="searchInput" placeholder="搜索商品" placeholder-class="placeholder" type="text" value="" />
			</view>
			<button class="username" type="default">七月</button>
		</view>
		
		<scroll-view v-if="indexData.kingKongModule" scroll-x="true" class="navScroll" enable-flex>
			<!-- <view class="navItem" :class="navIndex===-1?'active':''">推荐</view> -->
			<view 
			class="navItem" 
			:class="{
				active:navIndex===-1
			}"
			@tap="changeNavIndex(-1)"
			>推荐</view>
			<view 
			class="navItem" 
			v-for="(item,index) in indexData.kingKongModule.kingKongList"
			:key="item.L1Id" 
			:class="{
				active:navIndex===index
			}"
			@tap="changeNavIndex(index)"
			>{{item.text}}</view>
		</scroll-view>
		
		<scroll-view class="contentScroll" scroll-y="true" >
			<Recommend v-if="navIndex===-1"></Recommend>
			<CateList v-else :navIndex="navIndex"></CateList>
		</scroll-view>
	</view>
</template>

<script>
	import Recommend from '../../components/Recommend/Recommend.vue';
	import CateList from '../../components/CateList/CateList.vue';
	import {mapState,mapActions} from 'vuex';
	export default {
		data(){
			return {
				title: 'Hello1',
				navIndex: -1
				// indexData:{}
			}
		},
		components:{
			Recommend,
			CateList
		},
		// onLoad() {
		// 	console.log('onLoad')
		// },
		// created(){
		// 	console.log('created')
		// },
		async mounted(){
			// uniapp既可以使用小程序的生命周期,也可以使用Vue的生命周期,一般情况下都可以使用
			// console.log('mounted')
			
			// Vue中发送请求使用的是axios
			// 小程序中发送请求使用的是wx.request
			// uniapp兼容小程序的绝大多数API,也就是说可以直接使用wx的方法
			// uniapp和小程序的官方文档几乎相同,基本上都可以参考小程序的API文件开发uniapp
			// 小总结:uniapp开发中,页面结构标签和API都是用uniapp,剩余内容都是用Vue的
			// uni.request({
			// 	// url:'http://localhost:5000/getIndexData',
			// 	url:'/api/getIndexData',
			// 	success:(res)=>{
			// 		// console.log('success',res)
			// 		// 可以直接使用Vue语法进行数据更新,不需要使用小程序的
			// 		this.indexData = res.data
			// 	}
			// })
			// const result = await this.$myAxios('/getIndexData');
			// this.indexData = result;
			// console.log('result',result)
			
			// 触发action的方式
			// this.$store.dispatch('getIndexData');
			// this.getIndexData();
			// this["home/getIndexData"]();
			this.getIndexData1();
			
			
			
			// 获取Vuex数据
			// console.log('1',this.$store.state.home.initData)
			// console.log('2',this.initData2)
			// console.log('3',this.initData3)
			// console.log('4',this.initData)
			// console.log('5',this.initData5)
			
			
		},
		methods: {
			// ...mapActions(["getIndexData"])
			// ...mapActions(["home/getIndexData"])
			// ...mapActions("home",["getIndexData"])
			...mapActions("home",{
				getIndexData1:"getIndexData"
			}),
			changeNavIndex(index){
				this.navIndex = index;
			}
		},
		computed:{
			initData2(){
				/*
					面试题:computed和watch之间的区别
					解答:
						相同点:
							他们都可以监视一个响应式属性的变化,当响应式属性发生变化的时候,会执行对应的回调函数
							
						不同点:
							1.使用场景
								computed
									如果你现在想要一个数据结果,可惜你手头没有,但是它可以根据已有的数据进行计算得到,
									那么就使用计算属性computed
									
									例如:购物车列表计算总价
									
								watch
									如果当一个属性发生变化的时候,需要做一些事情,那么就使用watch
									
									例如:search页面监视keyword关键字的变化,来发送请求
									
								个人认为:computed更注重于结果,而watch更注重于过程
								
							2.返回值
								computed的返回值可以在template中进行使用,然而watch的返回值没有意义
								
							3.computed具有缓存功能,如果依赖的数据没有变化,computed不会重新计算
				*/
			   
			   return this.$store.state.home.initData;
			},
			...mapState({
				initData3:(state)=>{
					return state.home.initData
				}
			}),
			...mapState("home",["initData"]),
			...mapState("home",{
				initData5:"initData"
			}),
			...mapState("home",['indexData'])
		},
		// watch:{
		// 	a(){
				
		// 	},
		// 	'$route.query.keyword'(){
		// 		// 发送请求获取最新的展示列表
		// 	}
		// }
	}
</script>

<style lang="stylus">
	// 向后缩进代码是tab,向前缩进是shift+tab
	.indexContainer
		.header
			display flex
			align-items  center
			// margin-top 20upx
			padding-top 20upx
			.logo
				width 118upx
				height 40upx
				margin 0 20upx
				flex-shrink  0
			.search
				position relative
				height 60upx
				background-color  #ccc
				flex-grow 1
				border-radius  10upx
				padding-left 60upx
				.searchInput
					height 60upx
				.iconfont
					position absolute
					left 20upx
					top 50%
					transform translateY(-50%)
				.placeholder
					font-size 24upx
					text-align center
					line-height 60upx
					text-indent -60upx
			.username
				width 140upx
				height 60upx
				font-size 24upx
				margin 0 20upx
				flex-shrink  0
				color red
		.navScroll
			// display flex
			height 80upx
			white-space nowrap
			.navItem
				display inline-block
				width 140upx
				height 80upx
				flex-shrink 0
				font-size 28upx
				text-align center
				line-height 80upx
				&.active
					border-bottom 4upx solid red
					box-sizing border-box
		.contentScroll
			//小程序高度 = 屏幕百分百高度 - header高度 - nav高度
			// height calc(100vh - 80upx - 80upx)
			//web高度	= 屏幕百分百高度 - header高度 - nav高度 - 顶部导航栏高度 - 底部导航栏高度
			// height calc(100vh - 80upx - 80upx - 88upx - 100upx)
			
			/* #ifdef H5 */
			// height calc(100vh - 80upx - 80upx - 88upx - 100upx)
			/* #endif */
			/* #ifdef MP */
			// height calc(100vh - 80upx - 80upx)
			/* #endif */
			
			height calc(100vh - 80upx - 80upx - var(--window-top) - var(--window-bottom))
</style>
