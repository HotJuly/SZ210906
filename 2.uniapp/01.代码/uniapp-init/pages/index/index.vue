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
	</view>
</template>

<script>
	export default {
		data(){
			return {
				title: 'Hello1'
				
			}
		}
		,
		onLoad() {}
		,
		methods: {}
	}
</script>

<style lang="stylus">
	// 向后缩进代码是tab,向前缩进是shift+tab
	.indexContainer
		.header
			display flex
			align-items  center
			// margin-top 20rpx
			padding-top 20rpx
			.logo
				width 118rpx
				height 40rpx
				margin 0 20rpx
				flex-shrink  0
			.search
				position relative
				height 60rpx
				background-color  #ccc
				flex-grow 1
				border-radius  10rpx
				padding-left 60rpx
				.searchInput
					height 60rpx
				.iconfont
					position absolute
					left 20rpx
					top 50%
					transform translateY(-50%)
				.placeholder
					font-size 24rpx
					text-align center
					line-height 60rpx
					text-indent -60rpx
			.username
				width 140rpx
				height 60rpx
				font-size 24rpx
				margin 0 20rpx
				flex-shrink  0
				color red
</style>
