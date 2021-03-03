
import {onBeforeUnmount, onMounted , ref} from 'vue';
export default function(){
    const pageX = ref<number|null>(null);
    const pageY = ref<number|null>(null);
    const handleClick = function(event: MouseEvent){
        // console.log('click',event)
        const {clientX,clientY} = event;
        // console.log(clientX,clientY)
        pageX.value=clientX;
        pageY.value=clientY;
      };
    onMounted(()=>{
      document.addEventListener('click',handleClick);
    })
    onBeforeUnmount(()=>{
      document.removeEventListener('click',handleClick);
    })

    return {
        pageX,
        pageY
    }
}