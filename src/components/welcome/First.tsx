import s from "./Welcome.module.scss";
import { FunctionalComponent } from 'vue';

export const First: FunctionalComponent = () => {
  return <div class={s.card}>
    <svg>
      <use xlinkHref='#cat4'></use>
    </svg>
    <h2>掌握收支情况</h2>
  </div>
}

First.displayName = 'First'
