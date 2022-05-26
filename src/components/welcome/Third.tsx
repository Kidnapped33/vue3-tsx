import { defineComponent } from "vue";
import s from "./Welcome.module.scss";
import { RouterLink } from "vue-router";

import { WelcomeLayout } from "./WelcomeLayout";
import pig from "../../assets/icons/watermelon.svg";

// export const Third = defineComponent({
//   setup() {
//     return () => <WelcomeLayout>
//     {{
//        icon : () => <img class={s.icon} src={pig} />,
//        title : () =>  <h2>第三只<br/>还要会省钱</h2>,
//        nextPage : () => <RouterLink to="/welcome/fouth">下一页</RouterLink>
//     }}
//   </WelcomeLayout>
   
//   },
// });


// render 语法 

export const Third = {
    render: () => <WelcomeLayout>
    {{
       icon : () => <img class={s.icon} src={pig} />,
       title : () =>  <h2>第三只<br/>还要会省钱</h2>,
       nextPage : () => <RouterLink to="/welcome/fouth">下一页</RouterLink>
    }}
  </WelcomeLayout> 
};

