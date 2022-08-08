import { defineComponent } from "vue";
import { Button } from "../shared/Button";
import { FloatButton } from "../shared/FloatButton";
import s from "./StartPage.module.scss";

export const StartPage = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      console.log("点击了onClick");
    };
    return () => (
      <div class={s.button_wapper}>
        <Button class={s.button} onClick={onClick}>
          按钮
        </Button>
        <FloatButton iconName="add"/>
      </div>
    );
  },
});
