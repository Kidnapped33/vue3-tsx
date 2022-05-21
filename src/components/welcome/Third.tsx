import { defineComponent } from "vue";
import s from "./First.module.scss";
import pig from "../../assets/icons/watermelon.svg";
import { RouterLink } from "vue-router";

export const Third = defineComponent({
  setup() {
    return () => (
      <div class={s.wapper}>
        <div class={s.card}>
          <img class={s.pig} src={pig} />
          <h2>第三只<br/>还要会省钱</h2>
        </div>
        <div class={s.actions}>
          <RouterLink to="" class={s.fake}>跳过</RouterLink>
          <RouterLink to="/welcome/fouth">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </div>
      </div>
    );
  },
});
