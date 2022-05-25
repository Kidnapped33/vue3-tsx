import { defineComponent } from "vue";
import s from "./Welcome.module.scss";
import { RouterLink } from "vue-router";

export const WelcomeWapper = defineComponent({
  setup(props,{ slots }) {
    return () => (
        <div class={s.wapper}>
          <div class={s.card}>
            {slots.icon?.()}
            {slots.title?.()}
          </div>
          <div class={s.actions}>
            <RouterLink to="" class={s.fake}>跳过</RouterLink>
            {slots.nextPage?.()}
            <RouterLink to="/start">跳过</RouterLink>
          </div>
        </div>
      );
  },
});
