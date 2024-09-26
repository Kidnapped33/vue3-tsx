import s from "./Welcome.module.scss";
import { FunctionalComponent } from 'vue';

export const Third: FunctionalComponent = () => {
  return <div class={s.card}>
    <svg>
      <use xlinkHref='#cat4'></use>
    </svg>
    <h2>您的贴心管家</h2>
  </div>
}

Third.displayName = 'Third'
