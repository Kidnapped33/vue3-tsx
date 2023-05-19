import * as echarts from "echarts";
import { HtmlHTMLAttributes, defineComponent, onMounted, ref } from "vue";
import s from "./Line.module.scss";
import { Time } from "../../../shared/time";

export const Line = defineComponent({
  props:{
    data:{
      type: Array,
      required: true,
    }
  },
  setup: (props, context) => {
    const refLine = ref<HTMLDivElement>();
     // 获取本周7天
     const getThisWeekDates = () => {
      const today = new Date();
      const currentDayOfWeek = today.getDay(); // 获取今天是星期几，0代表星期日，1代表星期一，以此类推

      // 计算本周的第一天和最后一天
      const firstDayOfWeek = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - currentDayOfWeek,
        0,
        0,
        0
      );
      const lastDayOfWeek = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + (6 - currentDayOfWeek),
        0,
        0,
        0
      );

      const dates = [];

      // 循环获取本周的七个日期
      for (let i = 0; i < 7; i++) {
        const date = new Date(
          firstDayOfWeek.getFullYear(),
          firstDayOfWeek.getMonth(),
          firstDayOfWeek.getDate() + i,
          0,
          0,
          0
        );
        const formatDate = new Time(date).format("MM-DD");
        dates.push(formatDate);
      }
      console.log("now ", dates);
      return dates;
    };

    const sevenDays = getThisWeekDates()

    const getData = () => {
      let myChart = echarts.init(refLine.value!);
      myChart.setOption({
        xAxis: {
          type: "category",
          data: sevenDays,
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
    };

    onMounted(() => {
      getData();
    });

    return () => <div ref={refLine}  class={s.lineChart}></div>;
  },
});
