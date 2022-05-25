import { defineComponent } from "vue";
import s from "./Welcome.module.scss";
import { RouterLink } from "vue-router";

import { WelcomeWapper } from "./WelcomeWapper";
import pig from "../../assets/icons/watermelon.svg";

export const Third = defineComponent({
  setup() {
    return () => <WelcomeWapper>
    {{
       icon : () => <img class={s.icon} src={pig} />,
       title : () =>  <h2>第三只<br/>还要会省钱</h2>,
       nextPage : () => <RouterLink to="/welcome/fouth">下一页</RouterLink>
    }}
  </WelcomeWapper>
   
  },
});