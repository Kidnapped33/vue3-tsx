import { defineComponent } from "vue";
import add from "../assets/icons/add.svg";

export const FloatButton = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>
        <img src={add}></img>
      </div>
    );
  },
});
