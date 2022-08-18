import { defineComponent, PropType, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import { InputPad } from "./InputPad";
import s from "./ItemCreate.module.scss";
export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    const refKind = ref("支出");
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
                >
                  <Tab name="支出">
                    icon 列表
                  </Tab>
                  <Tab name="收入">
                    icon 列表2
                  </Tab>
                </Tabs>
                <div class={s.inputPad_wrapper}>
                  <InputPad />
                </div>
              </>
            ),
          }}
        </MainLayout>
      </div>
    );
  },
});
