import { defineComponent } from "vue";
import s from "./Overlay.module.scss";

export const Overlay = defineComponent({
    name: "Overlay",
    setup: ( props, context ) => {
        return () => (
            <div class={s.overlay}>Overlay</div>
        )
    }
})
