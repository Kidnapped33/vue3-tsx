import { defineComponent } from "vue";
import { Button } from "../shared/Button";
import { Center } from "../shared/Center";
import { FloatButton } from "../shared/FloatButton";
import { Icon } from "../shared/Icon";
import { Navbar } from "../shared/Navbar";
import s from "./StartPage.module.scss";

export const StartPage = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      console.log("点击了onClick");
    };
    return () => (
      <div>
        <Navbar>123</Navbar>
        <Center class={s.img_wrapper}>
          <Icon name="watermelon" class={s.img}/>
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={onClick}>
            按钮
          </Button>
        </div>
        <FloatButton iconName="add" />
      </div>
    );
  },
});
