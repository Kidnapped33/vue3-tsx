import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import s from "./First.module.scss";
import pig from "../../assets/icons/watermelon.svg";

export const Second = defineComponent({
  setup() {
    return () => (
      <div class={s.wapper}>
       <div class={s.card}>
         <img class={s.pig} src={pig}></img>
         <h2>第二只<br/>还要会省钱</h2>
       </div>
       <div  class={s.actions}>
         <RouterLink to="" class={s.fake}>跳过</RouterLink>
         <RouterLink to="/welcome/third">下一页</RouterLink>
         <RouterLink to="/start">跳过</RouterLink>
       </div>
      </div>
    );
  },
});
