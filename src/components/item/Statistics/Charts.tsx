import { defineComponent, PropType } from "vue";
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
    return () => <div>图表</div>;
  },
});
