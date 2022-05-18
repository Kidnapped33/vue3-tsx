import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";

export const App = defineComponent({
  setup() {
    return () => (
      <>
        <hearder>
          <ul>
            <li>
              <router-link to="/">One</router-link>
            </li>
            <li>
              <router-link to="/Two">Two</router-link>
            </li>
          </ul>
        </hearder>
        <div>
          <RouterView />
        </div>
        <footer>页脚</footer>
      </>
    );
  },
});
