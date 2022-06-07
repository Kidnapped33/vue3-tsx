import s from "./Welcome.module.scss";
import { FunctionalComponent } from 'vue';
import pig from "../../assets/icons/watermelon.svg";

export const Third: FunctionalComponent = () => {
  return <div class={s.card}>
    {/* <svg>
      <use xlinkHref='#pig'></use>
    </svg> */}
    <img src={pig} />
    <h2>33333333333333<br />还会省钱</h2>
  </div>
}

Third.displayName = 'Third'
