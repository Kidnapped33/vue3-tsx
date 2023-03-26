import { FunctionalComponent } from "vue"
import { RouterLink } from "vue-router";
import s from './Welcome.module.scss';

export const SecondActions: FunctionalComponent = () => {
  return <div class={s.actions}>
    <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
    <RouterLink to="/welcome/Third" >下一页</RouterLink>
    <RouterLink to="/items" >跳过</RouterLink>
  </div>
}

SecondActions.displayName = 'SecondActions';