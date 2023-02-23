import { defineComponent } from "vue";

export const ItemSummary = defineComponent({
  props: {
    name: {
      type: String,
    },
  },
  setup: (props, context) => {
    return () => <div>summary</div>;
  },
});
