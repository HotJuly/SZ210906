import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        cancelFn:{

        }
    },
    mutations:{
        ADDCANCELFNMUTATION(state,{url,cb}){
            state.cancelFn[url] = cb;
        },
        DELETECANCELFNMUTATION(state,{url}){
            delete state.cancelFn[url];
        },
        CLEARCANCELFNMUTATION(state){
            Object.values(state.cancelFn).forEach((cb)=>{
                cb();
            })

            state.cancelFn = {};
        }
    }
})