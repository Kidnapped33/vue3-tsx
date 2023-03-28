import { computed, defineComponent, PropType, ref, watchEffect } from "vue";
import s from "./Bars.module.scss";

export const Bars = defineComponent({
  props:{
    data: {
      type: Array as PropType<any[]>,
      required: true,
  },
},
  setup: (props, context) => {

   
    const data3 = ref([
      { tag: { id: 1, name: "房租", sign: "x" }, amount: 0 },
      { tag: { id: 2, name: "吃饭", sign: "x" }, amount: 0 },
      { tag: { id: 3, name: "娱乐", sign: "x" }, amount: 0 },
    ]);

    watchEffect(() => {
      data3.value = props.data.map(
        (tagInfo) => {
          // tagInfo
          return { tag: { id: tagInfo.tag.id, name: tagInfo.tag.name , sign: tagInfo.tag.sign }, amount: tagInfo.amount };
        }
      )
    });

    const betterData3 = computed(() => {
      const total = data3.value.reduce((sum, item) => sum + item.amount, 0);
      return data3.value.map((item) => ({
        ...item,
        percent: Math.round((item.amount / total) * 100) + "%",
      }));
    });

    return () => (
      <div class={s.wrapper}>
        {betterData3.value.map(({ tag, amount, percent }) => {
          return (
            <div class={s.topItem}>
              <div class={s.sign}>{tag.sign}</div>
              <div class={s.bar_wrapper}>
                <div class={s.bar_text}>
                  <span>
                    {" "}
                    {tag.name} - {percent}{" "}
                  </span>
                  <span> ￥{amount} </span>
                </div>
                <div class={s.bar}>
                  <div class={s.bar_inner} style={{width:`${percent}`}}></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  },
});
