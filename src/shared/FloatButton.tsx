import { defineComponent } from "vue";
import add from "../assets/icons/add.svg";
import { Icon } from "./Icon";
import s from "./FloatButton.module.scss";

export const FloatButton = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>
        <Icon name={add} class={s.icon}/>
      </div>
    );
  },
});
