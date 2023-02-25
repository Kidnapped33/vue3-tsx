import { createApp } from "vue";
import 'vant/lib/index.css';
import { App } from "./App";
import { createRouter } from "vue-router";
import { routes } from "./config/routes";
import { history } from "./shared/history";
import '@svgstore';
// import './assets/stylesheets/vars.scss';

const router = createRouter({ history, routes });

const app = createApp(App);
app.use(router);
app.mount("#app");
