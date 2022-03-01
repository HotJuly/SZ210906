<template>
	<view>
		detail
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		// onLoad(options){
		// 	// 使用onLoad生命周期的形参options,依旧可以接收到路由地址中query传参的数据
		// 	console.log('options',options)
		// },
		mounted(){
			// 如果使用mounted生命周期,想要得到路由地址中的query参数,就需要找到this.$mp对象
			console.log('this',this.$mp.query)
		}
	}
</script>

<style lang="stylus">

</style>
