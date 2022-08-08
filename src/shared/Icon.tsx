import { defineComponent, PropType } from "vue";
import s from "./Icon.module.scss";

export const Icon = defineComponent({
  props: {
    name: { type: String as PropType<"add" | "watermelon"> },
  },
  setup: (props, context) => {
    return () => (
      <svg>
        <use xlinkHref={"#" + props.name}></use>
      </svg>
    );
  },
});
