// import { defineComponent } from "vue";
// import { RouterLink } from "vue-router";
// import s from "./Welcome.module.scss";

// import { WelcomeLayout } from "./WelcomeLayout";
// import pig from "../../assets/icons/watermelon.svg";

// export const Forth = defineComponent({
//   setup() {
//     return () => <WelcomeLayout>
//       {{
//          icon : () => <img class={s.icon} src={pig} />,
//          title : () =>  <h2>第四只<br/>测试用例</h2>,
//          nextPage : () => <RouterLink to="/welcome/start">下一页</RouterLink>
//       }}
//     </WelcomeLayout>
//   },
// });

import s from "./Welcome.module.scss";
import pig from "../../assets/icons/watermelon.svg";
import { FunctionalComponent } from 'vue';

export const Forth:FunctionalComponent = () => (
  <div class={s.card}>
    {/* <svg>
      <use xlinkHref='#cloud'></use>
    </svg> */}
    <img src={pig} />
    <h2>每日提醒<br />不遗漏每一笔账单</h2>
  </div>
)

Forth.displayName = 'Forth'