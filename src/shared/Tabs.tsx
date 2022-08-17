import { defineComponent, PropType } from "vue";
import s from "./Tabs.module.scss";

export const Tab = defineComponent({
  props: {
    name: String as PropType<string>,
  },
  setup: (props, context) => {
    return () => <div>{context.slots.default?.()}</div>;
  },
});

export const Tabs = defineComponent({
  props: {
    name: String as PropType<string>,
    selected: String as PropType<string>,
    onUpdateSeletcted: Function as PropType<(name: string) => void>,
  },
  setup: (props, context) => {
    return () => {
      const tabs = context.slots.default?.();
      console.log("tabs", tabs);
      if (!tabs) return () => null;
      //   tabs.forEach((i) => {
      //     if (i.type !== Tab) {
      //       throw Error("<Tabs> only accepts <Tab> as children");
      //     }
      //   });

      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].type !== Tab) {
          console.log("xxxxxxx", tabs[i].type);
          throw new Error("<Tabs> only accepts <Tab> as children");
        }
      }
      return (
        <div class={s.tabs}>
          <ol class={s.tabs_nav}>
            {tabs.map((tab) => (
              <li class={tab.props?.name === props?.selected ? s.selected : ""}>
                {tab.props?.name}
              </li>
            ))}
          </ol>
        </div>
      );
    };
  },
});


