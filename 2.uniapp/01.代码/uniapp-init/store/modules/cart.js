const state = {
	cartList: [
		{
			"selected":true,
			"count":3,
			"promId": 0,
			"showPoints": false,
			"itemTagList": [{
				"itemId": 1535004,
				"tagId": 128111157,
				"freshmanExclusive": false,
				"name": "暖冬特惠",
				"subType": 204,
				"forbidJump": false,
				"type": 2
			}],
			"rank": 1,
			"id": 1535004,
			"sellVolume": 4001,
			"primaryPicUrl": "https://yanxuan-item.nosdn.127.net/f79906f1b1fe86420ea40473de66ec0e.png",
			"soldOut": false,
			"sortFlag": 0,
			"commentCount": 0,
			"onSaleTime": 1538101761748,
			"picMode": 1,
			"commentWithPicCount": 0,
			"underShelf": false,
			"status": 2,
			"couponConflict": true,
			"forbiddenBuy": false,
			"promotionDesc": "暖冬特惠",
			"limitedFlag": 204,
			"pieceNum": 0,
			"itemSizeTableDetailFlag": false,
			"forbidExclusiveCal": false,
			"rewardShareFlag": false,
			"updateTime": 1575893634989,
			"showCommentEntrance": true,
			"pieceUnitDesc": "件",
			"specialPromTag": "",
			"counterPrice": 299,
			"categoryL2Id": 0,
			"retailPrice": 209,
			"primarySkuPreSellPrice": 0,
			"preLimitFlag": 0,
			"itemPromValid": true,
			"promTag": "暖冬特惠",
			"source": 0,
			"points": 0,
			"primarySkuPreSellStatus": 0,
			"extraServiceFlag": 0,
			"flashPageLink": "",
			"autoOnsaleTimeLeft": 0,
			"innerData": {},
			"saleCenterSkuId": 0,
			"pointsStatus": 0,
			"extraPrice": "",
			"colorNum": 0,
			"showTime": 0,
			"autoOnsaleTime": 0,
			"preemptionStatus": 1,
			"isPreemption": 0,
			"zcSearchFlag": false,
			"name": "男式色拉姆内衣套装2.0",
			"appExclusiveFlag": false,
			"itemType": 1,
			"listPicUrl": "https://yanxuan-item.nosdn.127.net/c2eeb1b872af1b8efc179a7515aacdaa.png",
			"pointsPrice": 0,
			"simpleDesc": "色拉姆发热面料，加厚升级",
			"seoTitle": "",
			"newItemFlag": false,
			"buttonType": 0,
			"primarySkuId": 1636062,
			"displaySkuId": 1636056,
			"productPlace": "",
			"itemSizeTableFlag": false
		},
		{
			"selected":false,
			"count":9,
			"promId": 0,
			"showPoints": false,
			"itemTagList": [{
				"itemId": 1536001,
				"tagId": 128111157,
				"freshmanExclusive": false,
				"name": "暖冬特惠",
				"subType": 204,
				"forbidJump": false,
				"type": 2
			}],
			"rank": 1,
			"id": 1536001,
			"sellVolume": 3634,
			"primaryPicUrl": "https://yanxuan-item.nosdn.127.net/32b8b2d07b1c4327593a4a70993eeac2.png",
			"soldOut": false,
			"sortFlag": 0,
			"commentCount": 0,
			"onSaleTime": 1538101896296,
			"picMode": 1,
			"commentWithPicCount": 0,
			"underShelf": false,
			"status": 2,
			"couponConflict": true,
			"forbiddenBuy": false,
			"promotionDesc": "暖冬特惠",
			"limitedFlag": 204,
			"pieceNum": 0,
			"itemSizeTableDetailFlag": false,
			"forbidExclusiveCal": false,
			"rewardShareFlag": false,
			"updateTime": 1575894115275,
			"showCommentEntrance": true,
			"pieceUnitDesc": "件",
			"specialPromTag": "",
			"counterPrice": 299,
			"categoryL2Id": 0,
			"retailPrice": 209,
			"primarySkuPreSellPrice": 0,
			"preLimitFlag": 0,
			"itemPromValid": true,
			"promTag": "暖冬特惠",
			"source": 0,
			"points": 0,
			"primarySkuPreSellStatus": 0,
			"extraServiceFlag": 0,
			"flashPageLink": "",
			"autoOnsaleTimeLeft": 0,
			"innerData": {},
			"saleCenterSkuId": 0,
			"pointsStatus": 0,
			"extraPrice": "",
			"colorNum": 0,
			"showTime": 0,
			"autoOnsaleTime": 0,
			"preemptionStatus": 1,
			"isPreemption": 0,
			"zcSearchFlag": false,
			"name": "女式色拉姆内衣套装2.0",
			"appExclusiveFlag": false,
			"itemType": 1,
			"listPicUrl": "https://yanxuan-item.nosdn.127.net/02b61fb5700aed6761b7524d98ed0837.png",
			"pointsPrice": 0,
			"simpleDesc": "色拉姆发热面料，加厚升级",
			"seoTitle": "",
			"newItemFlag": false,
			"buttonType": 0,
			"primarySkuId": 1634105,
			"displaySkuId": 1634104,
			"productPlace": "",
			"itemSizeTableFlag": false
		}
	]
}

