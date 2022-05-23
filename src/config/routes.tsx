import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Fouth } from "../components/welcome/Fouth";
import { Welcome } from "../views/Welcome";

export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome/first" },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "", redirect: "/welcome/first" },
      { path: "first", component: First },
      { path: "second", component: Second },
      { path: "third", component: Third },
      { path: "four", component: Fouth },
    ],
  },
];
