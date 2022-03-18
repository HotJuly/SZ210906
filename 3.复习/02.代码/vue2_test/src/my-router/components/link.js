import Vue from 'vue';

export default {
    name:"RouterLink",
    functional:true,
    props:{
        to:{
            type:String,
            required:true
        },
        tag:{
            type:String,
            default:"a"
        }
    },
    render:(createElement,{parent,data,props,children})=>{
        // 第一个实参是createElement方法用于创建虚拟DOM
        // 第二个实参是context对象,内部具有与当前组件相关的重要信息

        /*
            router-link组件
                生成一个a标签存放于页面上,禁用a标签的默认行为,当用户点击a标签,就控制用户进行跳转
        */

        data.on={
            click(event){
                event.preventDefault();
                Vue.prototype.$router.push(props.to)
            }
        }

        data.attrs.href=props.to;
        
        return createElement(props.tag,data,children);
    }
}