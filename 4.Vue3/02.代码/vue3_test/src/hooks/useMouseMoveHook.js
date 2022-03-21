import { ref , onMounted , onBeforeUnmount} from 'vue';
export default function(){
    const  pageX = ref(0);
    const  pageY = ref(0);

    const callback = function(event){
        // console.log('onmousemove',event)
        const {clientX,clientY} = event;

        pageX.value = clientX;
        pageY.value = clientY;
    };

    onMounted(()=>{
      document.addEventListener('mousemove',callback);
    })

    onBeforeUnmount(()=>{
      document.removeEventListener('mousemove',callback);
    })

    return {
        pageX,
        pageY
    }
}