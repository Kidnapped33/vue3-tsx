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
import { ItemCreate } from "../components/item/ItemCreate";
import { ItemList } from "../components/item/ItemList";
import { ItemPage } from "../views/ItemPage";
import { TagPage } from "../views/TagPage";
import { TagCreate } from "../components/tag/TagCreate";
import { TagEdit } from "../components/tag/TagEdit";
import { SignInPage } from "../views/SignInPage";
import { StatisticsPage } from "../views/StatisticsPage";

export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome" },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "", redirect: "/welcome/first" },
      { path: "first", components: { main: First, footer: FirstActions } },
      { path: "second", components: { main: Second, footer: SecondActions } },
      { path: "third", components: { main: Third, footer: ThirdActions } },
      { path: "four", components: { main: Fourth, footer: FourthActions } },
    ],
  },
  { path: "/start", component: StartPage },
  {
    path: "/items", component: ItemPage,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem("token");
      if (!token) {next('/sign_in');}
      next();
    },
    children: [
      { path: "", component: ItemList },
      { path: "create", component: ItemCreate },
    ],
  },
  {
    path: "/tags", component: TagPage,
    children: [
      { path: "create", component: TagCreate },
      { path: "edit", component: TagEdit },
      // { path: ":id/edit", component: TagEdit },
    ]
  },
  {
    path: "/sign_in", component: SignInPage,
  },
  {
     path: "/statistics", component: StatisticsPage
  }
];
