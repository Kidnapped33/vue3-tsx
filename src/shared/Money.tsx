import { defineComponent } from "vue";
export const Money = defineComponent({
  props:{
    value: {
      type: Number,
      required: true,
    }
  },
  setup: (props, context) => {
    const addZero = (n:number) =>{
      const nString = n.toString()
      // 1
      //1.0
      //1.00
      const pointIndex = nString.indexOf('.')
      if(pointIndex === -1){
        return nString + '.00'
      }else if(pointIndex === nString.length - 2){
        return nString + '0'
      }else{
        return nString
      }   
    }
    return () => <span>{addZero(props.value / 100)}</span>;
  },
});
