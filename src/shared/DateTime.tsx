import { computed, defineComponent, PropType } from "vue";
import { Time } from "./time";
export const DateTime = defineComponent({
  props: {
    value: {
      type: [String, Date] as PropType<string | Date>,
      required: true,
    },
    format: {
      type: String as PropType<string>,
      default: "YYYY-MM-DD HH:mm:ss",
    }
  },
  setup: (props, context) => {
    const toDisplay = computed(() => {
      return new Time(props.value).format(props.format)
    });
    // 计算属性需要用 .value
    return () => <div>{toDisplay.value}</div>;
  },
});
