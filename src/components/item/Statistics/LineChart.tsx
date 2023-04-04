import { defineComponent, onMounted, ref, watchEffect } from "vue";
import * as echarts from "echarts";
import s from "./LineChart.module.scss";
import { Time } from "../../../shared/time";

export const LineChart = defineComponent({
  props:{
    data: {
      type: Array,
      required: true,
    },
  },
  setup: (props, context) => {

    watchEffect(() => {
      console.log('lineChart------',props.data)
    })
    const refLineChart = ref<HTMLDivElement>();

    
   /**
    * [
    {
        "happen_at": "2023-03-27",
        "tag": null,
        "amount": 31900
    },
    {
        "happen_at": "2023-03-29",
        "tag": null,
        "amount": 4664885
    }
]
    */
    const getData = () => {
      let lineChart = echarts.init(refLineChart.value!);
      lineChart.setOption({
        tooltip: {
          trigger: "axis",
          formatter: ([item]: any) => {
            const [x,y] = item.data;
            return `${new Time(new Date(x)).format('YYYY年MM月DD日')}<br/>${y}`;
          }
        },
        grid: [{ left: 0, top: 0, right: 0, bottom: 20 }],
        xAxis: {
          type: "time",
          boundaryGap: ['3%', '0%'],
          axisLabel: {
            formatter: (value: string) =>new Time(new Date(value)).format('MM-DD')    
          },
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      });
    }

    onMounted(() => {getData()});

    return () => <div ref={refLineChart} class={s.lineChart}></div>;
  },
});
