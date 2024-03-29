import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter , constantRoutes , asyncRoutes , anyRoutes} from '@/router'
import router from '@/router'
import filterAsyncRoutes from '@/utils/filterAsyncRoutes';
import mapButtons from '@/utils/mapButtons';

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',

    // 存储当前用户能够访问的所有的路由信息对象
    routes:[],
    // 存储服务器返回的用户允许访问的路由名称数组
    routeNames:[],

    // 存储服务器返回的用户的按钮级权限数组
    buttons:{},

    roles:[]
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_PERMISSION:(state,data)=>{
    // console.log('SET_PERMISSION',data);
    const {routes,buttons,roles} = data;

    state.routeNames = routes;

    // const newAsyncroutes = filterAsyncRoutes(asyncRoutes,["Product","Attr"]);
    const newAsyncRoutes = filterAsyncRoutes(asyncRoutes,routes);

    // console.log('newAsyncroutes',newAsyncroutes)
    // 将处理好的异步路由数组,以及任意路由数组,都注入到路由器中,从而实现路由动态注入
    router.addRoutes([...newAsyncRoutes , ...anyRoutes]);

    // 这个属性是为了解决页面左侧menu组件的显示问题
    state.routes = constantRoutes.concat(newAsyncRoutes,anyRoutes);

    state.buttons = mapButtons(buttons);
    state.roles = roles;
  }
}

const actions = {
  // user login
  // login({ commit }, userInfo) {
  //   const { username, password } = userInfo
  //   return new Promise((resolve, reject) => {
  //     login({ username: username.trim(), password: password })
  //     .then(response => {
  //       const { data } = response
  //       commit('SET_TOKEN', data.token)
  //       setToken(data.token)
  //       resolve()
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },

  
  async login({ commit }, userInfo) {
    const { username, password } = userInfo
    try {
      const response = await login({ username: username.trim(), password: password });
      const { data } = response
      // 将请求回来的token存入Vuex的state中(相当于存储于内存中)
      commit('SET_TOKEN', data.token)
      // 将请求回来的token存入cookie中(相当于存储于硬盘中)
      // cookie相对localStorage的好处:每次发送请求会自动携带该token
      setToken(data.token)
    } catch (error) {
      console.log('error')
    }

  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          return reject('Verification failed, please Login again.')
        }

        const { name, avatar } = data

        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)

        // 存储用户权限数据
        commit('SET_PERMISSION',data);

        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  // 开启命名空间,相当于是对所有的state,action,mutation进行模块化管理(类似作用域)
  //  dispatch('user/login')
  namespaced: true,
  state,
  mutations,
  actions
}

