import { defineComponent, onMounted, PropType, ref } from "vue";
import { FormItem } from "../../../shared/Form";
import s from "./Charts.module.scss";
import * as echarts from "echarts";

export const Charts = defineComponent({
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
    const category = ref("expenses");
    const refLineChart = ref<HTMLDivElement>();
    const refPieChart = ref<HTMLDivElement>();
    onMounted(() => {
      // if( refLineChart.value === undefined ){ return };
      let lineChart = echarts.init(refLineChart.value!);
      lineChart.setOption({
        grid: [
          { left: 0, top: 0, right: 0, bottom: 20 }
        ],
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      });
    });
    
    onMounted(()=>{
      // if( refPieChart.value === undefined ){ return };
      let pieChart = echarts.init(refPieChart.value!);
      pieChart.setOption({
        grid: [
          { left: 0, top: 0, right: 0, bottom: 20 }
        ],
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      });  
    });
    return () => (
      <div class={s.wrapper}>
        <FormItem
          label="类型"
          type="select"
          options={[
            { value: "expenses", text: "支出" },
            { value: "income", text: "收入" },
          ]}
          v-model={category.value}
        />
         <div ref={refLineChart} class={s.lineChart}></div>
         <div ref={refPieChart} class={s.pieChart}></div>
      </div>
    );
  },
});
