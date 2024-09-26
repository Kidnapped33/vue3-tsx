import s from "./Welcome.module.scss";
import { FunctionalComponent } from "vue";

export const Second:FunctionalComponent = () => {
  return <div class={s.card}>
     <svg>
      <use xlinkHref='#cat5'></use>
    </svg>  
     <h2>管理财务</h2>
  </div>;
};


Second.displayName = 'Second';
