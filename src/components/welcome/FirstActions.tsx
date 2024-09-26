import s from './Welcome.module.scss';
import { RouterLink } from 'vue-router';
import { FunctionalComponent } from 'vue';

export const FirstActions: FunctionalComponent = () => {
  return <div class={s.actions}>
    <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
    <RouterLink to="/welcome/Second" >下一页</RouterLink>
    <RouterLink to="/items" >跳过</RouterLink>
  </div>
}

FirstActions.displayName = 'FirstActions'