import { defineComponent, ref } from "vue";
import { RouterLink } from "vue-router";
import { MainLayout } from "../layouts/MainLayout";
import { Button } from "../shared/Button";
import { Center } from "../shared/Center";
import { FloatButton } from "../shared/FloatButton";
import { Icon } from "../shared/Icon";
import { Overlay, OverlayIcon } from "../shared/Overlay";
import { Tabs, Tab } from "../shared/Tabs";
import s from "./StartPage.module.scss";

export const StartPage = defineComponent({
  setup: (props, context) => {

    return () => (
      <MainLayout>
        {{
          title: () => "财迷猫",
          icon: () => <OverlayIcon />,
          default: () => (
            <>
              {/* <Tabs>
                <Tab name="本月"></Tab>
                <Tab name="上月"></Tab>
              </Tabs> */}
              <Center class={s.img_wrapper}>
                <Icon name="cat5" class={s.img} />
                   还没有记账哦~ 快去记账吧~
              </Center>
              <div class={s.button_wrapper}>
                <RouterLink to="/items/create">
                  <Button class={s.button}>开始</Button>
                </RouterLink>
              </div>
              <RouterLink to="/items/create">
                <FloatButton iconName="add" />
              </RouterLink>
            </>
          ),
        }}
      </MainLayout>
    );
  },
});
