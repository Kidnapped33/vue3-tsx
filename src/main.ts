import { createApp } from "vue";
import { App } from "./App";
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./config/routes";
import { history } from "./shared/history";

const router = createRouter({
  history, //  history:history 的缩写
  routes, // `routes: routes` 的缩写
});

const app = createApp(App);
app.use(router);
app.mount("#app");
