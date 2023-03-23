import { defineComponent, onMounted, PropType, ref } from "vue";
import { RouterLink } from "vue-router";
import { staticMenu } from "../../api/watermelon/api";
import { Button } from "../../shared/Button";
import { FloatButton } from "../../shared/FloatButton";
import { Time } from "../../shared/time";
import s from "./ItemSummary.module.scss";

export const ItemSummary = defineComponent({
  props: {
    startTime: {
      type: String as PropType<string>,
      required: true,
    },
    endTime: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup: (props, context) => {
    const itemList = ref<any[]>([]);
    const hasMore = ref(false);
    const page = ref(0);

    const fetchItems = async () => {
      // const response = await staticMenu('/items', {
      //   happen_after: props.startDate,
      //   happen_before: props.endDate,
      //   page: page.value + 1,
      //   _mock: 'itemIndex',
      // })

      const data = {
        happened_after: props.startTime,
        happened_before: props.endTime,
        page: page.value + 1,
      };

      const response = await staticMenu(data);

      const { resources, pager } = response.data;
      itemList.value.length=0
      itemList.value?.push(...resources);
      hasMore.value =
        (pager.page - 1) * pager.per_page + resources.length < pager.count;
      page.value += 1;

        /**收入统计总额度 */
        incomeTotal.value =
        response.data.resources
          .filter((item: any) => item.kind === "income")
          .reduce((total: any, current: any) => total + current.amount, 0) /
        100;

      /**支出统计总额度 */
      expensesTotal.value =
      response.data.resources
          .filter((item: any) => item.kind === "expenses")
          .reduce((total: any, current: any) => total + current.amount, 0) /
        100;
    };

    const incomeTotal = ref<number>(0);
    const expensesTotal = ref<number>(0);

    onMounted(async () => {

      fetchItems();
      // const staticDate = new Time()
      // /**本月 */
      // console.log('本月第一天',staticDate.firstDayOfMonth().format())
      // console.log('本月最后一天',staticDate.lastDayOfMonth().format())
      // /**上月 */
      // console.log('上月第一天',staticDate.add(-1, "month").firstDayOfMonth().format())
      // console.log('上月最后一天',staticDate.add(-1, "month").lastDayOfMonth().format())
      // /**今年 */
      // console.log('本年第一天',staticDate.firstDayOfYear().format())
      // console.log('本年最后一天',staticDate.lastDayOfYear().format())
      // /**自定义起始时间 */

      // const data = {
      //   page: 1,
      //   happened_after: "",
      //   happened_before: "",
      // };
      // const res = await staticMenu(data);
      // itemList.value = res.data.resources;
      // /**所有数据 */
      // console.log(res.data.resources);

      /**收入统计总额度 */
      // incomeTotal.value =
      //   res.data.resources
      //     .filter((item: any) => item.kind === "income")
      //     .reduce((total: any, current: any) => total + current.amount, 0) /
      //   100;

      // /**支出统计总额度 */
      // expensesTotal.value =
      //   res.data.resources
      //     .filter((item: any) => item.kind === "expenses")
      //     .reduce((total: any, current: any) => total + current.amount, 0) /
      //   100;
    });
    return () => (
      <div class={s.wrapper}>
        <ul class={s.total}>
          <li>
            <span>收入</span>
            <span>{incomeTotal.value}</span>
          </li>
          <li>
            <span>支出</span>
            <span>{expensesTotal.value}</span>
          </li>
          <li>
            <span>净收入</span>
            <span>{incomeTotal.value - expensesTotal.value}</span>
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
                      ￥{(item?.amount / 100).toFixed(2)}
                    </span>
                  </div>
                  <div class={s.time}>{item?.tags[0]?.created_at}</div>
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
