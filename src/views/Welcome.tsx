import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from "./Welcome.module.scss";
import logo from "../assets/icons/watermelon.svg";

export const Welcome = defineComponent({
  setup() {
    return () => (
      <div class={s.wapper}>
        <header>
          <img src={logo} />
          <h3>测试用例</h3>
        </header>
        <main class={s.main}>
          <RouterView />
        </main>
      </div>
    );
  },
});
