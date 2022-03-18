import RouterView from './components/view';
import RouterLink from './components/link';


function install(Vue){
    // 用于将router-view组件注册为全局组件
    Vue.component(RouterView.name,RouterView);

    // 用于将router-link组件注册为全局组件
    Vue.component(RouterLink.name,RouterLink);
}

export default install;