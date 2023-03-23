import { defineComponent, PropType, reactive, ref, watchEffect } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import { Time } from "../../shared/time";
import s from "./ItemList.module.scss";
import { ItemSummary } from "./ItemSummary";
import { Overlay } from "vant";
import { Form, FormItem } from "../../shared/Form";
import { Button } from "../../shared/Button";
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
              <TimeTabsLayout component={ ItemSummary } />
            </>
          ),
        }}
      </MainLayout>
    );
  },
});
