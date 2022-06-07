import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Forth } from "../components/welcome/Forth";
import { FirstActions } from "../components/welcome/FirstActions";
import { SecondActions } from "../components/welcome/SecondActions";
import { ThirdActions } from "../components/welcome/ThirdActions";
import { ForthActions } from "../components/welcome/ForthActions";
import { Welcome } from "../views/Welcome";

export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome/first" },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "", redirect: "/welcome/first" },
      { path: "first", components: { main: First, footer: FirstActions } },
      { path: "second", component: { main: Second, footer: SecondActions } },
      { path: "third", component: { main: Third, footer: ThirdActions } },
      { path: "four", components: { main: Forth, footer: ForthActions }, },
    ],
  },
];
