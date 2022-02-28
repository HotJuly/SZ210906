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
		
		<scroll-view scroll-x="true" class="navScroll" enable-flex>
			<view class="navItem active">推荐</view>
			<view 
			class="navItem" 
			v-for="(item,index) in indexData.kingKongModule.kingKongList"
			:key="item.L1Id"
			>{{item.text}}</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				title: 'Hello1',
				indexData:{}
			}
		},
		// onLoad() {
		// 	console.log('onLoad')
		// },
		// created(){
		// 	console.log('created')
		// },
		mounted(){
			// uniapp既可以使用小程序的生命周期,也可以使用Vue的生命周期,一般情况下都可以使用
			// console.log('mounted')
			
			// Vue中发送请求使用的是axios
			// 小程序中发送请求使用的是wx.request
			// uniapp兼容小程序的绝大多数API,也就是说可以直接使用wx的方法
			// uniapp和小程序的官方文档几乎相同,基本上都可以参考小程序的API文件开发uniapp
			// 
			uni.request({
				url:'http://localhost:5000/getIndexData',
				success:(res)=>{
					// console.log('success',res)
					// 可以直接使用Vue语法进行数据更新,不需要使用小程序的
					this.indexData = res.data
				}
			})
		},
		methods: {}
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
			display flex
			height 80upx
			.navItem
				width 140upx
				height 80upx
				flex-shrink 0
				font-size 28upx
				text-align center
				line-height 80upx
				&.active
					border-bottom 4upx solid red
					box-sizing border-box
</style>
