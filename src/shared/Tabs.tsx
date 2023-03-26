import { defineComponent, PropType } from "vue";
import s from "./Tabs.module.scss";

export const Tabs = defineComponent({
  props: {
    classPrefix:{
      type: String,
      required: false,
    },
    selected: {
      type: String as PropType<string>,
      required: false,
    },
    clearSelectedTag: {
      type: String as PropType<string>,
      required: false,
    }
    // onUpdateSeletcted: {
    //   type: Function as PropType<(name: string) => void>,
    //   require: false,
    // },
  },
  emits: ["update:selected","update:clearSelectedTag"],
  setup: (props, context) => {
    // type Kind = keyof typeof kind;
    // const kind =  {
    //   expenses: "支出",
    //   income: "收入", 
    // }
    return () => {
      const tabs = context.slots.default?.();
      if (!tabs) return () => null;
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].type !== Tab) {
          throw new Error("<Tabs> only accepts <Tab> as children");
        }
      }
      const cp = props.classPrefix;
      return (
        <div class={[s.tabs, cp + '_tabs']}>
          <ol class={[s.tabs_nav, cp + '_tabs_nav']}>
            {tabs.map((tab) => (
              <li
                class={[tab.props?.name === props?.selected ? [s.selected, cp + '_selected'] : "",  cp + '_tabs_nav_item']}
                onClick={() => {
                  context.emit("update:selected", tab.props?.name),
                  context.emit("update:clearSelectedTag", undefined)
                }}
              >
                {/* {kind[(tab.props!.name as Kind)]} */}
                { tab.props!.name }
              </li>
            ))}
          </ol>
          <div>
            {tabs.map((item)=><div v-show={item.props?.name === props.selected}>{item}</div> )}
          </div>
        </div>
      );
    };
  },
});

export const Tab = defineComponent({
  props: {
    name: {
      type:String as PropType<string>,
      required: true,
    },
  },
  emits: ["update:selected"],
  setup: (props, context) => {
    return () => <div>{context.slots.default?.()}</div>;
  },
});
