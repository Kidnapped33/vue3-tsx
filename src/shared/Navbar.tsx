import { defineComponent } from "vue";
import s from './Navbar.module.scss'

export const Navbar = defineComponent({
  setup:(props,context)=>{
    return () => (
      <div class={s.navbar}>{context.slots.default?.()}</div>
    )
  }
})


