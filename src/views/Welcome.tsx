import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from "../components/welcome/Welcome.module.scss";
import logo from "../assets/icons/watermelon.svg";

export const Welcome = defineComponent({
  setup() {
    return () => (
      <div class={s.wapper}>
        <header>
          <img src={logo} />
          <h3>西瓜记账</h3>
        </header>
        <main>
          <RouterView />
        </main>
      </div>
    );
  },
});
