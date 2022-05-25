import { defineComponent } from "vue";
import s from "./Welcome.module.scss";
import { RouterLink } from "vue-router";

import { WelcomeWapper } from "./WelcomeWapper";
import pig from "../../assets/icons/watermelon.svg";

export const Fouth = defineComponent({
  setup() {
    return () => <WelcomeWapper>
      {{
         icon : () => <img class={s.icon} src={pig} />,
         title : () =>  <h2>第四只<br/>测试用例</h2>,
         nextPage : () => <RouterLink to="/welcome/start">下一页</RouterLink>
      }}
    </WelcomeWapper>
  },
});