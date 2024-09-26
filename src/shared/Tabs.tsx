import { defineComponent, PropType } from "vue";
import s from "./Tabs.module.scss";

export const Tabs = defineComponent({
  props: {
    classPrefix: {
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
    },
    reFresh: {
      type: Boolean as PropType<boolean>,
      default: false,
      required: true,
    },
  },
  emits: ["update:selected", "update:clearSelectedTag"],
  setup: (props, context) => {
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
        <div class={[s.tabs, cp + "_tabs"]}>
          <ol class={[s.tabs_nav, cp + "_tabs_nav"]}>
            {tabs.map((tab) => (
              <li
                class={[
                  tab.props?.name === props?.selected
                    ? [s.selected, cp + "_selected"]
                    : "",
                  cp + "_tabs_nav_item",
                ]}
                onClick={() => {
                  context.emit("update:selected", tab.props?.name),
                    context.emit("update:clearSelectedTag", undefined);
                }}
              >
                {tab.props!.name}
              </li>
            ))}
          </ol>
          {props.reFresh ? (
            <div key={props.selected}>
              {props.selected}
              {tabs.find((item) => item.props?.name === props.selected)}
            </div>
          ) : (
            <div>
              {tabs.map((item) => (
                <div v-show={item.props?.name === props.selected}>{item}</div>
              ))}
            </div>
          )}
        </div>
      );
    };
  },
});

export const Tab = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
      required: true,
    },
  },
  emits: ["update:selected"],
  setup: (props, context) => {
    return () => <div>{context.slots.default?.()}</div>;
  },
});
