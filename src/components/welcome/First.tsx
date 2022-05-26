import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import s from "./Welcome.module.scss";

import { WelcomeLayout } from "./WelcomeLayout";
import pig from "../../assets/icons/watermelon.svg";

export const First = defineComponent({
  setup() {

    const slots = {
        icon : () => <img class={s.icon} src={pig} />,
        title : () =>  <h2>123<br/>测试用例</h2>,
        nextPage : () => <RouterLink to="/welcome/second">下一页</RouterLink>
    }
    return () => <WelcomeLayout v-slots={slots}/>
  },
});
