import { defineComponent, onMounted, PropType, ref } from "vue";
import { staticMenu } from "../../api/watermelon/api";
import { FloatButton } from "../../shared/FloatButton";
import s from './ItemSummary.module.scss';

export const ItemSummary = defineComponent({
  props: {
    startTime: {
      type: String as PropType<string>,
      required: true,
    },
    endTime: {
      type: String as PropType<string>,
      required: true,
    }
  },
  setup: (props, context) => {
    const itemList = ref<any[]>([])
    const incomeTotal = ref<number>(0)
    const expensesTotal = ref<number>(0)
    onMounted(async() => {
      const data = {
          page:1,
          happened_after: "2023-03-17 17:49:18 +0800",
          happened_before: "2023-03-05 17:49:18 +0800"
      }
      const res =  await staticMenu(data)
      itemList.value = res.data.resources
      console.log(res.data.resources)
    
      incomeTotal.value = res.data.resources.filter((item:any) => item.kind === 'income')
      .reduce((total:any, current:any) => total + current.amount, 0) /100

      expensesTotal.value = res.data.resources.filter((item:any) => item.kind === 'expenses')
      .reduce((total:any, current:any) => total + current.amount, 0) /100

    })
    return () => (
      <div class={s.wrapper}>
      <ul class={s.total}>
        <li><span>收入</span><span>{incomeTotal.value}</span></li>
        <li><span>支出</span><span>{expensesTotal.value}</span></li>
        <li><span>净收入</span><span>{incomeTotal.value - expensesTotal.value}</span></li>
      </ul>
      <ol class={s.list}>
        {itemList.value.map((item) => {
          return (
            <li>
            <div class={s.sign}>
              <span>{item?.tags[0]?.sign}</span>
            </div>
            <div class={s.text}>
              <div class={s.tagAndAmount}>
                <span class={s.tag}>{item?.tags[0]?.name}</span>
                <span class={s.amount}>￥{(item?.amount/100).toFixed(2)}</span>
              </div>
              <div class={s.time}>
                {item?.tags[0]?.created_at}
              </div>
            </div>
          </li>
          )
        },)}
      </ol>
      <div class={s.more}>向下滑动加载更多</div>
      <FloatButton iconName='add' />
    </div>
    )
  },
});
