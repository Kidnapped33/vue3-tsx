import { defineComponent, PropType, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import { Tags } from "../../shared/Tags";
import { InputPad } from "./InputPad";
import s from "./ItemCreate.module.scss";
export const ItemCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: (props, context) => {
    // interface Tag {
    //   id: number;
    //   name: string;
    //   sign: string;
    //   category: string;
    // }

    enum RefKind {
      expenses = "expenses", // 支出
      income = "income", // 收入
    }

    const refKind = ref<RefKind>(RefKind.expenses);

    
    // const refExpensesTags = ref<Tag[]>([
    //   { id: 1, name: "餐饮", sign: "🍔", category: "expenses" },
    //   { id: 2, name: "打车", sign: "￥", category: "expenses" },
    //   { id: 3, name: "聚餐", sign: "￥", category: "expenses" },
    //   { id: 4, name: "打车", sign: "￥", category: "expenses" },
    //   { id: 5, name: "聚餐", sign: "￥", category: "expenses" },
    //   { id: 6, name: "打车", sign: "￥", category: "expenses" },
    //   { id: 7, name: "聚餐", sign: "￥", category: "expenses" },
    // ]);
    // const refIncomeTags = ref<Tag[]>([
    //   // { id: 4, name: "工资", sign: "￥", category: "income" },
    //   // { id: 5, name: "彩票", sign: "￥", category: "income" },
    //   // { id: 6, name: "滴滴", sign: "￥", category: "income" },
    //   // { id: 11, name: "彩票", sign: "￥", category: "income" },
    // ]);

    return () => (
      <div>
        <MainLayout class={s.layout}>
          {{
            icon: () => (
              <RouterLink to="/start">
                <Icon name="left" class={s.navIcon}></Icon>
              </RouterLink>
            ),
            title: () => "记一笔",
            default: () => (
              <>
                <div class={s.wrapper}>
                  <Tabs v-model:selected={refKind.value} class={s.tabs}>
                    <Tab name={RefKind.expenses}>
                      <Tags kind={refKind.value}/>
                    </Tab>
                    <Tab name={RefKind.income}>
                      <Tags kind={refKind.value}/>
                    </Tab>
                  </Tabs>
                  <div class={s.inputPad_wrapper}>
                    <InputPad />
                  </div>
                </div>
              </>
            ),
          }}
        </MainLayout>
      </div>
    );
  },
});
