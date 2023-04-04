import {
  computed,
  defineComponent,
  onMounted,
  PropType,
  reactive,
  ref,
} from "vue";
import { FormItem } from "../../../shared/Form";
import s from "./Charts.module.scss";
import { LineChart } from "./LineChart";
import { PieChart } from "./PieChart";
import { Bars } from "./Bars";
import { getEchartsData } from "../../../api/watermelon/api";

export const Charts = defineComponent({
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
    // const category = ref("income");
    const category = ref("expenses");

    const pieBarsData = ref<[]>([])
    const lineData = ref<[]>([])

    const getPieBarsData =async () => {
      const data = {
        happened_after: props.startTime,
        // 	时间终点
        happened_before: props.endTime,
        // 	账目类型
        kind: category.value,
        // 	分组依据
        group_by: "tag_id"
      }
      const res = await getEchartsData(data)
      pieBarsData.value = res.data.groups
    }

    const getLineData = async () => {
      const data = {
        happened_after: props.startTime,
        // 	时间终点
        happened_before: props.endTime,
        // 	账目类型
        kind: category.value,
        // 	分组依据
        group_by: "happen_at"
      }
      const res = await getEchartsData(data)
      lineData.value= res.data.groups
    }

    onMounted(()=>{
      getPieBarsData()
      getLineData()
    })
    return () => (
      <>
        {/* <FormItem
          label="类型"
          type="select"
          options={[
            { value: "expenses", text: "支出" },
            { value: "income", text: "收入" },
          ]}
          v-model={category.value}
        /> */}
        <div class={s.wrapper}>
          <LineChart data={lineData.value}/>
          <PieChart data={pieBarsData.value}/>
          <Bars data={pieBarsData.value}/>
        </div>
      </>
    );
  },
});
