import { defineComponent } from "vue";
import s from "./First.module.scss";
import pig from "../../assets/icons/watermelon.svg";
import { RouterLink } from "vue-router";

export const First = defineComponent({
  setup() {
    return () => (
      <div class={s.wapper}>
        <div class={s.card}>
          <img class={s.pig} src={pig} />
          {/* <h2>会赚钱<br/>还要会省钱</h2> */}
          <h2>123<br/>测试用例</h2>
        </div>
        <div class={s.actions}>
          <RouterLink to="" class={s.fake}>跳过</RouterLink>
          <RouterLink to="/welcome/second">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </div>
      </div>
    );
  },
});
