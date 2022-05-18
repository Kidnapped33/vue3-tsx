import { One } from "../views/One";
import { Two } from "../views/Two";
import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Fouth } from "../components/welcome/Fouth";
import { Welcome } from "../views/Welcome";

export const routes: RouteRecordRaw[] = [
  { path: "/", component: One },
  { path: "/two", component: Two },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "first", component: First },
      { path: "second", component: Second },
      { path: "third", component: Third },
      { path: "four", component: Fouth },
    ],
  },
];
