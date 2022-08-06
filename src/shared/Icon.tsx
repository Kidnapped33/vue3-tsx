import { defineComponent } from "vue";
import s from "./Icon.module.scss";

export const Icon = defineComponent({
  props: {
    name: { type: String, required: true },
  },
  setup: (props, context) => {
    return () => <img src={props.name}></img>;
  },
});
