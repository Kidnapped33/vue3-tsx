import { defineComponent, PropType, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import s from "./ItemCreate.module.scss";
export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const refKind = ref("支出");
    // const onUpdateSeletcted = (name: string) => {
    //   refKind.value = name;
    // };
    return () => (
      <div>
        <MainLayout>
          {{
            icon: () => (
              <RouterLink to="/Start">
                <Icon name="left" class={s.navIcon}></Icon>
              </RouterLink>
            ),
            title: () => "记一笔",
            default: () => (
              <>
                <Tabs
                  v-model:selected={refKind.value}
                  // onUpdateSeletcted={onUpdateSeletcted}
                >
                  <Tab name="支出"></Tab>
                  <Tab name="收入"></Tab>
                </Tabs>
              </>
            ),
          }}
        </MainLayout>
      </div>
    );
  },
});
