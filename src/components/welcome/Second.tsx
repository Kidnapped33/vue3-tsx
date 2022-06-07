import s from "./Welcome.module.scss";
import pig from "../../assets/icons/watermelon.svg";
import { FunctionalComponent } from "vue";

export const Second:FunctionalComponent = () => {
  return <div class={s.card}>
     <img src={pig} />
     <h2>第二只🐷<br />还会省钱</h2>
  </div>;
};


Second.displayName = 'Second';
