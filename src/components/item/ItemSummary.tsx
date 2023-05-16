import { defineComponent, onMounted, PropType, ref, watch } from "vue";
import { RouterLink } from "vue-router";
import { staticMenu } from "../../api/watermelon/api";
import { Button } from "../../shared/Button";
import { DateTime } from "../../shared/DateTime";
import { FloatButton } from "../../shared/FloatButton";
import { Money } from "../../shared/Money";
import s from "./ItemSummary.module.scss";
import { Time } from "../../shared/time";

export const ItemSummary = defineComponent({
  props: {
    startTime: {
      type: String as PropType<string>,
      required: false,
    },
    endTime: {
      type: String as PropType<string>,
      required: false,
    },
  },
  setup: (props, context) => {
    const itemList = ref<any[]>([]);
    const hasMore = ref(false);
    const page = ref(0);

    const fetchItems = async () => {

      const data = {
        happened_after: props.startTime,
        happened_before: props.endTime,
        page: page.value + 1,
      };
      
      // 获取明天
      console.log('last ---',data.happened_before,new Time(data.happened_before).getNextDay().format())
      
      if(!data.happened_after) return 
      console.log('触发了1')
      const response = await staticMenu(data);
      console.log('触发了2')

      const { resources, pager } = response.data;
      itemList.value.length = 0
      itemList.value?.push(...resources);
      

      hasMore.value = (pager.page - 1) * pager.per_page + resources.length < pager.count;

      page.value += 1;

        /**收入统计总额度 */
        incomeTotal.value =
        response.data.resources
          .filter((item: any) => item.kind === "income")
          .reduce((total: any, current: any) => total + current.amount, 0);

      /**支出统计总额度 */
      expensesTotal.value =
      response.data.resources
          .filter((item: any) => item.kind === "expenses")
          .reduce((total: any, current: any) => total + current.amount, 0);
    };

    const incomeTotal = ref<number>(0);
    const expensesTotal = ref<number>(0);

    onMounted(fetchItems);

    watch(()=>[props.startTime,props.endTime], ()=>{
      itemList.value = []
      hasMore.value = false
      page.value = 0
      fetchItems()
    })

    return () => (
      <div class={s.wrapper}>
        <ul class={s.total}>
          <li class={s.red}>
            <span>收入</span>
            <span>{<Money value={incomeTotal.value}/>}</span>
          </li>
          <li class={s.green}>
            <span>支出</span>
            <span>{<Money value={expensesTotal.value}/>}</span>
          </li>
          <li>
            <span>净收入</span>
            <span>{<Money value={incomeTotal.value - expensesTotal.value}/>}</span>
          </li>
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
                    <span class={s.amount}>
                      ￥{(<Money value={item?.amount}/>)}
                    </span>
                  </div>
                  <div class={s.time}>{ <DateTime value={item?.updated_at} />}</div>
                </div>
              </li>
            );
          })}
        </ol>
        <div class={s.more}>
          {
            hasMore.value ? <Button onclick={fetchItems}> 加载更多</Button> :  '没有更多了'
          } 
        </div>
        <RouterLink to="/items/create">
          <FloatButton iconName="add" />
        </RouterLink>
      </div>
    );
  },
});
