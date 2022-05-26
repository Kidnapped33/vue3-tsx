import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import s from "./Welcome.module.scss";

import { WelcomeLayout } from "./WelcomeLayout";
import pig from "../../assets/icons/watermelon.svg";

export const Fouth = defineComponent({
  setup() {
    return () => <WelcomeLayout>
      {{
         icon : () => <img class={s.icon} src={pig} />,
         title : () =>  <h2>第四只<br/>测试用例</h2>,
         nextPage : () => <RouterLink to="/welcome/start">下一页</RouterLink>
      }}
    </WelcomeLayout>
  },
});