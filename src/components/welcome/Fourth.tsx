import s from "./Welcome.module.scss";
import { FunctionalComponent } from 'vue';

export const Fourth:FunctionalComponent = () => (
  <div class={s.card}>
    <svg>
      <use xlinkHref='#cat5'></use>
    </svg>
    <h2>规划理财之路</h2>
  </div>
)

Fourth.displayName = 'Fourth'