const mutations = {
	ADDSHOPITEMMUTATION(state,goodInfo){
		console.log('ADDSHOPITEMMUTATION')
		/*
			需求:当用户点击加入购物车时,
				如果购物车中已存在该商品,那么该商品数量加1
				如果购物车中没有该商品,那么将该商品添加入购物车,数量为1
		
		*/
	   const shopItem = state.cartList.find((shopItem)=>{
			return shopItem.id === goodInfo.id
	   })
	   
	   if(shopItem){
		   // 能进入该判断说明购物车存在该商品
		   shopItem.count+=1;
		   console.log('+1',shopItem)
	   }else{
		   // 能进入该判断说明购物车不存在该商品
		   state.cartList.push(goodInfo);
		   this._vm.$set(goodInfo,'count',1);
		   // goodInfo.count = 1;
		   console.log('=1',goodInfo)
	   }
	   
	   /* 
		响应式:当一个属性值被修改时,页面会自动渲染出最新结果
		如何添加一个响应式属性?
			1.Vue.set(target,propertyName,value)
			2.this.$set(target,propertyName,value)
			
		响应式属性创建的时机有哪些?
			1.当组件初始化的时候,Vue会将data中返回的普通对象进行数据劫持,变成响应式对象
			2.当开发者给响应式属性赋值的时候,如果属性值是个对象,那么该对象内部的属性也会变成响应式的
			
		如何快速分辨一个属性是否是响应式属性?
			直接打印某个属性所属的对象,如果该属性是直接显示数据,那么该属性就是非响应式属性
			如果显示的是...,说明当前数据具有getter方法,那么该属性就是响应式属性
	   */
	},
	CHANGESHOPITEMCOUNTMUTATION(state,{type,index}){
		// console.log('CHANGESHOPITEMCOUNTMUTATION',data);
		/*
			需求:
				当用户点击加号时候,将购物车中对应商品数量+1
				当用户点击减号时候,将购物车中对应商品数量-1
						如果商品数量已经是1,就不需要-1了,直接移除该商品
		
		*/
	   const cartList = state.cartList;
	   const shopItem = cartList[index];
	   if(type){
		   shopItem.count+=1;
	   }else{
		   if(shopItem.count===1){
			   cartList.splice(index,1);
		   }else{
			shopItem.count-=1;
		   }
	   }
	},
	CHANGESELECTEDMUTATION(state,index){
		const shopItem = state.cartList[index];
		shopItem.selected = !shopItem.selected;
	},
	CHANGEALLSELECTEDMUTATION(state,selected){
		state.cartList.forEach((shopItem)=>{
			shopItem.selected = selected
		})
	}
}

const actions = {}

const getters = {
	isSelectedAll(state){
		/*
			需求:
				1.如果当前购物车中所有的商品都是选中状态,那么全选按钮也要是选中状态
				2.如果当前购物车中有一个商品是未选中状态,那么全选按钮也要是未选中状态
				3.如果购物车中没有商品,那么全选按钮要是未选中状态
				返回值类型:布尔值
		
		*/
	   if(state.cartList.length===0)return false;
	   const result = state.cartList.every((shopItem)=>{
		   return shopItem.selected
	   })
	   return result;
	}
}


export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
