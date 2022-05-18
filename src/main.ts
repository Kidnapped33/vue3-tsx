import { createApp } from "vue";
import { App } from "./App";
import { One } from "./views/One";
import { Two } from "./views/Two";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: One },
  { path: "/two", component: Two },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

const app = createApp(App);
app.use(router);
app.mount("#app");
