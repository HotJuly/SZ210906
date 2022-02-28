const state = {
	initData:"我是初始化的数据",
	indexData:{}
}

const mutations = {
	SETINDEXDATAMUTATION(state,indexData){
		state.indexData = indexData;
	}
}

const actions = {
	async getIndexData(context){
		// action的this是store对象,this._vm其中存放的就是Vue的根组件实例对象
		// action的第一个形参会被传入store对象的映射对象(浅拷贝的对象)
		// console.log('getIndexData',this._vm.$myAxios)
		const result = await this._vm.$myAxios('/getIndexData');
		// console.log('result',result)
		context.commit('SETINDEXDATAMUTATION',result)
		
	}
}

const getters = {
	
}


export default	{
	namespaced:true,
	state,
	mutations,
	actions,
	getters
}
