import { defineComponent } from "vue";
import { Charts } from "../components/item/Statistics/Charts";
import { MainLayout } from "../layouts/MainLayout";
import { TimeTabsLayout } from "../layouts/TimeTabsLayout";
import { OverlayIcon } from "../shared/Overlay";
export const StatisticsPage = defineComponent({
  setup: (props, context) => {
    return () => (
      <MainLayout>
        {{
          title: () => "统计",
          icon: () => <OverlayIcon />,
          default: () => <>
          <TimeTabsLayout reFresh={true} component={Charts}/>
          </>,
        }}
      </MainLayout>
    );
  },
});
