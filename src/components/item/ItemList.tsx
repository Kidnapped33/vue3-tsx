import { defineComponent, PropType, reactive, ref, watchEffect } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { ItemSummary } from "./ItemSummary";
import { OverlayIcon } from "../../shared/Overlay";
import { TimeTabsLayout } from "../../layouts/TimeTabsLayout";

export const ItemList = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    return () => (
      <MainLayout>
        {{
          title: () => "财迷猫",
          icon: () => <OverlayIcon />,
          default: () => (
            <>
              <TimeTabsLayout  reFresh={false} component={ ItemSummary } />
            </>
          ),
        }}
      </MainLayout>
    );
  },
});
