// import { defineComponent } from "vue";
// import s from "./Welcome.module.scss";
// import { RouterLink } from "vue-router";

// export const WelcomeLayout = defineComponent({
//   setup(props,{ slots }) {
//     return () => (
//         <div class={s.wapper}>
//           <main class={s.card}>
//             {slots.icon?.()}
//             {slots.title?.()}
//           </main>
//           <fotter class={s.actions}>
//             <RouterLink to="" class={s.fake}>跳过</RouterLink>
//             {slots.nextPage?.()}
//             <RouterLink to="/start">跳过</RouterLink>
//           </fotter>
//         </div>
//       );
//   },
// });