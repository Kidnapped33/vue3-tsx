import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/First";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Fourth } from "../components/welcome/Fourth";
import { FirstActions } from "../components/welcome/FirstActions";
import { SecondActions } from "../components/welcome/SecondActions";
import { ThirdActions } from "../components/welcome/ThirdActions";
import { FourthActions } from "../components/welcome/FourthActions";
import { Welcome } from "../views/Welcome";
import { StartPage } from "../views/StartPage";

export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome/first" },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "", redirect: "/welcome/first" },
      { path: "first", components: { main: First, footer: FirstActions } },
      { path: "second", components: { main: Second, footer: SecondActions } },
      { path: "third", components: { main: Third, footer: ThirdActions } },
      { path: "four", components: { main: Fourth, footer: FourthActions }, },
    ],
  },
  {
    path: "/Start",
    component: StartPage,
  }
];
