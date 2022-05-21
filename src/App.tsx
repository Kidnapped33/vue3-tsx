import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";
import "./App.module.scss";

export const App = defineComponent({
  setup() {
    return () => (
      <div>
        <RouterView />
      </div>
    );
  },
});
